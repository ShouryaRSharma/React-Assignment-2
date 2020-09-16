import React from 'react';

const Input = (props) => {
    return(
        <div>
            <input type="text" className="form-control" value={props.input} onChange={props.change} placeholder="Insert text here"></input>
        </div>
    )
}

export default Input;