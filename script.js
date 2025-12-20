const display = document.getElementById("display");

const btnVal = [
  "AC", "+/-","%","÷",
  "7","8","9","×",
  "4","5","6","-",
  "1","2","3","+",
  "0",".","="
];

const rightSymbols = ["÷","×","-","+","="];
const topSymbols = ["AC", "+/-","%"]

//Equation input
let x = 0;
let opp = null;
let y = null;

function clearAll() {
  x = 0;
  opp = null;
  y = null;
}


for (let i = 0; i < btnVal.length; i++) {
  let value = btnVal[i];
  let btn = document.createElement("button");
  btn.innerText = value;

  //Buttons
  document.getElementById("btns").appendChild(btn);

  //button color
  if(rightSymbols.includes(value) || topSymbols.includes(value) ) {
    btn.style.backgroundColor = "rgb(28, 38, 148)";
  } else 
    btn.style.backgroundColor = "rgb(86, 84, 84)"

  //zero button
  if(value == "0") {
    btn.style.width = "200px";
    btn.style.gridColumn = "span 2";
  }

  btn.addEventListener("click", ()=>{
    if(rightSymbols.includes(value)) {
      if(value == "=") {
        if(x != null) {
          y = display.value;
          let numX = Number(x);
          let numY = Number(y);

          if(opp == "÷") {
            display.value = numX / numY;
          }
          else if(opp == "×") {
            display.value = numX * numY;
          }
          else if(opp == "-") {
            display.value = numX - numY;
          }
          else if(opp == "+") {
            display.value = numX + numY;
          }
          clearAll();
        }
      }
      else {
        opp = value;
        x = display.value;
        display.value = "";
      }
    }/**Clear All */
    else if(topSymbols.includes(value)) {
    if(value == "AC") {
        clearAll();
        display.value = "";
      }/**Positive and Negative Value */
      else if (value == "+/-") {
      if(display.value != "" && display.value != "0") {
        if(display.value[0] == "-") {
          display.value = display.value.slice(1);
        }
        else {
          display.value = "-" + display.value;
        }
      }
      }/**Percentage */
      else if(value == "%") {
        display.value = Number(display.value)/100;
      }
    }//topSymbol end

    /**Numbers and Decimal */
    else {
    if(value == ".") {
      if(display.value != "" && !display.value.includes(value)) {
      display.value += value;
      }
    }
    else if(display.value == "0") {
      display.value = value;
    }
    else {
      display.value += value;
    }
    }//numbers and decimal end
  });//eventlisterner end
  
    
      /*if(value == "AC") {
        clearAll();
        display.value = "";
      }

      /*else if(value == "+/-") {
      if(display.value != "" && display.value != "0") {
        if(display.value[0] == "-") {
          display.value = display.value.slice(1);
        }
      else {
        display.value = "-" + display.value;
      }*/

      }//percentage 
      /*else if(value == "%") {
        display.value = Number(display.value)/100;
      }*/

      
    
    //Numbers and Decimal
    /*else {
      
      if(value == ".") {
        if(display.value != "" && !display.value.includes(value)) {
          display.value += value;
        }

      }
    }
  

}*/
