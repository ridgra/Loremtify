const initialState = {
  favorites: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FAVORITES':
      return { ...state, favorites: state.favorites.concat(action.payload) };
    default:
      return state;
  }
};

export default favoriteReducer;
