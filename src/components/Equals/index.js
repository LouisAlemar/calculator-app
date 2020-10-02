import React from 'react';

const Equals = (props) => {
    const {
        click
    } = props;

    return(
        <div className="Equals" onClick={click}>
            <h2>=</h2>
        </div>
    )
}

export default Equals;