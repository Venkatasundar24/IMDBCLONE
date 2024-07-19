import { fetchActors as fetchActorsApi, addActor as addActorApi } from '../api';

export const fetchActors = () => async dispatch => {
  const response = await fetchActorsApi();
  dispatch({ type: 'FETCH_ACTORS', payload: response.data });
};

export const addActor = actor => async dispatch => {
  const response = await addActorApi(actor);
  dispatch({ type: 'ADD_ACTOR', payload: response.data });
};
