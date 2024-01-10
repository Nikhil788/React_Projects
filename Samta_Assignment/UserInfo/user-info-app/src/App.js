import React, { useState, useEffect } from 'react';
import SearchUser from './Components/SearchUser';
import UserList from './Components/UserList';

import './App.css';
import Header from './Components/Header';

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    // Fetch users from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setFilteredUsers(data);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredUsers(filtered);

    
    setSearchHistory(prevHistory => {
      const updatedHistory = [...prevHistory, searchTerm];
      
      localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
      return updatedHistory;
    });
  };

  const handleSort = () => {
    const sortedUsers = [...filteredUsers].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredUsers(sortedUsers);
  };

  const handleHistoryClick = (term) => {
    setSearchHistory(prevHistory => [...prevHistory, term]);
    handleSearch(term);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <SearchUser onSearch={handleSearch} onSort={handleSort} onHistoryClick={handleHistoryClick} searchHistory={searchHistory} />
        <UserList users={filteredUsers} />
      </header>
    </div>
  );
}

export default App;

