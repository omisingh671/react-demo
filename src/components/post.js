import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {

    let params = useParams();
    console.log(params);

    return (
        <div className="Post">
            <h2>Post: {params.postId}</h2>
        </div>
    );
}

export default Post;