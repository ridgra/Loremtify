export function setFavorites(payload) {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_FAVORITES',
      payload,
    });
    // console.log(payload);
  }
}