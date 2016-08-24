// Custom JavaScript by Garrett Estrin | GarrettEstrin.com

var digits = document.querySelectorAll('#digit');
var operators = document.querySelectorAll('#operator')
var clearButton = document.getElementById('ac');
var negativeButton = document.getElementById('+/-');

var equalButton = document.getElementById('equal');

var expression = [];


var readOut = document.querySelector('#readout');

// Begin event listeners for digits
digits.forEach(function(el){
  el.addEventListener('click', function(){
    if(readOut.innerText == 0){
      readOut.innerText = "";
      readOut.innerText +=this.innerText;
    } else if (Number.isInteger(Number(readOut.innerText))) {
      readOut.innerText+=this.innerText;
    }
    else {expression[1] = readOut.innerText;
      readOut.innerText = this.innerText;

      }
  })

})

// Begin event listners for operators
operators.forEach(function(el){
  el.addEventListener('click', function(){
    if(readOut.innerText == 0){
      // do nothing
      console.log(this.innerText + " else");
    }
    // else if(Number.isInteger(readOut.innerText)===false) {
    //   // do nothing
    //   console.log(this.innerText + " else if");
    // }
    else {
      expression[0] = readOut.innerText;
      readOut.innerText = this.innerText;
      console.log(this.innerText + " else");

    }
  })
})
// Evaluate function
var evaluate = function(){
  expression[2] = readOut.innerText;
  if(expression[1] == '+'){
    var result = Number(expression[0]) + Number(expression[2]);
    if(result.length > 8){
      console.log('result is more than 9 characters');
      readOut.innerText = Number(result).toExponential(3);
    }else {
      readOut.innerText = result;
    }
    expression = [];
  } else if (expression[1] == '-'){
    var result = Number(expression[0]) - Number(expression[2]);
    if(result.length > 8){
      readOut.innerText = Number(result).toExponential(3);
    }else{
    readOut.innerText = Number(expression[0]) - Number(expression[2]);
  } expression = [];
  } else if (expression[1] == 'X'){
    var result = Number(expression[0]) * Number(expression[2]);
    if(result.length > 8){
      readOut.innerText = Number(result).toExponential(3);
    }else {
    readOut.innerText = Number(expression[0]) * Number(expression[2]);
  } expression = [];
  } else if (expression[1] == '/'){
    var result = Number(expression[0]) / Number(expression[2]);
    if(result.length > 8){
      readOut.innerText = Number(result).toExponential(3);
    }else {
    readOut.innerText = Number(expression[0]) / Number(expression[2]);
  } expression = [];
  } else if (expression[1] == '%'){
    var result = Number(expression[0]) / Number(expression[2]) * 100;
    if(result.length > 8) {
      readOut.innerText = Number(result).toExponential(3);
    }else {
    readOut.innerText = Number(expression[0]) / Number(expression[2]) * 100;
  } expression = [];
  } else {
    console.log('need more functions')
  }
}

// ClearCal Function
var clearCal = function(){
  if(readOut.innerText != 0){
    readOut.innerText = 0;
  } else {
    expression = [];
  }
}

var makeNeg = function(){
  if(readOut.innerText == 0){
    // do nothing
  } else {
    readOut.innerText = readOut.innerText * -1;
  }
}

// Listener for equal button
equalButton.addEventListener('click', evaluate);
// Listener for clear button
clearButton.addEventListener('click', clearCal);
// listener for negative button
negativeButton.addEventListener('click', makeNeg);
