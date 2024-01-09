function generatePassword(strength) {
    // Define characters based on strength
    let charset = "";
    if (strength === 'weak') {
        charset = "abcdefghijklmnopqrstuvwxyz";
    } else if (strength === 'basic') {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (strength === 'strong') {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";
    }

    // Get password length from user input
    const passwordLength = document.getElementById("length").value;

    // Generate the password
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    // Display the generated password in the input field
    const passwordField = document.getElementById("password");
    passwordField.value = password;

    // Set focus to the password field for better user experience
    passwordField.focus();

    // Copy to clipboard
    document.getElementById("password").select();
    document.execCommand("copy");

    // Show notification
    showNotification();
}

function showNotification() {
    const notification = document.getElementById("notification-container");
    notification.style.display = "block";
    notification.innerText = "Password copied to clipboard!";

    // Hide notification after 2 seconds
    setTimeout(() => {
        notification.style.display = "none";
    }, 2000);
}
