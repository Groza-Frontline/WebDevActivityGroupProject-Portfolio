var users = [];

// Function to handle form submission
function signup() {
    // Get form values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var yearLevel = document.getElementById('yearLevel').value;
    var favoriteFood = document.getElementById('favoriteFood').value;
    var favoriteColor = document.getElementById('favoriteColor').value;


    // Basic validation
    if (!username || !password || !confirmPassword || !yearLevel || !favoriteFood || !favoriteColor) {
        alert('Please fill in all fields');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Create user object
    var newUser = {
        username: username,
        password: password,
        yearLevel: yearLevel,
        favoriteFood: favoriteFood,
        favoriteColor: favoriteColor
    };

    // Add user to the array (or send data to the server in real-world scenario)
    users.push(newUser);

    // Display success message (or redirect to a different page in real-world scenario)
    alert("Username: " + username + " \nPassword: " + password + " \nYear Level: " + yearLevel     + " \nFavorite Food: " + favoriteFood + " \nFavorite Color:" + favoriteColor);
    // Redirect to main.html
    window.location.href = 'main.html';
}
