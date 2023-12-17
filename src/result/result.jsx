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

const users = [
    {
      username: 'john_doe',
      previous_search: 'Italian Cuisine',
    },
    {
      username: 'jane_smith',
      previous_search: 'Vegetarian Options',
    },
    // Add more users as needed
  ];
  
  function Result() {
    return (
      <div style={resultPageStyle}>
        <h2>Search Results</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Username</th>
              <th style={thStyle}>Previous Search</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td style={tdStyle}>{user.username}</td>
                <td style={tdStyle}>{user.previous_search}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

export default Result;
