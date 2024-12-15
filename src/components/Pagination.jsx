
import React from 'react';

function Pagination ({ totalMovies, moviesPerPage, paginate })  {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='container'>
      {pageNumbers.map(number => (
        <button className='pg button' key={number}  onClick={() => paginate(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
