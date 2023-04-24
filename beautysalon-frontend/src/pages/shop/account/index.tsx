import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Signup from './Signup';
import Login from './Login';

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Index;
