import React, { useState, useEffect } from 'react';
import Card from './Card';

import useFetcherImg from '../hooks/useFetcherImg';
import useFetcher from '../hooks/useFetcher';
import getToken from '../hooks/APIController';
import Categories from './Categories';

const Main = () => {
  const [images, setImages] = useState([]);
  const { categories } = useFetcher();

  // console.log(categories, '<main');

  return (
    <div>
      {/* <Navbar fetchImg={() => fetchImg()} /> */}
      
      <Categories categories={categories}/>
      <main className="mt-3">
        <div className="container">
          <div className="row">
            {images.map((image, idx) => {
              return <Card key={idx} image={image} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
