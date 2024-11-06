// src/SearchList.js
import React, { useState } from 'react';

const SearchList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const items = ['Appllllle', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  const filteredItems = items.filter(item => 
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setSearchTerm('Apple')}>Set Search to "Apple"</button>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
