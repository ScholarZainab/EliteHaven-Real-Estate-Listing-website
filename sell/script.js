document.addEventListener('DOMContentLoaded', () => {
  const sellBtn = document.getElementById('sell-btn');
  const dashboardBtn = document.getElementById('dashboard-btn');
  const userDashboard = document.getElementById('user-dashboard');
  const propertiesList = document.getElementById('properties-list');
  const dashboardProperties = document.getElementById('dashboard-properties');

  // Show/Hide Dashboard
  dashboardBtn.addEventListener('click', () => {
    userDashboard.classList.toggle('hidden');
    fetchUserProperties();
  });

  // Fetch Premium Properties
  const fetchPremiumProperties = async () => {
    try {
      const response = await fetch('/premium-properties');
      const data = await response.json();
      propertiesList.innerHTML = data.map(
        (property) => `
          <div>
            <h3>${property.propertyType}</h3>
            <p>${property.description}</p>
            <p><strong>Price:</strong> $${property.price}</p>
          </div>`
      ).join('');
    } catch (err) {
      console.error('Error fetching premium properties:', err);
    }
  };

  // Fetch User Properties
  const fetchUserProperties = async () => {
    try {
      const response = await fetch('/user-properties');
      const data = await response.json();
      dashboardProperties.innerHTML = data.map(
        (property) => `
          <tr>
            <td>${property.propertyType}</td>
            <td>${property.price}</td>
            <td>${property.status}</td>
          </tr>`
      ).join('');
    } catch (err) {
      console.error('Error fetching user properties:', err);
    }
    let userCurrentPage = 1;

const fetchUserProperties = async (page = 1) => {
  try {
    const response = await fetch(`/user-properties?page=${page}&limit=10`);
    const { data, total } = await response.json();

    dashboardProperties.innerHTML = data.map(
      (property) => `
        <tr>
          <td>${property.propertyType}</td>
          <td>${property.price}</td>
          <td>${property.status}</td>
          <td>
            <a href="${property.document}" target="_blank">View Document</a>
          </td>
        </tr>`
    ).join('');

    renderUserPaginationControls(total, page);
  } catch (err) {
    console.error('Error fetching user properties:', err);
  }
};

// Render User Pagination Controls
const renderUserPaginationControls = (total, page) => {
  const totalPages = Math.ceil(total / 10);

  const paginationControls = document.getElementById('user-pagination-controls');
  paginationControls.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.className = i === page ? 'active' : '';
    button.onclick = () => fetchUserProperties(i);
    paginationControls.appendChild(button);
  }
};

// Initialize
fetchUserProperties(userCurrentPage);

  };

  fetchPremiumProperties();
});
