import { createStore } from 'redux';
import allReducers from '../reducers/all.js';

export default createStore(allReducers);
