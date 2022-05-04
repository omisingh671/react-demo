import React from 'react';

const AgeBtn = ({ handleAge }) => {

    console.log("5- AgeBtn");

    return (
        <>
            <button onClick={handleAge}>
                Increment the Age
            </button>
        </>
    )
}

export default React.memo(AgeBtn);