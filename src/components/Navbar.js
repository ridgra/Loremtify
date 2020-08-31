import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-light navbar-expand-md shadow-sm">
          <div className="container-fluid">
            <div className="container">
              <a className="navbar-brand" href="#">
                Loremgram
              </a>
              <button
                data-toggle="collapse"
                data-target="#navcol-1"
                className="navbar-toggler"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navcol-1"></div>
              <button
                onClick={() => this.props.fetchImg()}
                className="btn btn-dark"
                type="button"
              >
                Add image
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
