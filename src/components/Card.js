import React from 'react';

const Card = ({ image }) => {
  return (
    <>
      <div className="col-3 p-1">
        <div className="card text-center">
          <img
            className="card-img-top w-100 d-block"
            src={image}
            width="100%"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
