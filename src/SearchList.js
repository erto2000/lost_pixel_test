// src/SearchList.js
import React, { useState } from 'react';

const SearchList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  const filteredItems = items.filter(item => 
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
