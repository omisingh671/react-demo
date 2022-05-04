import React, { useState, useCallback } from 'react';

import Title from './components/title';
import Count from './components/count';
import CountBtn from './components/countBtn';
import Age from './components/age';
import AgeBtn from './components/ageBtn';

const App = () => {
  const [count, setCount] = useState(10);
  const [age, setAge] = useState(16);

  const incrementCount = useCallback(() => {
    setCount(preCount => preCount + 1);
  }, []);

  const incrementAge = useCallback(() => {
    setAge(preAge => preAge + 1);
  }, []);

  return (
    <>
      <Title />
      <Count count={count} />
      <CountBtn handleCount={incrementCount} />

      <Age age={age} />
      <AgeBtn handleAge={incrementAge} />
    </>
  );
}

export default App;
