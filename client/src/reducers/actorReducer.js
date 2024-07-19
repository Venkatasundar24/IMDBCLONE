const actorReducer = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_ACTORS':
        return action.payload;
      case 'ADD_ACTOR':
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default actorReducer;
  