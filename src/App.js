import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './components/home';
import Posts from './components/posts';
import Post from './components/post';
import Profile from './components/profile';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to='/home'>Home</Link>&nbsp;&nbsp;
        <Link to='/profile'>Profile</Link>&nbsp;&nbsp;
        <Link to='/posts'>Posts</Link>&nbsp;&nbsp;
        <Link to='/posts/1'>Post 1</Link>&nbsp;&nbsp;
        <Link to='/posts/2'>Post 2</Link>&nbsp;&nbsp;
        <Link to='/posts/3'>Post 3</Link>
      </header>

      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/home' element={<Home />} exact />

        <Route path='/posts' element={<Posts />} exact>
          <Route path=":postId" element={<Post />} />
        </Route>

        <Route path='/profile' element={<Profile />} exact />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;