import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { tokenization } from '../store/actions/tokenization';
import { fetchCategories } from '../store/actions/categoryAction';

export default (props) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer.categories);

  useEffect(() => {
    (async () => {
      await dispatch(tokenization());
      await dispatch(fetchCategories());
    })();
  }, []);

  return (
    <>
      <main className="mt-3 pt-5">
        <div className="container">
          <div className="row" style={{ minHeight: '90vh' }}>
            <div className="col-6 my-auto">
              <div className="row">
                <div className="col">
                  <h2 className="text-center mb-5">
                    Get album recommendations by category
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col text-center">
                  {categories.map((category, idx) => {
                    return (
                      <span
                        className="btn btn-outline-dark rounded-lg m-2"
                        style={{ cursor: 'pointer' }}
                        key={idx}
                      >
                        <Link to={`/${category}/songs`}>{category}</Link>
                      </span>
                    );
                  })}
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

//  HomePage;
