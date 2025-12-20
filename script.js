const btnVal = [
  "AC", "+/-","%","÷",
  "7","8","9","×",
  "4","5","6","-",
  "1","2","3","+",
  "0",".","="
];

const Symbols = ["AC", "+/-","%","÷","×","-","+","="];


for (let i = 0; i < btnVal.length; i++) {
  let value = btnVal[i];
  let btn = document.createElement("button");
  btn.innerText = value;

  //Buttons
  document.getElementById("btns").appendChild(btn);

  //button color
  if(Symbols.includes(value)) {
    btn.style.backgroundColor = "rgb(28, 38, 148)";
  } else {
    btn.style.backgroundColor = "rgb(86, 84, 84)"
  }

  //zero button
  if(value == "0") {
    btn.style.width = "200px";
    btn.style.gridColumn = "span 2";
  }

}
