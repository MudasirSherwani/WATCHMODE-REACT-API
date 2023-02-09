const GET_MOVIES = 'redux/GET_MOVIES';

const url = 'https://api.watchmode.com/v1/list-titles/?apiKey=teNzOyLosMVfKpJcle1fpVDEB3Er7pEtuouvuUZq&limit=100';
const initialState = [];
const reducerForMovies = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return action.titles;
    default:
      return state;
  }
};

export const fetchMoviesData = (titles) => ({
  type: GET_MOVIES,
  titles,
});

export const CallMoviesApi = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  const DataRecieved = data.titles.map((titles) => ({
    id: titles.id,
    title: titles.title,
    year: titles.year,
  }));
  dispatch(fetchMoviesData(DataRecieved));
};
export default reducerForMovies;
