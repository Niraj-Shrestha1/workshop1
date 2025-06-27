// Form Validation
document.getElementById('supportForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '') {
        alert('Name is required.');
        event.preventDefault();
        return;
    }

    if (email === '' || !email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return;
    }

    if (message === '') {
        alert('Message cannot be empty.');
        event.preventDefault();
    }
});
