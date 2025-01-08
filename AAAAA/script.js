document.addEventListener('DOMContentLoaded', () => {
  const sellBtn = document.getElementById('sell-btn');
  const submitPropertyForm = document.getElementById('submit-property-form');
  const authMessage = document.getElementById('auth-message');
  const propertyForm = document.getElementById('property-form');

  let isAuthenticated = false; // Replace this with your real authentication check logic

  // Show the Property Submission Form or Auth Message
  sellBtn.addEventListener('click', () => {
    if (!isAuthenticated) {
      authMessage.classList.remove('hidden');
      propertyForm.classList.add('hidden');
    } else {
      authMessage.classList.add('hidden');
      propertyForm.classList.remove('hidden');
    }
    submitPropertyForm.classList.remove('hidden');
  });

  // Handle Property Form Submission
  propertyForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(propertyForm);

    // Validate Image Upload Count
    const images = formData.getAll('images');
    if (images.length < 2 || images.length > 10) {
      alert('Please upload between 2 and 10 images.');
      return;
    }

    try {
      const response = await fetch('/submit-property', {
        method: 'POST',
        body: formData,
        headers: {
          'userId': 'mock-user-id', // Replace with real user authentication logic
        },
      });

      const result = await response.json();

      if (listingType = free){
        console.log(submit)
        alert('Property submitted successfully and is pending admin approval.')
      } else (listingType = premium) {
        window.location.href = result.paymentUrl; // Redirect for premium payment
        alert("Property submitted successfully and is pending admin aproval")
      }
      if(result.paymentUrl = successful){
      alert('Property submitted successfully and is pending admin approval.');
        propertyForm.reset(); // Clear the form after successful submission
      }

        
    } catch (error) {
      console.error('Error submitting property:', error);
      alert('Failed to submit the property. Please try again.');
    }
  });
});
