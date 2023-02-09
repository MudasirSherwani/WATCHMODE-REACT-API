import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { CallMoviesApi } from '../../redux/fetch-movies-titles';
import MoviesTitleItems from './MoviesTitleItems';
import './homepage.css';

const MoviesTitle = () => {
  const dispatchMoviesState = useDispatch();
  const [selectedYear, setSelectedYear] = useState(2022);
  const moviesStat = useSelector((state) => state.moviesTitle);
  useEffect(() => {
    dispatchMoviesState(CallMoviesApi());
  },
  [dispatchMoviesState]);

  const handleYearSelection = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredData = moviesStat.filter((item) => item.year === Number(selectedYear));
  const distinctYears = [...new Set(moviesStat.map((x) => x.year))];
  return (
    <div>
      <div className="list-container">
        <select onChange={handleYearSelection}>
          <option value={2022}>-- Select Movie Year --</option>
          {distinctYears.map((item) => (
            <option key={uuidv4()} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="context">
        <div className="container">
          {filteredData.map((titles) => (
            <div aria-hidden="true" key={titles.id} className="hidden-div">
              <MoviesTitleItems title={titles.title} id={titles.id} year={titles.year} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MoviesTitle;
