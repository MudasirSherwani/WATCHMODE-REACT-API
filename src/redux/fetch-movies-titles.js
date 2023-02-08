const GET_MOVIES = 'redux/GET_MOVIES';

const url = 'https://api.watchmode.com/v1/list-titles/?apiKey=9rpd8NLIeENAxsQeMCxt33h68sxWClnJykcn4n1X&limit=50';
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
  console.log('api');
  console.log(data.titles);
  const DataRecieved = data.titles.map((titles) => ({
    id: titles.id,
    title: titles.title,
  }));
  dispatch(fetchMoviesData(DataRecieved));
};
export default reducerForMovies;
