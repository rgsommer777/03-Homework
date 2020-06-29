var pwLength = "";
var pwPool = "";
LC = "abcdefghijklmnopqrstuvwxyz";
UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
Num = "1234567890";
SpC = "!@#$%^&*()_+`-=?<>";


// Target the "Generate Password" button via the DOM
var generateBtn = document.querySelector("#generate");
//Add event listener to "Generate Password" button -
 //i.e. Run the checkPW function when "Generate Password" button is pressed
generateBtn.addEventListener("click", pickPwLength);  
 
//  Create a function "checkPW" to validate charater choice between 8 and 128
function pickPwLength() {
// Clear password box
document.querySelector ("textarea").placeholder = "";  
//  Prompt user to enter number of desired password characters and store in variable "PwLength"
    var pwLength = prompt("Select number of characters for your password")
/*
    Check to see if number of characters user entered is between 8 and 128;
    If true:
        1. Log success message to console including password character count
        
*/ 
      if (pwLength >=8 && pwLength <=128)
  {
        var ValidLength = true
        console.log ("User chose password length = "+pwLength)
        
  }
/*
    Else, if password length criteria is not met:
       1. Log message to console that user selection is outside allowed range
       3. Throw a user alert to prompt them to enter a number between 8 and 128 
       4. re-run the "pickPwLength" function (recursion)
*/
      else
  { 
        var ValidLength = false  
        console.log ("User selected password length outside of allowed range")
        alert ("Please choose a password character length between 8 and 128")
        pickPwLength()
  }

//Function "buildPwPool" builds the list of possible password characters based on user selections:

function buildPwPool()
{
  var isLC = confirm ("Should your password contain lower case letters?");
      if (isLC == true) {
        pwPool=(LC)
      console.log ("includes LC",pwPool);
    } else {
      console.log ("no LC");
    } 
    var isUC = confirm ("Should your password contain upper case letters?");
      if (isUC == true) {
        pwPool=(pwPool + UC);
      console.log ("includes UC",pwPool);
    } else {
      console.log ("no UC",pwPool);
    } 
    var isNum = confirm ("Should your password contain numbers?");
      if (isNum == true) {
        pwPool=(pwPool + Num);
      console.log ("includes Numbers",pwPool);
    } else {
      console.log ("no Numbers",pwPool);
    } 
    var isSpC = confirm ("Should your password contain special characters?");
      if (isSpC == true) {
        pwPool=(pwPool + SpC);
      console.log ("includes Special Characters",pwPool);
    } else {
      console.log ("no Special Characters",pwPool);
     } 

    if ((isLC+isUC+isNum+isSpC) ==0) {
      alert ("Please select at least one (1) character type")

      buildPwPool()

    }
    // if (isAny = 0) {
    // console.log (isAny);
    // }
 }  
 buildPwPool()

    
//Generate the password randomly and 
let password ="";

 for (var i=0; i<= pwLength-1; i++){
 password = password + pwPool.charAt(Math.floor(Math.random() * Math.floor(pwPool.length -1)));
 }
 console.log(password)
  

// Return the first characters of the random password (up to the chosen password length)
pwPool.slice(0,pwLength)
document.querySelector ("textarea").placeholder = password;
  

    var LCArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var UCArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var NumArray = ['0','1','2','3','4','5','6','7','8','9']
    var SpCArray = ['!','@','#','$','%','^','&','*','(',')','_','+','`','-','=','?','<','>','"'] 
    
    
    // Setup
    //console.log("LCArray: " + LCArray.join(","));
    
    // Test password for inclusion of desired characters
    if (new RegExp(LCArray.join("|")).test(password)) {
        console.log("Valid for Lower Case Inclusion as pw= '" + password + "'");
      } else {
        console.log("INVALID for Lower Case Inclusion as pw = '" + password + "'");
      }
    if (new RegExp(UCArray.join("|")).test(password)) {
        console.log("Valid for Upper Case Inclusion as pw= '" + password + "'");
      } else {
        console.log("INVALID for Upper Case Inclusion as pw = '" + password + "'");
      }
    if (new RegExp(NumArray.join("|")).test(password)) {
        console.log("Valid for Number Inclusion as pw= '" + password + "'");
      } else {
        console.log("INVALID for Number Inclusion as pw = '" + password + "'");
      }
    if (new RegExp(SpCArray.join("|")).test(password)) {
        console.log("Valid for Special Character Inclusion as pw= '" + password + "'");
      } else {
        console.log("INVALID for Special Character Inclusion as pw = '" + password + "'");
      }


    }