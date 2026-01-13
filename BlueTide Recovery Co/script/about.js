// Get references to the buttons by their IDs
const services = document.getElementById('services');
const contact = document.getElementById('contact');

// Add a click event listener to the first button
services.addEventListener('click', function() {
    // Redirect to the desired page
    window.location.href = 'services.html';
});

// Add a click event listener to the second button
contact.addEventListener('click', function() {
    // Redirect to the desired page
    window.location.href = 'contact.html';
});
