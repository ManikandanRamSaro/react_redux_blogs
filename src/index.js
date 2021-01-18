import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import  reducer from './Reducer/index';

import App from './Components/App';

const stores = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
                <Provider store={stores}>
                    <App/>
                </Provider>,document.querySelector("#root"));