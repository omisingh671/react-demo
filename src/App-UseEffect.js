import React, { useState, useEffect } from 'react';
import Post from './post';

const App = ({ initialCount }) => {

  const [state, setState] = useState({
    count: initialCount,
    user: 'Amar'
  });
  //console.log(state);

  let [posts, setPosts] = useState([
    {
      name: 'Super awesome post 1',
      body: 'The content of the post 1'
    },
    {
      name: 'Super awesome post 2',
      body: 'The content of the post 2'
    }
  ]);

  const addOne = () => {
    setState({
      ...state,
      count: state.count + 1
    });
  }

  const restOne = () => {
    setState({
      ...state,
      count: state.count - 1
    });
  }

  const resetCount = () => {
    setState({
      ...state,
      count: initialCount
    });
  }

  const addMorePost = () => {
    let newpost = {
      name: 'PHP is still Awesome',
      body: 'Something about PHP'
    }

    setPosts([
      ...posts,
      newpost
    ]);
  }

  const removePosts = () => {
    setPosts([]);
  }

  useEffect(() => {
    //console.log("useEffect");
  }, [state, posts]);

  return (
    <>
      <h1>User: {state.user}</h1>
      <h3>Count: {state.count}</h3>

      <button onClick={addOne}>
        Add One +1
      </button>
      <button onClick={restOne}>
        Rest One -1
      </button>
      <button onClick={resetCount}>
        Reset
      </button>

      <button onClick={removePosts}>
        Remove Posts
      </button>

      <hr />

      {posts.map((item, i) => (
        <Post item={item} key={i} />
      ))}

      <button onClick={addMorePost}>Add One More Post</button>
    </>
  );
}

export default App;
