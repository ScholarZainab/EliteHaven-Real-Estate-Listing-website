document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();

  // Collect form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('feedback');

  // Validate form inputs
  if (!name || !email || !message) {
    feedback.textContent = 'Please fill in all fields.';
    feedback.style.color = 'red';
    return;
  }

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    feedback.textContent = 'Please enter a valid email address.';
    feedback.style.color = 'red';
    return;
  }

  // Simulate sending message
  feedback.textContent = 'Sending message...';
  feedback.style.color = 'blue';

  // Simulate server request
  setTimeout(() => {
    feedback.textContent = 'Message sent successfully! We will get back to you soon.';
    feedback.style.color = 'green';
    document.getElementById('contact-form').reset(); // Clear the form
  }, 2000);
});
