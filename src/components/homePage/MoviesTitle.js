import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CallMoviesApi } from '../../redux/fetch-movies-titles';
import MoviesTitleItems from './MoviesTitleItems';

const MoviesTitle = () => {
  const dispatchMoviesState = useDispatch();

  const moviesStat = useSelector((state) => state.moviesTitle);
  console.log('comp');
  console.log(moviesStat);
  useEffect(() => {
    dispatchMoviesState(CallMoviesApi());
  },
  [dispatchMoviesState]);

  return (
    <div className="context">
      <div className="container">
        {moviesStat.map((titles) => (
          <div key={titles.id}>
            <MoviesTitleItems title={titles.title} id={titles.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesTitle;
