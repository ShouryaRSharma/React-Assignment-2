import React from 'react';
import './Char.scss';

const Char = (props) => {
    return (
        <div className="Char">
            <div className="alert alert-light" onClick={props.clicked}>{props.character}</div>
        </div> 
    );
}

export default Char;