import React from 'react';

const Navbar = ({}) => {
  return (
    <>
      <header>
        <nav
          className="navbar navbar-light navbar-expand-md d-md-flex align-items-md-center shadow-sm vw-100 bg-white"
          style={{ minHeight: '8vh', position: 'fixed', zIndex: '1', top: '0' }}
        >
          <div className="container-fluid">
            <div className="container">
              <a className="navbar-brand" href="#">
                Loremtify
              </a>
              <div className="col d-lg-flex justify-content-lg-center align-items-lg-center">
                <div className="input-group" style={{ maxWidth: '50vh' }}>
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-transparent text-dark">
                      Search
                    </span>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Input title..."
                  ></input>
                </div>
              </div>
              <a className="navbar-brand" href="">
                Favorites
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
