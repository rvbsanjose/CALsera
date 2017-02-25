import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store/createStore';
import Calsera from './components/calsera/calsera.jsx';

ReactDOM.render(
    <Provider store={createStore}>
        <Calsera />
    </Provider>,
    document.querySelector('#calsera-app')
);
