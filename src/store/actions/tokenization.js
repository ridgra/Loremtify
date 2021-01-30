export function tokenization() {
  return async (dispatch, getState) => {
    try {
      const clientId = process.env.REACT_APP_CLIENTIDSPOTIFY;
      const clientSecret = process.env.REACT_APP_CLIENTSECRETSPOTIFY;
      const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
        },
        body: 'grant_type=client_credentials',
      });

      const data = await result.json();
      await dispatch({
        type: 'SET_TOKEN',
        payload: {
          access_token: data.access_token,
        },
      });
    } catch (err) {
    }
  };
  // return data.access_token;
}