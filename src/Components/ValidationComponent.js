import React from 'react';

const validation = (props) => {
    return(
        <div>
            <div className="row">
                <div className="col-md">
                    <div className="card mt-3">
                        <div className="card-body">
                            <h5 className="card-title">Number of Letters: {props.userInput}</h5>
                            {
                                props.userInput > 5 ?
                                <p className="card-text">Text is long enough.</p>
                                : <p className="card-text">Text too short.</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default validation;