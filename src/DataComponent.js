// src/DataComponent.js
import React, { useEffect, useState } from 'react';

const DataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data.slice(0, 5))); // Limit to 5 items
  }, []);

  return (
    <div>
      <h2>Dynamic Data</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataComponent;
