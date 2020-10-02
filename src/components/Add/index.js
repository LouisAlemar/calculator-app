import React from 'react';

const Add = (props) => {
    const {
        click
    } = props;

    return(
        <div className="Add" onClick={click}>
            <h3>+</h3>
        </div>
    )
};

export default Add;