import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSongs } from '../store/actions/songAction';
import {
  Link,
  Route,
  useParams,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';
import Card from '../components/Card';

const SongsPage = (props) => {
  const favorites = useSelector((state) => state.favoriteReducer.favorites);

  console.log(favorites, 'page');
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songReducer.songs);

  const { categoryId } = useParams();
  console.log(categoryId, 'page');
  useEffect(() => {
    (async () => {
      await dispatch(fetchSongs(categoryId));
    })();
  }, []);

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
                    {categoryId}
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
                {songs.map((song) => {
                  return (
                    <Card
                      key={song.id}
                      image={song.album.images[0].url}
                      title={song.album.name}
                      artist={song.name}
                      albumId={song.id}
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

export default SongsPage;
