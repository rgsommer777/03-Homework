var pwLength = "";
var pwPool = "";
var res = "";
LC = "abcdefghijklmnopqrstuvwxyz";
UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
Num = "1234567890";
SpC = "!@#$%^&*()_+`-=?<>";
var password ="";
var newpassword ="";


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
    isLC = confirm ("Should your password contain lower case letters?");
      if (isLC == true) {
        pwPool=(LC)
      console.log ("includes LC",pwPool);
    } else {
      console.log ("no LC",pwPool);
    } 
    isUC = confirm ("Should your password contain upper case letters?");
      if (isUC == true) {
        pwPool=(pwPool + UC);
      console.log ("includes UC",pwPool);
    } else {
      console.log ("no UC",pwPool);
    } 
    isNum = confirm ("Should your password contain numbers?");
      if (isNum == true) {
        pwPool=(pwPool + Num);
      console.log ("includes Numbers",pwPool);
    } else {
      console.log ("no Numbers",pwPool);
    } 
    isSpC = confirm ("Should your password contain special characters?");
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
 }  
 buildPwPool()

//Randomize the password candidate pool
let password ="";

 for (var i=0; i<= pwLength-1; i++){
 password = password + pwPool.charAt(Math.floor(Math.random() * Math.floor(pwPool.length -1)));
 }
 console.log("initial password: "+password)
  

// Return the first characters of the random password (up to the chosen password length)
pwPool.slice(0,pwLength)

// Test password for inclusion of:
    // numbers...  
    //     var re = new RegExp('[0-9]');
    //   if (re.test(password)) {
    //     console.log("Valid for numbers");
    //   } else {
    //     console.log("Invalid for numbers");
    //   } 
    // // ...Upper case alphabet...  
    //     var re = new RegExp('[A-Z]');
    //   if (re.test(password)) {
    //     console.log("Valid for upper case");
    //   } else {
    //     console.log("Invalid for upper case");
    //   }
    // // ...Lower case alphabet...  
    //   var re = new RegExp('[a-z]');
    //   if (re.test(password)) {
    //     console.log("Valid for lower case");
    //   } else {
    //     console.log("Invalid for lower case");
    //   }
    // // ...and special characters   
    //   var re = new RegExp('[!,@,#,$,%,^,&,*,(,),_,+,`,-,=,?,<,>,]');
    //   if (re.test(password)) {
    //     console.log("Valid for special characters");
    //   } else {
    //     console.log("Invalid for special characters");
    //   }
    // Test the data types that were selected for inclusion   
      if (isNum=true) {
      test4Num()    
      }
      else{
        return;
      }
      if (isUC=true) {
      test4UC()    
      }
      else{
        return;
      }
      
      // if (isLC=true) {
      // test4LC()    
      // }
      
      // if (isSpC=true) {
      // test4SpC()    
      // }
    //Create functions to test the selected data type is actually included in the password
    //If it is not present, but supposed to be there, call teh function "randomSwapper" to substitute
    //a valid character to fulfill the condition 
        
    //first for numbers...
  
    function test4Num() {  
        var re = new RegExp('[0-9]');
        if (re.test(password)) {
          console.log("Valid for numbers");
        } else {
          console.log("Invalid for numbers");
          randomSwapper(password,Num);
          password = newpw;
          
          test4Num()
        }
          console.log("new password: "+password);
          document.querySelector ("textarea").placeholder = password;
      }   
       
//...then for upper case alphabet...
      
    function test4UC() {  
        var re = new RegExp('[A-Z]');
        if (re.test(password)) {
          console.log("Valid for upper case");
        } else {
          console.log("Invalid for upper case");
          randomSwapper(password,UC);
          password = newpw;
                
          test4UC()
        }
         console.log("new password: "+password);
         document.querySelector ("textarea").placeholder = password;
      }
              //...then for lower case alphabet...
  
  //function test4LC() {  
  //    var re = new RegExp('[a-z]');
  //    if (re.test(password)) {
  //      console.log("Valid for lower case");
  //    } else {
  //      console.log("Invalid for lower case");
  //      randomSwapper(password,LC);
  //      password = newpw;
                        
  //      test4LC()
  //    }
  //     console.log("new password: "+password);
  //     document.querySelector ("textarea").placeholder = password;
  //  }
  //function test4SpC() {  
  //    var re = new RegExp('[!,@,#,$,%,^,&,*,(,),_,+,`,-,=,?,<,>,]');
  //    if (re.test(password)) {
  //      console.log("Valid for special characters");
  //    } else {
  //      console.log("Invalid for special characters");
  //      randomSwapper(password,SpC);
  //      password = newpw;
                          
  //      test4SpC()
  //    }
  //     console.log("new password: "+password);
     //  document.querySelector ("textarea").placeholder = password;
    //}
 //Create a function to swap in a random target character from source data type to replace target data type 
   function randomSwapper(password,Source) {
    pwRandNum = Math.floor((Math.random() * password.length))+1; //Computes a random number between 1 and source string length
    pwSlicer = pwRandNum -1 ;
    pwSlice = password.replace(pwSlicer,pwRandNum);
    pwRandChr = password.charAt(pwSlicer);
    srcRandNum = Math.floor((Math.random() * Source.length))+1; //Computes a random number between 1 and source string length
    srcSlicer = srcRandNum -1;
    srcSlice = Source.replace(srcSlicer,srcRandNum);
    srcRandChr = Source.charAt(srcSlicer);
    newpw = password.replace(pwRandChr,srcRandChr);
  
    
   }   
}  
