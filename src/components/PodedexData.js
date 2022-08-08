import React from 'react';

import styles from './PokedexData.module.css';
import Card from '../UI/Card';

function PokedexData(props) {

  const hasOnlyOneType = <p className={styles.type}>Type(s): {props.type1}</p>;
  const hasTwoTypes = <p className={styles.type}>Type(s): {props.type1} / {props.type2}</p>;

  return (
    <Card>
      {props.type2 === undefined ? hasOnlyOneType : hasTwoTypes }
      <p>Height: {`${(props.height / 10).toFixed(1)}`} M</p>
      <p>Weight: {`${(props.weight / 10).toFixed(1)}`} Kg</p>
    </Card>
  );
}

export default PokedexData;