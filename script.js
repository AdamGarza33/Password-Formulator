// Assignment code here
var passwordLength = 8;
var array = []
var specialCharacters = ["!", "@", "#", "$", "%", ]
var upperCase = ["A", "B", "C", "D", "E", "F", ]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", ]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ]

function generatePassword() {


}

function createPrompts() {
    array= [];
    
    passwordLength = parseInt(prompt("How many characters do you want your password to contain? 8-128 characters are required"));

    if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Password length has to contain a number, 8-128 digits. Try again please!");
      return false;  
    }
    if(confirm("Do you want lowercase letters in your password?")) {
        array = array.concat(lowerCase);
      
    }
    if(confirm("Do you want uppercase letters in your password?")) {
        array = array.concat(upperCase);
    }
    if(confirm("Do you want special characters in your password?")) {
    array = array.concat(specialCharacters);
    }
    if(confirm("Do you want also want numbers in your password?")) {
    array = array.concat(numbers);
    }
    return true;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    createPrompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
