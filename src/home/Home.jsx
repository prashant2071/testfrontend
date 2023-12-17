import React, { useState } from 'react';
import axios from 'axios';

const appStyle = {
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

const headerStyle = {
  backgroundColor: '#282c34',
  padding: '20px',
  color: 'white',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  marginRight: '10px',
  borderRadius: '5px',
  border: '1px solid #ddd',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: '#61dafb',
  color: 'white',
};

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    axios.get('http://localhost:8000/api/getresult',{'search':searchTerm})
    .then(res=>{
        console.log("the result is ",res)
    }).catch(err=>{
        console.log("the error occoured")
    })
    // Perform the actual search logic here
  };

  return (
    <div className="App" style={appStyle}>
      <header style={headerStyle}>
        <h1>React Search App</h1>
        <div>
          <input
            type="text"
            placeholder="Enter search term"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={inputStyle}
          />
          <button onClick={handleSearch} style={buttonStyle}>
            Search
          </button>
        </div>
      </header>
    </div>
  );
}

export default Home;
