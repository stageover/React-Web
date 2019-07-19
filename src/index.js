import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* Redux Saga */
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

/* Firebase */

import { reactReduxFirebase } from 'react-redux-firebase';
import firebaseconfig from './Firebase/firebaseconfig';

/* Reducer */
import rootReducer from './Reducers/store/rootReducer';

/* Sagas */
import watchAll from './Sagas/index';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    reactReduxFirebase(firebaseconfig)
    )
);

sagaMiddleware.run(watchAll);

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
document.getElementById('root'));


serviceWorker.unregister();