import { useState, useEffect } from 'react';

function useFetcher(url) {
  const [images, setImages] = useState([]);
  const options = {
    method: 'GET',
  };

  useEffect(() => {
    fetch('https://picsum.photos/500', options)
      // .then((response) => response.json())
      .then((res) => {
        // console.log(res);
        setImages((images) => [...images, res.url]);
      });
  }, []); 
  return images;
}

export default useFetcher;
