import React from 'react';
import PropTypes from 'prop-types';
import { RiMovieFill } from 'react-icons/ri';

const MoviesTitleItems = (props) => {
  const { title } = props;
  return (
    <div className="container" data-testid="homepageitem">
      <div className="item">
        <RiMovieFill className="movie-icon" alt="movies icon" />
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
};

MoviesTitleItems.propTypes = {
  title: PropTypes.string.isRequired,
};
export default MoviesTitleItems;
