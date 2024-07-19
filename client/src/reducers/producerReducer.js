const producerReducer = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_PRODUCERS':
        return action.payload;
      case 'ADD_PRODUCER':
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default producerReducer;
  