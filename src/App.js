import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/home';
import Header from './components/header';
import PureComp from './components/pureComp';
import Adjel from './components/adjel';
import Profile from './components/profile';
import User from './components/user';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/purecomp" element={<PureComp />} />
          <Route path="/adjel" element={<Adjel />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;