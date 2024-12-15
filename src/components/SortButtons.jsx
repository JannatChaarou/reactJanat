import React from 'react';

function SortButtons  ({ onSort }) {
  return (
    <div  className=' sortDiv'>
      <button className='sortBtn' onClick={() => onSort('rating')}>Trier par note</button>
      <button className='sortBtn' onClick={() => onSort('releaseYear')}>Trier par année</button>
    </div>
  );
};

export default SortButtons;
