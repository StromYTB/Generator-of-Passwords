window.onload = function() {
    var savedPasswords = localStorage.getItem('password');
    if (savedPasswords) {
        document.getElementById("password").innerHTML = savedPasswords;
    }
};

document.getElementById('generate').addEventListener('click', function() {
    var length = parseInt(document.getElementById('length').value);
    var useUppercase = document.getElementById('uppercase').checked;
    var useNumbers = document.getElementById('numbers').checked;
    var useSpecialChars = document.getElementById('specialChars').checked;
 
    var password = generatePassword(length, useUppercase, useNumbers, useSpecialChars);
    document.getElementById('password').textContent = password;
});
 
function generatePassword(length, useUppercase, useNumbers, useSpecialChars) {
    var chars = 'abcdefghijklmnopqrstuvwxyz';
    if (useUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useNumbers) chars += '0123456789';
    if (useSpecialChars) chars += '!@#$%^&*()-_+=<>?';
 
    var password = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomIndex);
    }
    localStorage.setItem('password', password);
    return password;
}