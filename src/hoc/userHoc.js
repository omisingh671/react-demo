import React from "react";

const UserHoc = (WrappeedComponent, Arg1) => {

    //console.log(Arg1);

    return (props) => (
        <>
            {Arg1}
            <WrappeedComponent {...props} />
        </>
    )
}

export default UserHoc;