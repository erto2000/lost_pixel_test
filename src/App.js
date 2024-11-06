// src/App.js
import React from 'react';
import './App.css';
import SearchList from './SearchList';
import DataComponent from './DataComponent';

function App() {
  return (
    <div className="App">
      <h1>Lost Pixel Demonstration</h1>
      <div className="container">
        <SearchList />
        <DataComponent />
      </div>
    </div>
  );
}

export default App;
 