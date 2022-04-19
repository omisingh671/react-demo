import React, { useState } from 'react';

const App = ({ initialCount }) => {

  // let [count, setCount] = useState(initialCount);

  // console.log(count);

  // const addOne = () => {
  //   setCount(count + 1);
  // }

  // const restOne = () => {
  //   setCount(prevCount => {
  //     return prevCount - 1;
  //   });
  // }

  const [state, setState] = useState({
    count: initialCount,
    user: 'Amar'
  });
  console.log(state);

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
    </>
  );
}

export default App;
