import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Fade from './components/CSStransition';
import Tgroup from './components/tgroup';
import TransitionComp from './components/Transition';
import './css/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/transition" element={<TransitionComp />} />
          <Route path="/csstransition" element={<Fade />} />
          <Route path="/tgroup" element={<Tgroup />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
