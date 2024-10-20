// src/App.js
import React from 'react';
import Auth from './components/Auth';
import Search from './components/Search';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Auth />
      <Search />
    </div>
  );
}

export default App;
