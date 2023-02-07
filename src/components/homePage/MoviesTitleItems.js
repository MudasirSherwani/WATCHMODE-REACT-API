import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { RiMovieFill } from 'react-icons/ri';
import { fetchDetailData } from '../../redux/fetch-movies-details';

const MoviesTitleItems = (props) => {
  const { id, title } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showDetails = () => {
    dispatch(fetchDetailData(id));
    navigate('/MoviesDetails');
  };

  return (
    <div className="container" data-testid="homepageitem">
      <div className="item">
        <RiMovieFill id={id} size={100} onClick={showDetails} className="movie-icon" alt="movies icon" />
        <h3 className="title">{title}</h3>
      </div>
    </div>
  );
};

MoviesTitleItems.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default MoviesTitleItems;
