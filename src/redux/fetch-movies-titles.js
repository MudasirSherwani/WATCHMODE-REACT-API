import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_MOVIES = 'redux/moviesTitle/GET_MOVIES';

const url = 'https://api.watchmode.com/v1/list-titles/?apiKey=9rpd8NLIeENAxsQeMCxt33h68sxWClnJykcn4n1X&limit=50';

const initialState = { moviesTitle: [] };
const reducerForMovies = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesTitle: action.titles,
      };
    default:
      return state;
  }
};

export const getMoviesTitle = createAsyncThunk(
  GET_MOVIES,
  async (args, { dispatch }) => {
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: GET_MOVIES, titles: data });
  },
);

export default reducerForMovies;
