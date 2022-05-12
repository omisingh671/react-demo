import React from 'react';
import { Outlet } from 'react-router-dom';

const Posts = (props) => {
    console.log(props);
    return (
        <div className="Posts">
            <p>Posts</p>
            <Outlet />
        </div>
    );
}

export default Posts;