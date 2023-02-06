import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const Navigation = useNavigate();
  return (
    <div className="navigation">
      <div onClick={() => Navigation('/')} aria-hidden="true">
        <img className="icon-btn" src="" alt="Back Button" />
      </div>
      <h2 className="app-heading">Watch Movies</h2>
      <div className="feature-icons">
        <img className="icon-btn" src="" alt="Microphone Icon" />
        <img className="icon-btn" src="" alt="Setting Icon" />
      </div>
    </div>
  );
};

export default Navigation;
