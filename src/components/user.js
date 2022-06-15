import React from 'react';
import UserHoc from '../hoc/userHoc';

const User = (props) => {

    console.log(props);

    return (
        <div className='card'>
            User
        </div>
    );
}

export default UserHoc(User, "Amar");