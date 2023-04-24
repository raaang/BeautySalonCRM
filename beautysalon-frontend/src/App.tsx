import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Account from './pages/shop/account';

function App() {
  return (
    // <div className="App">
    //   <div> 테스트 커밋.</div>
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/account/*" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
