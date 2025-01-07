if (!localStorage.getItem('solicitors')) {
  localStorage.setItem('solicitors', JSON.stringify([]));
}

// Handle solicitor registration
document.getElementById('submitSolicitor').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const yearOfCall = document.getElementById('yearOfCall').value;
  const state = document.getElementById('state').value;
  const address = document.getElementById('address').value;
  const fileInput = document.getElementById('fileInput');

  if (name && yearOfCall && state && address) {
    if (fileInput.files.length > 0) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const imageBase64 = event.target.result; // Get Base64 image data
        const newSolicitor = { name, yearOfCall, state, address, imageBase64 };

        const solicitors = JSON.parse(localStorage.getItem('solicitors'));
        solicitors.push(newSolicitor);
        localStorage.setItem('solicitors', JSON.stringify(solicitors));

        alert('Solicitor details submitted!');
        document.getElementById('solicitorForm').reset();
      };
      reader.readAsDataURL(fileInput.files[0]); // Read the image as Base64
    } else {
      alert('Please upload an image.');
    }
  } else {
    alert('Please fill in all fields.');
  }
});

// Handle search for solicitors
document.getElementById('searchSolicitors').addEventListener('click', () => {
  const searchState = document.getElementById('searchState').value;
  const resultsDiv = document.getElementById('searchResults');
  resultsDiv.innerHTML = '';

  const solicitors = JSON.parse(localStorage.getItem('solicitors'));

  if (searchState) {
    const results = solicitors.filter(solicitor => solicitor.state === searchState);
    if (results.length > 0) {
      results.forEach(solicitor => {
        const solicitorDiv = document.createElement('div');
        solicitorDiv.innerHTML = `
          <strong>Image:</strong><br><img src="${solicitor.imageBase64}" alt="Solicitor Photo" style="max-width: 100px; border: 1px solid #ccc;">
          <p><strong>Name:</strong> ${solicitor.name}<br>
          <strong>Year of Call:</strong> ${solicitor.yearOfCall}<br>
          <strong>Address:</strong> ${solicitor.address}<br>
          <strong>Company Name:</strong> ${solicitor.companyname}<br></p>
        `;
        resultsDiv.appendChild(solicitorDiv);
      });
    } else {
      resultsDiv.textContent = 'No solicitors found in the selected state.';
    }
  } else {
    alert('Please select a state to search.');
  }
});
