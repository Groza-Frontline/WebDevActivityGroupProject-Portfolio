var users = [
    { username: 'matthew', password: 'rus'},
];

function validateForm2() {
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;

    // Check if the entered username and password match any user
    var isValidUser = false;
    for (var i = 0; i < users.length; i++) {
        if (usernameInput === users[i].username && passwordInput === users[i].password) {
            isValidUser = true;
            break;
        }
    }

    // Display message
    if (isValidUser) {
        // Successful login
        alert('Login successful!');
        window.location.href = 'resume_matthew.html';
    } else {
        // Failed login
        var errorMessage = document.getElementById('error-message');
        errorMessage.innerHTML = 'Invalid username or password. Please try again.';
    }
}
