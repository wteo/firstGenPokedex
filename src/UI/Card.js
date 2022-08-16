import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './Card.css';

function Card(props) {
    return (
        <CSSTransition 
            in={props.onTransition}
            timeout={200} 
            classNames='slide'
            mountOnEnter
            unmountOnExit
        >
            <div className='card'>
                {props.children}
            </div>
        </CSSTransition>
    );
}

export default Card;