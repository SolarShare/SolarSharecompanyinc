document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Updated credentials
    const correctUsername = 'admin';
    const correctPassword = 'Pjk578@';

    if (username === correctUsername && password === correctPassword) {
        // Redirect to the broker page upon successful login
        window.location.href = 'broker.html';
    } else {
        message.textContent = 'Incorrect username or password!';
        message.style.color = '#d9534f';
    }
});

// broker-script.js

function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

document.getElementById('payment-method').addEventListener('change', function() {
    const cryptoOptions = document.getElementById('crypto-options');
    if (this.value === 'crypto') {
        cryptoOptions.style.display = 'flex';
    } else {
        cryptoOptions.style.display = 'none';
    }
});




//copy item 

function copyToClipboard(element) {
            const text = element.innerText.replace('Click to copy: ', '');
            navigator.clipboard.writeText(text).then(function() {
                alert('Copied the text: ' + text);
            }, function(err) {
                console.error('Could not copy text: ', err);
            });
        }