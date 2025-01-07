document.getElementById('solicitor-register-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  // Collect form values
  const formData = {
    name: document.getElementById('name').value.trim(),
    officeAddress: document.getElementById('office-address').value.trim(),
    phoneNumber: document.getElementById('phone-number').value.trim(),
    email: document.getElementById('email').value.trim(),
    state: document.getElementById('state').value.trim(),
    city: document.getElementById('city').value.trim(),
    licenseNumber: document.getElementById('license-number').value.trim(),
    yearOfCall: document.getElementById('year-of-call').value.trim(),
  };

  // Validate fields
  if (!formData.name || !formData.officeAddress || !formData.phoneNumber || 
      !formData.email || !formData.state || !formData.city || 
      !formData.licenseNumber || !formData.yearOfCall) {
    alert('Please fill in all fields.');
    return;
  }

  if (!/^\d{4}$/.test(formData.yearOfCall)) {
    alert('Please enter a valid year of call.');
    return;
  }

  if (!/^\d{10,15}$/.test(formData.phoneNumber)) {
    alert('Please enter a valid phone number (10-15 digits).');
    return;
  }

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Send data to the server
  try {
    const response = await fetch('/solicitor/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    const message = document.getElementById('message');
    if (response.ok) {
      message.textContent = data.message || 'Registration successful!';
      message.style.color = 'green';
    } else {
      message.textContent = data.message || 'Registration failed.';
      message.style.color = 'red';
    }
  } catch (error) {
    console.error('Error:', error);
    const message = document.getElementById('message');
    message.textContent = 'An unexpected error occurred.';
    message.style.color = 'red';
  }
});
