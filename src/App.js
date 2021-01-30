import dotenv from 'dotenv';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import { HomePage, SongsPage, FavoritesPage, DetailsPage } from './pages';
import Navbar from './components/Navbar';
import './App.css';
import { NotFound } from './pages/NotFound';
if (process.env.NODE_ENV == 'development') {
  dotenv.config();
}

export const MyRouter = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/:categoryId/songs' component={SongsPage} />
    <Route path='/favorites' component={FavoritesPage} />
    <Route path='/details/:trackId' component={DetailsPage} />
    <Route path='*' component={NotFound} />
  </Switch>
);

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <Navbar />
          <MyRouter></MyRouter>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
