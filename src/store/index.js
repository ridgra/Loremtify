import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
  songReducer,
  tokenReducer,
  categoryReducer,
  favoriteReducer,
} from './reducers';

const reducers = combineReducers({
  songReducer,
  tokenReducer,
  categoryReducer,
  favoriteReducer,
  // favoriteReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
