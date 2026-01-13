// Get references to the buttons by their IDs
const about = document.getElementById('about');
const home = document.getElementById('home');

// Add a click event listener to the first button
about.addEventListener('click', function() {
    // Redirect to the desired page
    window.location.href = 'about.html';
});

// Add a click event listener to the second button
home.addEventListener('click', function() {
    // Redirect to the desired page
    window.location.href = 'home.html';
});