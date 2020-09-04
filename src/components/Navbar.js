import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
  //   const options = [
  //     { value: 'chocolate', label: 'Chocolate' },
  //     { value: 'strawberry', label: 'Strawberry' },
  //     { value: 'vanilla', label: 'Vanilla' },
  //   ];
  const selectedOption = '';

  const handleChange = (selectedOption) => {
    //   this.setState({ selectedOption });

    selectedOption = selectedOption;
    console.log(`Option selected:`, selectedOption);
  };
  const access_token = useSelector((state) => state.tokenReducer.access_token);
//   const songs = useSelector((state) => state.songReducer.songs);
  const loadOptions = async (inputText, callback) => {
    const options = ({ access_token }) => {
      return {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + access_token,
        },
      };
    };

    const result = await fetch(
      `https://api.spotify.com/v1/search?q=${inputText}&type=track&market=ID&limit=5`,
      options({ access_token })
    );
    const { tracks } = await result.json();
        console.log(tracks);

    callback(
      tracks.map((i) => ({
        label: i,
        value: i,
        // avatar: i.avatar,
      }))
    );
  };

  return (
    <>
      <header>
        <nav
          className="navbar navbar-light navbar-expand-md d-md-flex align-items-md-center shadow-sm vw-100 bg-white"
          style={{ minHeight: '8vh', position: 'fixed', zIndex: '1', top: '0' }}
        >
          <div className="container-fluid">
            <div className="container">
              <Link className="navbar-brand" to="/">
                Loremtify
              </Link>
              <div className="col d-lg-flex justify-content-lg-center align-items-lg-center">
                <div className="input-group" style={{ maxWidth: '50vh' }}>
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-transparent text-dark">
                      Search
                    </span>
                  </div>
                  <AsyncSelect
                    className="form-control m-0 p-0 border-0"
                    styles={{ width: '100%' }}
                    placeholder="Input title..."
                    value={selectedOption}
                    onChange={(e) => handleChange(e)}
                    loadOptions={loadOptions}
                    // options={options}
                  ></AsyncSelect>
                  {/* <AsyncSelect ></AsyncSelect> */}
                </div>
              </div>
              <Link className="navbar-brand" to="/favorites">
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
