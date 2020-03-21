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

// Start the main function to generate the password
function generatePassword() {

  // Find out how long the user wants the password to be  
  var numCharacters = lengthChecker();

  // Get the full character set that will be used to generate the password
  var fullCharSet = getCharSet();

  // Generate and return the password
  var lenOfSet = fullCharSet.length;
  var retnVal = "";

  for (var i = 0; i < numCharacters; i++) {
    retnVal += fullCharSet.charAt(Math.floor(Math.random() * lenOfSet));
  }
  return retnVal;
}

// Function to get the length the user wants the password to be (note: recursive function)
function lengthChecker() {
  var numChosen = prompt("How long would you like your password to be (must be between 8-128 characters)?");
  numChosen = parseInt(numChosen);

  if (numChosen < 8 || numChosen > 128) {
    alert("You must enter a number between 8 and 128.");
    return lengthChecker();
  } else {
    return numChosen;
  }
}

// Function to get the character set by asking the user what types of characters the user wants to include (note: recursive function)
function getCharSet() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numerals = "0123456789";
  var specialChars = "~@#$%^&*()_-+=<>";
  var charSet = "";

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
    return getCharSet();
  } else {
    return charSet;
  }
}