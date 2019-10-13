//STEP 1

function halfNumber(number){
    var halfOfNumber = number/2;
    return "Half of "+number+" is "+halfOfNumber;
}
window.console.log(halfNumber(5));

//STEP 2
function squareNumber(number){
    var squareOfNum = number * number;
    return "The result of squaring the number " +number + " is "+squareOfNum;
}
window.console.log(squareNumber(3));

//STEP 3
function percentOf(num1, num2){
    var percent = (num1/num2)*100;
    return num1+" is "+percent+"% of "+num2;
}
window.console.log(percentOf(2,4));

//STEP 4
function findModulus(num1,num2){
    var modulus = num2%num1;
    return modulus+" is the modulus of "+num1+" and "+num2;
}
window.console.log(findModulus(4,10));

//STEP 5
var numbersString = window.prompt("Enter list of numbers to be summed");
function sumOfNumbers(numbers){
    var arrayOfNumbers= numbers.split(",");
    var sum = 0;
    for (var index = 0; index < arrayOfNumbers.length; index++) {
      sum += Number(arrayOfNumbers[index]);
    }
    return "Sum of Numbers is "+sum;
}
window.console.log(sumOfNumbers(numbersString));
