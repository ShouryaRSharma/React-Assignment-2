import React from 'react';

const Input = (props) => {
    return(
        <div>
            <input type="text" className="form-control" value={props.input} onChange={props.change}></input>
        </div>
    )
}

export default Input;