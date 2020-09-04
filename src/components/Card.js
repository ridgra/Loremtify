import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFavorites } from '../store/actions/setFavorites';

const Card = ({ image, title, artist, albumId }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="col-4 my-2">
        <div className="card">
          <div className="card-body" style={{ padding: '0' }}>
            {/* style={{ paddingTop: '100%' }} */}
            <img
              className="img-thumbnail"
              src={image}
              style={{ width: '100%', paddingTop: '0%' }}
            ></img>
            <div className="row py-2 px-3">
              <div className="col-9">
                <h5 className="text-truncate text-break">{artist}</h5>
                <h6 className="text-muted mb-2 text-truncate text-break">
                  {title}
                </h6>
              </div>
              <div className="col-auto ml-auto">
                <i
                  data-toggle="tooltip"
                  title="Add to favorites"
                  onClick={() => {
                    const payload = { image, title, artist, albumId };
                    dispatch(setFavorites(payload));
                    // };
                  }}
                  className="far fa-heart"
                  style={{ fontSize: 'x-large', cursor: 'pointer' }}
                ></i>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
