const FETCH_DATA_REQUEST = 'redux/FETCH_DATA_REQUEST';
const FETCH_DATA_SUCCESS = 'redux/FETCH_DATA_SUCCESS';
const FETCH_DATA_FAILURE = 'redux/FETCH_DATA_FAILURE';

const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  data,
});

const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  error,
});

export const fetchDetailData = (id) => async (dispatch) => {
  dispatch(fetchDataRequest());
  try {
    const res = await fetch(`https://api.watchmode.com/v1/title/${id}/details/?apiKey=teNzOyLosMVfKpJcle1fpVDEB3Er7pEtuouvuUZq`);
    const data = await res.json();
    return dispatch(fetchDataSuccess(data));
  } catch (error) {
    return dispatch(fetchDataFailure(error));
  }
};
const initialState = {
  loading: false,
  data: {},
  error: null,
};

const movieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.data };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default movieDetailsReducer;
