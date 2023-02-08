import React from 'react';
import PropTypes from 'prop-types';
import './detailpage.css';

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
    imdbid,
    usrating,
    year,
    originallanguage,
  } = props;

  return (
    <div className="table-container" data-testid="detailpagecontainer">
      <div className="detail-items">
        <h2 className="title">{title}</h2>
        <img className="poster" src={poster} alt="Movie Poster" />
        <a href={trailer} className="trailer">Watch Movie</a>
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
        <h4 className="desc">{plotoverview}</h4>
      </div>
    </div>
  );
};

MoviesTitleItems.propTypes = {
  title: PropTypes.string.isRequired,
};
export default MoviesTitleItems;
