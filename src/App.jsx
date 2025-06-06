import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './pages/Main';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/default' element={<Main />} />
        </Routes>
    </Router>
  );
}

export default App;
