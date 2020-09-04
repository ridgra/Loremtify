const options = ({ method, access_token }) => {
  return {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token,
    },
    // body,
    redirect: 'follow',
  };
};

export function fetchSongs(params) {
  return async (dispatch, getState) => {
    const access_token = getState().tokenReducer.access_token;  
    console.log(params, 'actions');
    const result = await fetch(
      `https://api.spotify.com/v1/recommendations?seed_genres=${params}`,
      options({ access_token })
    );
    const { tracks } = await result.json();
    await dispatch({
      type: 'SET_SONGS',
      payload: tracks,
    });
  };
}
