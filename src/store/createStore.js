import thunk from 'redux-thunk';
import allReducers from '../reducers/all.js';
import { createStore, applyMiddleware } from 'redux';

export default createStore(allReducers, applyMiddleware(thunk));
