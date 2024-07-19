import axios from 'axios';

export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/movies');
    dispatch({
      type: 'FETCH_MOVIES_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_MOVIES_FAILURE',
      error: error.message,
    });
  }
};
