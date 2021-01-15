import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import  reducer from './Reducer/index';

import App from './Components/App';

ReactDOM.render(
                <Provider store={createStore(reducer)}>
                    <App/>
                </Provider>,document.querySelector("#root"));