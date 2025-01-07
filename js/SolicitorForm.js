// script.js

const solicitors = []; // Array to store solicitor details

// Handle solicitor registration
document.getElementById('submitSolicitor').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const yearOfCall = document.getElementById('yearOfCall').value;
  const state = document.getElementById('state').value;
  const address = document.getElementById('address').value;

  if (name && yearOfCall && state && address) {
    solicitors.push({ name, yearOfCall, state, address });
    alert('Solicitor details submitted!');
    document.getElementById('solicitorForm').reset();
  } else {
    alert('Please fill in all fields.');
  }
});

// Handle search for solicitors
document.getElementById('searchSolicitors').addEventListener('click', () => {
  const searchState = document.getElementById('searchState').value;
  const resultsDiv = document.getElementById('searchResults');
  resultsDiv.innerHTML = '';

  if (searchState) {
    const results = solicitors.filter(solicitor => solicitor.state === searchState);
    if (results.length > 0) {
      results.forEach(solicitor => {
        const solicitorDiv = document.createElement('div');
        solicitorDiv.textContent = `Name: ${solicitor.name}, Year of Call: ${solicitor.yearOfCall}, Address: ${solicitor.address}`;
        resultsDiv.appendChild(solicitorDiv);
      });
    } else {
      resultsDiv.textContent = 'No solicitors found in the selected state.';
    }
  } else {
    alert('Please select a state to search.');
  }
});
