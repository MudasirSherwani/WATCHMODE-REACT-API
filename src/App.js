import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from './components/navbar/navigation';

function App() {
  return (

    <Router>
      <Navigation />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </Router>

  );
}

export default App;
