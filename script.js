
// Select the HTML element with id "generate" and store it in the variable generateBtn
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//Define a function named writePassword
function writePassword() {
// call the generatepassword function and store the result in the variable password
  var password = generatePassword();
  //Select the HTMl element with the id "password" and store it in the variable passwordText
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//add an event listener to the generated element. Listening for a "click" event. and calling the writePassword function
//Define a function named generatePassword
generateBtn.addEventListener("click", writePassword);

//Add a function to generate a password based on the user prompts
//Define function named generatePassword
function generatePassword () {
  //Call the promptPasswordlength function and store the result in the variable passwordLength
  var passwordLength = promptpasswordlength();
  // Validate password length using IF the password length is empty, then is not equal to the isNaN determines if its a value. Ensures that the password length is greater than eight characters and less than 128.
  if (passwordLength === null || isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    //otherwise instruct the window to display the invalid entry and wait for the user to dismiss the message
    alert("Please enter a valid password length between 8 and 128 characters.");
    //Return ends the functions and specifies a value to return to the function caller
    return "";
  }

// These VAR declare the function called includeLowercase initializing the confirm method displaying the message "include lowercase characters?"
var includeLowercase = confirm("Include lowercase Characters?");
// These VAR declare the function called includeLowercase initializing the confirm method displaying the message "include uppercase characters?"
var includeUppercase = confirm("Include uppercase Characters?");
// These VAR declare the function called includeLowercase initializing the confirm method displaying the message "include numeric characters?"
var includeNumeric = confirm("Include numeric Characters?");
// These VAR declare the function called includeLowercase initializing the confirm method displaying the message "include special characters?"
var includeSpecial = confirm("Include special Characters?");

//Validate that at least one of the character types is selected

if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
//using the If statement and the logical NOT "!" verifies if the request does not include a lowercase, uppercase, numeric or special characters.
  alert("Please select at least one character type.");

  return "";
}

var password = generateRandomPassword(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial);

return password;
}

function promptPasswordlength() {

  var lengthInput = prompt("Enter the length of the password (between 8 and 128 characters):");

  return parseInt(lengthInput);

}
//create function to generate a random password, this function uses the generateRandomPassword using the length specified then, use IF function above to include at least one of the characters
function generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
// use the variable with the listed lower case letters below
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
// use the variable with the listed uppercase letters below
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// use the variable with the listed numeric characters below
var numericCharacters = "0123456789";
// use the variable with the listed special characters below
var specialCharacters = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?" ; 

//Initialize the characters set to use
// the variable is looking at the character set criteria listed below in the IF items 
var charactersSet = "";

//if it includes lowercase
if (includeLowercase) {
// then include the character set then add a lower case item from the lowercaseCharacters list.
charactersSet += lowercaseCharacters;
}
// then include the character set then add a uppercase item from the uppercaseCharacters list.
if (includeUppercase) {

charactersSet += uppercaseCharacters;
}
// then include the character set then add a numeric item from the numericCharacters list.
if (includeNumeric) {

  charactersSet += numericCharacters;
}
// then include the character set then add a special item from the specialCharacters list.
if (includeSpecial) {

charactersSet += specialCharacters;
}

//Generate the password
//Use the variable password to equal the result of the FOR loop specified below
var password = "";

// for the variable used in the interator "i" to equal 0, then iteration i is the length then use increment operator i++
for (var i = o; i < length; i++) {
//use the variable randomIndex to return a number using the math.floor then using Math.random look at the character set 
//in characterSet then the length specified by the user

var randomIndex = Math.floor(Math.random() * charactersSet.length);

//set the password to add the characterset and sets a set of string called randomIndex.
password += charactersSet.charAt(randomIndex)
}

//this ends the generateRandomPassword returning the password
return password;

}







