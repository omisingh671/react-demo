import React, { Component } from 'react';
const Header = (props) => {
    return (
        <header>
            <h1>Logo</h1>
            <input onChange={props.keywords} placeholder="Enter keywords..." />
        </header>
    )
}

export default Header;