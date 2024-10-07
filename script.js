let box = document.getElementById("password");
let length = 8;
let upperCase = "ABCDERGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdgfghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "!@#$%^&*(){}<>?:";

let allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    box.value = password;
}

function copypass() {
    box.select();
    document.execCommand("copy");
}