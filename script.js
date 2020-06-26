// Assignment Code
 var generateBtn = document.querySelector("#generate");


  

//  Create a function "checkPW" to validate charater choice between 8 and 128

function checkPW() {
//  Prompt user to enter number of desired password characters and store in variable "PwLength"
    var PwLength = prompt("Select number of characters for your password")
/*
    Check to see if number of characters user entered is between 8 and 128;
    If true:
        1. Set variable "ValidLength" to TRUE
        2. Log message to console including state of "ValidLength" and valid password character count
*/ 
      if (PwLength >=8 && PwLength <=128)
  {
        var ValidLength = true
        console.log ("Valid Password Length? "+ValidLength)
        console.log("Valid Password Length = "+ PwLength)
  }
/*
    If password length criteria is not met:
       1. Set "ValidLength" to FALSE
       2. Log to console
       3. Throw a user alert to enter a number between 8 and 128 and 
       4. re-run the "PwLength" function (recursion)
*/
      else
  { 
        var ValidLength = false  
        console.log ("Valid Password Length? "+ValidLength)
        alert ("Please choose a password character length between 8 and 128")
        checkPW()
  }  
}
 //Add event listener to generate button
generateBtn.addEventListener("click", checkPW);  //Run the checkPW function  


//Prompt User for Password Criteria:
  //1. Does Password Contain Upper Case Letters?
  




// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}


 