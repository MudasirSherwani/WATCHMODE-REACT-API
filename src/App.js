import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navbar/navigation';
import MoviesTitle from './components/homePage/MoviesTitle';
import MoviesDetails from './components/Details/MoviesDetails';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<MoviesTitle />} />
        <Route path="/MoviesDetails/" element={<MoviesDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
