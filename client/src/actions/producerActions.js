import { fetchProducers as fetchProducersApi, addProducer as addProducerApi } from '../api';

export const fetchProducers = () => async dispatch => {
  const response = await fetchProducersApi();
  dispatch({ type: 'FETCH_PRODUCERS', payload: response.data });
};

export const addProducer = producer => async dispatch => {
  const response = await addProducerApi(producer);
  dispatch({ type: 'ADD_PRODUCER', payload: response.data });
};
