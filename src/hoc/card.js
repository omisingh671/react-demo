import React from "react";

const style = {
    backgroundColor: 'lightgrey',
    padding: '10px',
    textAlign: 'center'
}

const Card = (props) => {
    return (
        <div style={style} className="card">
            {props.children}
        </div>
    )
}

export default Card;