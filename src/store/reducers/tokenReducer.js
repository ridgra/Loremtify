const initialState = {
  access_token: null,
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, access_token: action.payload.access_token };
    default:
      return state;
  }
};

export default tokenReducer;
