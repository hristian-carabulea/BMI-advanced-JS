//Calculate your BMI in the metric system. Weight in kg as an integer number, and height as an integer number as well.
//The first parameter should be the weight and the second should be the height.
var bmi;
var bmiMessage = "No Value";

function bmiCalculatorAdvanced(weight, height) {
  //return (Math.round(weight/(height*height)));
  //return (Math.round(weight/Math.pow(height/100,2)));
  var bmiValue= weight/Math.pow(height/100,2);
  console.log(bmiValue);
  /*   */

  if (bmiValue < 18.5) {
    bmiMessage = "Your BMI is " + Number.parseFloat(bmiValue).toPrecision(3) + ", so you are underweight."
  }
  else if (bmiValue >= 18.5 && bmiValue < 24.9) {
    bmiMessage = "Your BMI is " + Number.parseFloat(bmiValue).toPrecision(3) + ", so you have a normal weight."
  }
  else if (bmiValue >= 25 && bmiValue < 29.9) {
    bmiMessage = "Your BMI is " + Number.parseFloat(bmiValue).toPrecision(3) + ", so you are overweight."
  }
  else if (bmiValue >= 30 && bmiValue < 34.9) {
    bmiMessage = "Your BMI is " + Number.parseFloat(bmiValue).toPrecision(3) + ", so you are obese."
  }
  else if (bmiValue >= 35) {
    bmiMessage = "Your BMI is " + Number.parseFloat(bmiValue).toPrecision(3) + ", so you are extremely obese."
  }

  return bmiMessage; //the precision includes how many digits are before and after the decimal point, e.g. 37.5 is a precision of 3.
}

var weight=prompt("What is your weight in kg? ")
var height = prompt("What is your height in centimeters, e.g. 179? ");

bmiAdvancedMessage = bmiCalculatorAdvanced(weight, height);

alert(bmiAdvancedMessage);
console.log(bmiAdvancedMessage); 