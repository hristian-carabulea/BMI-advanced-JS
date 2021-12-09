//Calculate your BMI in the metric system. Weight in kg as an integer number, and height as an integer number as well.
//The first parameter should be the weight and the second should be the height.
var bmi;
var bmiMessage = "No Value";

function bmiCalculator (weight, height) {
    
  var bmiValue= Math.round(weight/(height*height));
  var interpretation = " ";
  
  if (bmiValue < 18.5) {
    interpretation = "Your BMI is " + bmiValue + ", so you are underweight."
  }
  else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    interpretation = "Your BMI is " + bmiValue + ", so you have a normal weight."
  }
  else if (bmiValue >= 24.9 ) {
    interpretation = "Your BMI is " + bmiValue + ", so you are overweight."
  }

  return interpretation;
}

var weight = prompt("What is your weight in kg? ")
var height = prompt("What is your height in meters, e.g. 2? ");

bmiMessage = bmiCalculator(weight, height);

console.log(bmiMessage); 
alert(bmiMessage);
