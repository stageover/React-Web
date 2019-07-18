import authReducer from './authReducer';
import modalReducer from './modalReducer';

import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    authReducer: authReducer,
    modalReducer: modalReducer,
    firebase: firebaseReducer
});

export default rootReducer;

