import './App.css';
import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Schools from './pages/Schools';
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Schools />} />


        </Routes>
      </BrowserRouter>

    </Fragment>
  );
}

export default App;
