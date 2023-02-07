import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import movieDetailsReducer from './fetch-movies-details';
import reducerForMovies from './fetch-movies-titles';

const root = combineReducers({
  moviesTitle: reducerForMovies,
  movieDetails: movieDetailsReducer,
});
const store = configureStore({
  reducer: root,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
