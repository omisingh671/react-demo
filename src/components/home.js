import React from 'react';
import { useParams } from 'react-router-dom';

const Home = (props) => {

    let params = useParams();
    console.log(params);
    console.log(props);
    return (
        <div className="Home">
            <p>Home</p>
        </div>
    );
}

export default Home;