import React from 'react';

import styles from './Pagination.module.css';

function Pagination({ resultsPerPage, totalResults, paginate, currentPage }) {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number, event) => {
    event.preventDefault(); 
    paginate(number);
  };

  return ( 
    <nav>
      <ul className={styles.pagination}>
        { pageNumbers.map(number => (
            <a onClick={(event) => handleClick(number, event)} href="#!">
              <li key={number} className={`${styles.pageNumber} ${number === currentPage ? styles.activePage : ''}`} >{number}</li>
            </a>
          ))}
      </ul>
    </nav>
  );
}

export default Pagination;