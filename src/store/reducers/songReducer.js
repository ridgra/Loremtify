const initialState = {
  songs: [],
  song: null,
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SONGS':
      return { ...state, songs: action.payload };
    default:
      return state;
  }
};

export default songReducer;


