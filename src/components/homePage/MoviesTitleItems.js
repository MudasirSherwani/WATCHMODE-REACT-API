import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { RiMovieFill } from 'react-icons/ri';
import { fetchDetailData } from '../../redux/fetch-movies-details';
import './homepage.css';

const MoviesTitleItems = (props) => {  
  const { id, title } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showDetails = () => {
    dispatch(fetchDetailData(id));
    navigate('/MoviesDetails');
  };

  return (
    <div className="container1" data-testid="home-page">
      <div className="item">
        <RiMovieFill id={id} size={50} onClick={showDetails} className="movie-icon" alt="movies icon" />
        <h3 className="title-home">{title}</h3>
      </div>
    </div>
  );
};

MoviesTitleItems.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
};

export default MoviesTitleItems;
