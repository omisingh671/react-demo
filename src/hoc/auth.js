import React from "react";

const Auth = (props) => {
    const pass = '1234';

    if (pass !== '1234') {
        return <h3>You are not Authorized!</h3>
    }
    else {
        return props.children
    }
}

export default Auth;