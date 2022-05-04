import React, { useEffect } from 'react';

const Post = ({ item }) => {

    useEffect(() => {
        console.log("New Post Created");

        return () => {
            console.log('Component Exit');
        }
    }, []);

    return (
        <div>
            <div>Name: {item.name}</div>
            <div>Body: {item.body}</div><hr />
        </div>
    )
}

export default Post;