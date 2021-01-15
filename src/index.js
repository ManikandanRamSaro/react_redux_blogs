import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux-redux';
import { createStore } from 'react';

import {reducer } from './Reducer';

import App from './Components/App';

ReactDOM.render(<Provider store={createStore(reducer)}>
                    <App/>
                </Provider>,document.querySelector('#root'));