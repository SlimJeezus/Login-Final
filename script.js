let usernames = JSON.parse(localStorage.getItem("usernames")) || [];
let passwords = JSON.parse(localStorage.getItem("passwords")) || [];

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("signup-username").value;
    let password = document.getElementById("signup-password").value;

    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i] === username) {
            alert("Username already exists!");
            return;
        }
    }

    usernames.push(username);
    passwords.push(password);

    localStorage.setItem("usernames", JSON.stringify(usernames));
    localStorage.setItem("passwords", JSON.stringify(passwords));

    alert("Account created successfully!");
    document.getElementById("signup-form").reset();
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i] === username && passwords[i] === password) {
            alert("Successfully logged in!");
            return;
        }
    }

    alert("Invalid username or password!");
});
