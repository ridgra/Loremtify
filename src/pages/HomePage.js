import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Home = (props) => {
  return (
    <>
      <main className="mt-3 pt-5">
        <div className="container">
          <div className="row" style={{ minHeight: '90vh' }}>
            <div className="col-6 my-auto">
              <div className="row">
                <div className="col">
                  <h2 className="text-center mb-5">
                    Get song recommendations by category
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col text-center">
                  <span
                    className="btn btn-outline-dark rounded-lg m-2"
                    style={{ cursor: 'pointer' }}
                  >
                    Acoustic
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6 d-lg-flex justify-content-lg-center align-items-lg-center">
              <img
                src="assets/img/pale-playing-guitar.png"
                style={{ maxWidth: '100%' }}
                alt="image"
              ></img>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
