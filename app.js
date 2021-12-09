//Calculate your BMI in the metric system. Weight in kg as an integer number, and height as an integer number as well.
//The first parameter should be the weight and the second should be the height.
var bmi;
var bmiAdvancedMessage = "No Value";

function bmiCalculatorAdvanced(weight, height) {

  //return (Math.round(weight/Math.pow(height/100,2)));
  // I want to show one decimal, so I will not round the result. 
  // I will use Number.parseFloat(x).toPrecision(y) to show BMI with one decimal point.

  var bmiMessage = "No value calculated.";

  // formula => kg / height in meters squared
  // in my version of the program, height is required in centimeters; therefore, divide by 100 to get the formula's required meters.
  var bmiValue= weight / Math.pow(height/100,2);
  console.log(bmiValue);

  //the precision includes how many digits are before and after the decimal point, e.g. 37.5 is a precision of 3.
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
  return bmiMessage; 
}

var weight=prompt("What is your weight in kg? ")
var height = prompt("What is your height in centimeters, e.g. 179? ");

bmiAdvancedMessage = bmiCalculatorAdvanced(weight, height);
console.log(bmiAdvancedMessage); 
alert(bmiAdvancedMessage);
