function toggleMenu() {
    const navbar = document.getElementById('navbar');
    if (navbar.style.display === 'flex') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'flex';
    }
}

function logout() {
    // Perform any logout operations here, such as clearing session storage or cookies
    alert('Logging out...');
    // Redirect to the login page
    window.location.href = 'index1.html';
}
