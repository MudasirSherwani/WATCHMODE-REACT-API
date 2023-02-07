import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CallMoviesApi } from '../../redux/fetch-movies-titles';
import MoviesDetailItems from './MoviesDetailItems';

const MoviesTitle = () => {
  const dispatch = useDispatch();
  const moviesStat1 = useSelector((state) => state.movieDetails.data);
  const moviesStat = [moviesStat1];
  console.log('comp');
  console.log(moviesStat);
  useEffect(() => {
    dispatch(CallMoviesApi());
  },
  [dispatch]);
  return (
    <div className="context">
      <div className="container">
        {moviesStat.map((detail) => (
          <div key={detail.id}>
            <MoviesDetailItems
              title={detail.title}
              plotoverview={detail.plot_overview}
              runtimeminutes={detail.runtime_minutes}
              type={detail.type}
              userrating={detail.user_rating}
              poster={detail.poster}
              trailer={detail.trailer}
              releasedate={detail.release_date}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesTitle;
