import React from 'react';

const validation = (props) => {
    let textLengthTest = props.userInput

    if (textLengthTest <= 5) {
        textLengthTest = 'Text too short';
    } else if (textLengthTest >=5 ) {
        textLengthTest = 'Text is long enough';
    }

    return(
        <div>
            <div className="row">
                <div className="col-md">
                    <div className="card mt-3">
                        <div className="card-body">
                            <h5 className="card-title">Number of Letters: {props.userInput}</h5>
                            <p className="card-text">{textLengthTest}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default validation;