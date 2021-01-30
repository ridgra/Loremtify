import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <header>
        <nav
          className='navbar navbar-light navbar-expand-md d-md-flex align-items-md-center shadow-sm vw-100 bg-white'
          style={{ minHeight: '8vh', position: 'fixed', zIndex: '1', top: '0' }}
        >
          <div className='container-fluid'>
            <div className='container'>
              <Link className='navbar-brand' to='/'>
                Loremtify
              </Link>

              <Link className='navbar-brand' to='/favorites'>
                Favorites
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
