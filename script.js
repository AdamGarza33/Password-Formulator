// Assignment code here
var passwordLength = 8;
var array = []
var specialCharacters = ["!", "@", "#", "$", "%", ]
var upperCase = ["A", "B", "C", "D", "E", "F", ]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", ]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ]


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
