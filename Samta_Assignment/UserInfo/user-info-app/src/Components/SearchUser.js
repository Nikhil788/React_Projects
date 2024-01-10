import React, { useState, useEffect } from 'react';

const SearchUser = ({ onSearch, onSort, onHistoryClick, searchHistory }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
    }
  };

  useEffect(() => {
    setSearchTerm('');
  }, [searchHistory]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter user name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={onSort}>Sort by Name</button>
      <div>
        <p>Search History:</p>
        <ul>
          {searchHistory.map((term, index) => (
            <li key={index} onClick={() => onHistoryClick(term)}>
              {term}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchUser;

