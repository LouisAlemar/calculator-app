import React from 'react';

const NumberKey = (props) => {
    const {
        number,
        click
    } = props;

    return (
        <div className="NumberKey" onClick={click}>
            <h3>{number}</h3>
        </div>
    )
}

export default NumberKey;