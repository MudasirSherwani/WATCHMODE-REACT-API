import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './detailpage.css';

const MoviesDetailItems = (props) => {
  const {
    title,
    plotoverview,
    runtimeminutes,
    type,
    userrating,
    poster,
    trailer,
    releasedate,
    imdbid,
    usrating,
    year,
    originallanguage,
  } = props;

  return (
    <div className="table-container" data-testid="detailpagecontainer">
      <div className="detail-items">
        <div className="header-data">
          <img className="poster" src={poster} alt="Movie Poster" />
          <div className="title-trailer">
            <h2 className="title">{title}</h2>
            <Link to={trailer}>
              <button type="button" className="trailer"> Watch Movie! </button>
            </Link>
          </div>
        </div>
        <table className="table">
          <tbody>
            <tr>
              <th scope="col">Content Type</th>
              <td>{type}</td>
            </tr>
            <tr>
              <th scope="col">User Rating</th>
              <td>{userrating}</td>
            </tr>
            <tr>
              <th scope="col">Release Date</th>
              <td>{releasedate}</td>
            </tr>
            <tr>
              <th scope="col">Run Time</th>
              <td>
                {runtimeminutes}
                .0 min
              </td>
            </tr>
            <tr>
              <th scope="col">Imb ID</th>
              <td>{imdbid}</td>
            </tr>
            <tr>
              <th scope="col">Original Language</th>
              <td>{originallanguage}</td>
            </tr>
            <tr>
              <th scope="col">US Rating</th>
              <td>{usrating}</td>
            </tr>
            <tr>
              <th scope="col">Year</th>
              <td>{year}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="desc">Descriptions</h3>
        <h4>{plotoverview}</h4>
      </div>
    </div>
  );
};

MoviesDetailItems.defaultProps = {
  title: 'Movie Name',
};
MoviesDetailItems.propTypes = {
  title: PropTypes.string,
};

export default MoviesDetailItems;
