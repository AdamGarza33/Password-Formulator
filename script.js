// Assignment code here
var passwordLength = 8;
var array = []
var specialCharacters = ["!", "@", "#", "$", "%", ]
var upperCase = ["A", "B", "C", "D", "E", "F", ]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", ]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ]

function generatePassword() {
    var password = "";
    for(var i = 0; i < passwordLength; i++) {
        var random = Math.floor(Math.random() * array.length);
        password = password + array[random]
    }
    return password;

}

function createPrompts() {
    array= [];
    
    passwordLength = parseInt(prompt("How many characters do you want your password to contain? 8-128 characters are required"));

    if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Password length has to contain a number, 8-128 digits. Try again please!");
      return false;  
    }
    if(confirm("Click OK for lower case")) {
        array = array.concat(lowerCase);
      
    }
    if(confirm("Click OK for upper case")) {
        array = array.concat(upperCase);
    }
    if(confirm("Click OK for special characters")) {
    array = array.concat(specialCharacters);
    }
    if(confirm("Click OK for numbers")) {
    array = array.concat(numbers);
    }
    return true;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var rightPrompts= createPrompts();

  if(rightPrompts) {

  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
