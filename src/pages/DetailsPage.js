import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const DetailsPage = (props) => {
  return (
    <>
      <main class="mt-3 pt-5">
        <div class="container">
          <div class="row" style={{ minHeight: '90vh' }}>
            <div class="col-6 my-auto">
              <div class="row">
                <div class="col">
                  <h2 class="text-center">Taylor Swift</h2>
                  <h5 class="text-center">Enchanted</h5>
                  <div class="row">
                    <div class="col text-center">
                      <img
                        class="mt-5"
                        src="assets/img/lime-listening-to-music.png"
                        style={{ maxWidth: '70%' }}
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 d-lg-flex justify-content-lg-center align-items-lg-center">
              <img
                src="https://picsum.photos/500"
                style={{ maxWidth: '100%' }}
              ></img>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DetailsPage;
