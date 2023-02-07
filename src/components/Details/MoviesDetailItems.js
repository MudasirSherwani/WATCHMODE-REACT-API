import React from 'react';
import PropTypes from 'prop-types';

const MoviesTitleItems = (props) => {
  const {
    title,
    plotoverview,
    runtimeminutes,
    type,
    userrating,
    poster,
    trailer,
    releasedate,
  } = props;
  return (
    <div className="container" data-testid="homepageitem">
      <div className="item">
        <h3 className="title">{title}</h3>
        <h3 className="title">{plotoverview}</h3>
        <h3 className="title">{runtimeminutes}</h3>
        <h3 className="title">{type}</h3>
        <h3 className="title">{userrating}</h3>
        <h3 className="title">{poster}</h3>
        <h3 className="title">{trailer}</h3>
        <h3 className="title">{releasedate}</h3>
      </div>
    </div>
  );
};

MoviesTitleItems.propTypes = {
  title: PropTypes.string.isRequired,
};
export default MoviesTitleItems;
