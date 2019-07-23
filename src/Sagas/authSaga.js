
import { reduxSagaFirebase } from '../Firebase/firebaseconfig';
import { put, call, delay } from "redux-saga/effects";
import cookie from 'react-cookies';

export function* watchUserAuth() {
    let userData = (cookie.load('userAuth')) ? cookie.load('userAuth').user : null;
    yield put ({ type: 'LOAD_USER_AUTH', userAuth: userData });
}

export function* loginMethod (credentials) {
    try {
        const result = yield call(
          reduxSagaFirebase.auth.signInWithEmailAndPassword,
          credentials.user.email,
          credentials.user.password
        )
        cookie.save('userAuth', result, {path: '/'});
        yield put({ type: 'LOGIN_SUCCESS', user: result });
      } catch (error) {
        const error_message = { code: error.code, message: error.message };
        yield put({ type: 'LOGIN_ERROR', error: error_message });
    }
}

export function* signOutMethod() {
  try {
    const data = yield call(reduxSagaFirebase.auth.signOut);
    cookie.remove('userAuth', { path: '/' })
    yield put({ type: 'SIGNOUT_SUCCESS', data: data });
  }
  catch(error) {
    yield put({ type: 'SIGNOUT_ERROR', data: error });
  }
}

export function* signupMethod (userdetails) {
    alert('test');
    try {
        yield call(
          reduxSagaFirebase.auth.createUserWithEmailAndPassword,
          userdetails.user.email,
          userdetails.user.password,
        )
        yield call(reduxSagaFirebase.auth.updateProfile, {
          displayName: userdetails.user.fullname,
          phoneNumber: userdetails.user.phonenumber
        });
        yield put({ type: 'SIGNUP_SUCCESS_START' });
        yield delay(1500);
        yield put({ type: 'SIGNUP_SUCCESS_CLOSE' });
      } catch (error) {
        const error_message = { code: error.code, message: error.message };
        yield put({ type: 'SIGNUP_ERROR', error: error_message });
    }
}