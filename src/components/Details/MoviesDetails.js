import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { CallMoviesApi } from '../../redux/fetch-movies-titles';
import MoviesDetailItems from './MoviesDetailItems';
import './detailpage.css';

const MoviesDetails = () => {
  const dispatch = useDispatch();
  const moviesStat1 = useSelector((state) => state.movieDetails.data);
  const moviesStat = [moviesStat1];
  useEffect(() => {
    dispatch(CallMoviesApi());
  },
  [dispatch]);
  return (
    <div className="detail-parent">
      {moviesStat.map((detail) => (
        <div key={uuidv4()}>
          <MoviesDetailItems
            title={detail.title}
            plotoverview={detail.plot_overview}
            runtimeminutes={detail.runtime_minutes}
            type={detail.type}
            userrating={detail.user_rating}
            poster={detail.poster}
            trailer={detail.trailer}
            releasedate={detail.release_date}
            imdbid={detail.imdb_id}
            usrating={detail.us_rating}
            year={detail.year}
            originallanguage={detail.original_language}
          />
        </div>
      ))}
    </div>
  );
};

export default MoviesDetails;
