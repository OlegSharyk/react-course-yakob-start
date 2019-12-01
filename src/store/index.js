import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';
import logger from '../middlewares/logger';
import randomId from '../middlewares/random';
import api from '../middlewares/api';
import { routerMiddleware } from 'react-router-redux';
import history from '../history';

const enhancer = applyMiddleware(thunk, randomId, routerMiddleware(history), api, logger);

const store = createStore(reducer, {}, enhancer);

// dev only
window.store = store;

export default store;
