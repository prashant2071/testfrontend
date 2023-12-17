import React from 'react';

const resultPageStyle = {
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  marginTop: '50px',
};

const tableStyle = {
  borderCollapse: 'collapse',
  width: '80%',
  margin: '20px auto',
};

const thStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  padding: '15px',
};

const tdStyle = {
  border: '1px solid #ddd',
  padding: '15px',
};

const searchResults = [
  {
    scrapped_restaurant: 'Sample Restaurant 1',
    date_of_search: '2023-01-01',
  },
  {
    scrapped_restaurant: 'Sample Restaurant 2',
    date_of_search: '2023-01-02',
  },
  // Add more search results as needed
];

function Restaurant() {
  return (
    <div style={resultPageStyle}>
      <h2>Search Results</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Scrapped Restaurant</th>
            <th style={thStyle}>Date of Search</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((result, index) => (
            <tr key={index}>
              <td style={tdStyle}>{result.scrapped_restaurant}</td>
              <td style={tdStyle}>{result.date_of_search}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Restaurant;
