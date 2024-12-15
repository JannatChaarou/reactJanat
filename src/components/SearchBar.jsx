import React, { useState } from 'react';

function SearchBar  ({ onSearch }) {
  const [term, setTerm] = useState('');

  const Change = (e) => {
    setTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className='container'>
    <input className='bar'
      type="text"
      placeholder="Rechercher un film..."
      value={term}
      onChange={Change}
    /></div>
  );
};

export default SearchBar;
