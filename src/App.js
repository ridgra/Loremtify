import dotenv from 'dotenv';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import { HomePage, SongsPage, FavoritesPage, DetailsPage } from './pages';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';
if (process.env.NODE_ENV == 'development') {
  dotenv.config();
}

export const MyRouter = () => (
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>

    <Route path="/:categoryId/songs" component={SongsPage} />
    <Route path="/favorites" component={FavoritesPage} />
    <Route path="/details/:trackId" component={DetailsPage} />
  </Switch>
);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <MyRouter></MyRouter>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
