# Homework-3: Build a Random Password Generator Using Javascript
Create an application that generates a random password based on user-selected criteria. The app will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security


## My Approach
1. Create function to set a valid password length
2. Build a pool of candidate characters based on user input
3. Randomize the pool and return the first "n" characters, where "n" = password length from #1
4. Validate that the final password contains at least one data type for all the types the user selected.
    a. If all tests pass, display password to HTML page
    b. If any test fails, randomly substitute a character in the password for a valid character from the missing type, then display password to HTML page


## How it Works
1. First created a prompt for user to enter number of desired password characters and store in variable "PwLength".

2. Run a conditional check to see if number of characters user entered is between 8 and 128;
    If true:
        - Log success message to console including password character count, ELSE
    ELSE If NOT True:
        - Log message to console that user selection is outside allowed range
        - Throw a user alert to prompt them to enter a number between 8 and 128
        - Re-run the "pickPwLength" function (recursion)

3. Using function "buildPwPool", create a pool of possible password characters based on user input which includes options for:
        - Lower case alphabet letters
        - Upper case alphabet letters
        - Numbers
        - Special characters
    (If user selects no character type on first cycle through, throw an alert prompting them to select at least one type and re-apply the function through recursion)

4. Randomly select "n" characters from the password pool, where "n" = the previously selected password length.

5. 

## Files Included
index.html
contact.html
portfolio.html

## What I Learned


Deployed the app to my GitHub repository:
<insert link>
<insert link>
  
