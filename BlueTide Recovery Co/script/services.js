// Get references to the buttons by their IDs
const home = document.getElementById('home');
const about = document.getElementById('about');

// Add a click event listener to the first button
home.addEventListener('click', function() {
    // Redirect to the desired page
    window.location.href = 'home.html';
});

// Add a click event listener to the second button
about.addEventListener('click', function() {
    // Redirect to the desired page
    window.location.href = 'about.html';
});

