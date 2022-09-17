import './App.css';
import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Schools from './pages/Schools';
import Dti from './pages/Dti';
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Schools />} />
          <Route path="/dti" element={<Dti />} />


        </Routes>
      </BrowserRouter>

    </Fragment>
  );
}

export default App;
