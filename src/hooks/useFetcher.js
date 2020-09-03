import { useState, useEffect } from 'react';
// import getToken from './APIController';

function useFetcher() {
  const [categories, setCategories] = useState([]);
  // const [songs, setSongs] = useState({});
  // const [spotify_token, setSpotify_token] = useState('');

  const options = ({ method, token }) => {
    return {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      // body,
      redirect: 'follow',
    };
  };

  useEffect(() => {
    // if (!spotify_token)
    const token = (async () => {
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
      // setSpotify_token(await data.access_token);

      console.log(data.access_token);
      return data.access_token;
    })();
    // }

    (async () => {
      const result = await fetch(
        'https://api.spotify.com/v1/browse/categories?country=ID&limit=30',
        options({ token: await token })
      );
      const { categories } = await result.json();
      categories.items.forEach((el) => {
        setCategories((cat) => [...cat, el.name]);
      });
    })();
    
  }, []);
  return { categories };
}

export default useFetcher;
