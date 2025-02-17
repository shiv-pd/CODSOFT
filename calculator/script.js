const calciContainer = document.querySelector(".calci-btn-container")
let previousOperatorElement = document.querySelector(".prev-operand")
let curruntOperatorElement = document.querySelector(".curr-operand")

let previousOperator="";
let curruntOperator="";
let operator="";

function compute(){

    let result;
    
    switch (operator){
        case "+":
            result = parseFloat(previousOperator) + parseFloat(curruntOperator);
            break;
        case "-":
            result = parseFloat(previousOperator) - parseFloat(curruntOperator);
            break;
        case "*":
            result = parseFloat(previousOperator) * parseFloat(curruntOperator);
            break;
        case "/":
            result = parseFloat(previousOperator) / parseFloat(curruntOperator);
            break;
        default:
            result = curruntOperator;
            break;
    }
    
    return result;
    
 
}



calciContainer.addEventListener("click", (e)=> {
    let val = e.target.value;
    
        if (val >= "0" && val <= "9"  ){
            curruntOperator += val;
            curruntOperatorElement.innerHTML +=  val;
        }
        
        else if(val === '+' || val === '-' || val === '*' || val === '/' ){
            if (curruntOperator === "") return;
            if (previousOperator !== "" && operator!==""){
                let result = compute();
                previousOperator = result
            }
            else{
                previousOperator = curruntOperator
            }
            operator = val;
         
           
           curruntOperator ="";
           previousOperatorElement.innerHTML =  previousOperator + " " + operator;
           
           curruntOperatorElement.innerHTML = "";
   
        }
        else if(val === "="){
            if (previousOperator === "" || curruntOperator === "" || operator === "") return;
            let result = compute().toString();
            curruntOperatorElement.innerHTML= result;
            previousOperator="";
            curruntOperator= result.toString();
            previousOperatorElement.innerHTML = "";
        }
        
        else if (val === "AC"){
            previousOperator="";
            curruntOperator= "";
            previousOperatorElement.innerHTML = "";
            curruntOperatorElement.innerHTML = ""
        }
        else if (val === "Del"){
            curruntOperator = curruntOperator.slice(0, -1);
            curruntOperatorElement.innerHTML = curruntOperator
        }
        else if (val === "."){
            if(curruntOperator.includes(".")) return;
            curruntOperator += val;
            curruntOperatorElement.innerHTML +=  val;
        }
        
    
})