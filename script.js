// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generates the password
function generatePassword() {
  
  // Find out how long the user wants the password to be
  var numCharacters = prompt("How long would you like your password to be (must be between 8-128 characters)?");
  numCharacters = parseInt(numCharacters);
  
  if (numCharacters < 8 || numCharacters > 128) {
    alert("You must enter a number between 8 and 128.");
    generatePassword();
  } 

  // Get the full character set that will be used to generate the password
  var fullCharSet = getCharSet();
  

}  
  
  
  
  
  
  
  
  // Get the character set by asking the user what types of characters he wants to include
function getCharSet() {

  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numerals = "0123456789";
  var specialChars = "~@#$%^&*()_-+=<>";
  var charSet = ""
  
  var includeLower = confirm("Do you want to include lowercase letters?");
  if (includeLower) {
    charSet = charSet.concat(lowerCase);
  }

  var includeUpper = confirm("Do you want to include uppercase letters?");
  if (includeUpper) {
    charSet = charSet.concat(upperCase);
  }
  
  var includeNumbers = confirm("Do you want to include numbers?");
  if (includeNumbers) {
    charSet = charSet.concat(numerals);
  }
  
  var includeSpecial = confirm("Do you want to include special characters?");
  if (includeSpecial) {
    charSet = charSet.concat(specialChars);
  }
  
  if (!includeLower && !includeUpper && !includeNumbers && !includeSpecial) {
    alert("You must choose at least one type of character.");
    getCharSet()
  }
  return charSet;
}
