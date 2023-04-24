import React from 'react';

import styles from './Pagination.module.css';

function Pagination({ resultsPerPage, totalResults, paginate }) {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  return ( 
    <nav>
      <ul className={styles.pagination}>
        { pageNumbers.map(number => (
            <li key={number}>
              <a onClick={() => paginate(number)} href="!#" >{number}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Pagination;