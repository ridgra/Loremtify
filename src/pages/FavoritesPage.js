import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from '../components/Card';

const FavoritesPage = (props) => {

  const favorites = useSelector((state) => state.favoriteReducer.favorites);


  console.log(favorites, 'page');
  // useEffect(() => {
  //   (async () => {
  //     await dispatch(fetchSongs(categoryId));
  //   })();
  // }, []);

  return (
    <>
      <main className="mt-3 pt-5">
        <div className="container">
          <div className="row" style={{ minHeight: '90%' }}>
            <div
              className="col-3 d-block my-auto"
              style={{ position: 'fixed', left: '5vh', top: '30vh' }}
            >
              <div className="row">
                <div className="col">
                  <h1
                    className="d-lg-flex justify-content-lg-center my-5"
                    style={{ width: '100%' }}
                  >
                    FAVORITES
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col d-lg-flex justify-content-lg-center">
                  <img
                    src="../assets/img/lime-listening-to-music.png"
                    style={{ maxWidth: '100%' }}
                  ></img>
                </div>
              </div>
            </div>
            <div className="col-9 ml-auto my-auto py-3">
              <div className="row">
                {favorites.map((favorite) => {
                  return (
                    <Card
                      key={favorite.albumId}
                      image={favorite.image}
                      title={favorite.title}
                      artist={favorite.artist}
                      albumId={favorite.albumId}
                    ></Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FavoritesPage;
