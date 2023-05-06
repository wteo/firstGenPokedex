import React from 'react';
import styles from './ErrorMessage.module.css';

const ErrorMessage = (props) => {
  if (!props.show) {
    return null;
  }

const closeErrorHandler = (event) => {
  if (event.target.classList.contains(styles.errorOverlay)) {
    props.onClose();
  }
}

  return (
    <div className={styles.errorOverlay} onClick={closeErrorHandler}>
      <div className={styles.error}>
        <p>{props.message}</p>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
};

export default ErrorMessage;
