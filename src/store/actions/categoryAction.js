const options = ({ method, access_token }) => {
  return {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token,
    },
    redirect: 'follow',
  };
};

export function fetchCategories() {
  return async (dispatch, getState) => {
    const access_token = getState().tokenReducer.access_token;
    const result = await fetch(
      'https://api.spotify.com/v1/recommendations/available-genre-seeds',
      options({ access_token })
    );
    const { genres } = await result.json();
    await dispatch({
      type: 'SET_CATEGORIES',
      payload: genres.splice(0,20),
    });
  };
}
