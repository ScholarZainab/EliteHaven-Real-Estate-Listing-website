document.addEventListener('DOMContentLoaded', () => {
  const adminProperties = document.getElementById('admin-properties');

  // Fetch Pending Properties with Pagination
app.get('/pending-properties', (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const pendingProperties = properties.filter((p) => p.status === 'pending');
  const paginatedProperties = pendingProperties.slice(startIndex, endIndex);

  res.status(200).json({
    total: pendingProperties.length,
    page,
    limit,
    data: paginatedProperties,
  });
});

// Fetch User Properties with Pagination
let currentPage = 1;

// Fetch Pending Properties with Pagination
const fetchPendingProperties = async (page = 1) => {
  try {
    const response = await fetch(`/pending-properties?page=${page}&limit=10`);
    const { data, total } = await response.json();

    adminProperties.innerHTML = data.map(
      (property) => `
        <tr>
          <td>${property.propertyType}</td>
          <td>${property.price}</td>
          <td>${property.ownerType}</td>
          <td>
            <a href="${property.document}" target="_blank">View Document</a>
          </td>
          <td>
            <button class="approve" onclick="approveProperty('${property.id}')">Approve</button>
            <button class="reject" onclick="rejectProperty('${property.id}')">Reject</button>
          </td>
        </tr>`
    ).join('');

    renderPaginationControls(total, page);
  } catch (err) {
    console.error('Error fetching pending properties:', err);
  }
};

// Render Pagination Controls
const renderPaginationControls = (total, page) => {
  const totalPages = Math.ceil(total / 10);

  const paginationControls = document.getElementById('pagination-controls');
  paginationControls.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.className = i === page ? 'active' : '';
    button.onclick = () => fetchPendingProperties(i);
    paginationControls.appendChild(button);
  }
};

// Initialize
fetchPendingProperties(currentPage);



// Reject with Comment
window.rejectProperty = async (id) => {
  const reason = prompt('Enter the reason for rejection:');
  if (!reason) return alert('Rejection reason is required.');

  try {
    const response = await fetch(`/reject-property/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reason }),
    });
    const result = await response.json();
    alert(result.message);
    fetchPendingProperties();
  } catch (err) {
    console.error('Error rejecting property:', err);
  }
};

  // Approve Property
  window.approveProperty = async (id) => {
    try {
      const response = await fetch(`/approve-property/${id}`, { method: 'POST' });
      const result = await response.json();
      alert(result.message);
      fetchPendingProperties();
    } catch (err) {
      console.error('Error approving property:', err);
    }
  };
  fetchPendingProperties();
});
// Apply Filters to Admin Properties
const applyFilters = async () => {
  const priceMin = document.getElementById('filter-price-min').value;
  const priceMax = document.getElementById('filter-price-max').value;
  const propertyType = document.getElementById('filter-type').value;

  let query = `/pending-properties?`;
  if (priceMin) query += `priceMin=${priceMin}&`;
  if (priceMax) query += `priceMax=${priceMax}&`;
  if (propertyType) query += `propertyType=${propertyType}`;

  try {
    const response = await fetch(query);
    const { data } = await response.json();
    adminProperties.innerHTML = data.map(
      (property) => `
        <tr>
          <td>${property.propertyType}</td>
          <td>${property.price}</td>
          <td>${property.ownerType}</td>
          <td>
            <a href="${property.document}" target="_blank">View Document</a>
          </td>
          <td>
            <button class="approve" onclick="approveProperty('${property.id}')">Approve</button>
            <button class="reject" onclick="rejectProperty('${property.id}')">Reject</button>
          </td>
        </tr>`
    ).join('');
  } catch (err) {
    console.error('Error applying filters:', err);
  }
};

// Initialize Filters
document.getElementById('apply-filters-btn').addEventListener('click', applyFilters);
