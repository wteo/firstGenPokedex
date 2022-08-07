import React from 'react';
import { useSelector } from 'react-redux';

// import styles from './PokedexData.module.css';
import Card from '../UI/Card';

function PokedexData() {

    const type1 = useSelector(state => state.type1);
    const type2 = useSelector(state => state.type2);
    const height = useSelector(state => state.height);
    const weight = useSelector(state => state.weight);

    return (
        <Card>
          <p>Type(s): {type1} / {type2} </p>
          <p>Height: {height}</p>
          <p>Weight: {weight} </p>
        </Card>
    );
}

export default PokedexData;