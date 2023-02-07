import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navigation.css';
import { FiSettings } from 'react-icons/fi';
import { FaMicrophone } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';

const Navigation = () => {
  const Navigation = useNavigate();
  return (
    <div className="navigation">
      <div onClick={() => Navigation('/')} aria-hidden="true">
        <IoIosArrowBack className="icon-btn" alt="Back Button" />
      </div>

      <h2 className="app-heading">Watch Movies</h2>
      <div className="feature-icons" />
      <FaMicrophone className="icon-btn" alt="Microphon Icon" />
      <FiSettings className="icon-btn" alt="Setting Icon" />
    </div>
  );
};

export default Navigation;
