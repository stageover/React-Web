import firebase from 'firebase/app';
import 'firebase/auth';
import { put, call } from "redux-saga/effects";

export function* loginMethod (credentials) {

    try {
        const auth = firebase.auth()
        const result = yield call(
          [auth, auth.signInWithEmailAndPassword],
          credentials.user.email,
          credentials.user.password
        )
        yield put({ type: 'LOGIN_SUCCESS', user: result });
     
      } catch (error) {
        const error_message = { code: error.code, message: error.message };
        yield put({ type: 'LOGIN_ERROR', error: error_message });
    }

}

export function* signupMethod (userdetails) {
  yield put({type: 'SIGNUP_START'})
  try {
      const auth = firebase.auth()
      const result = yield call(
        [auth, auth.createUserWithEmailAndPassword],
        userdetails.user.username,
        userdetails.user.email,
        userdetails.user.password,
      )
      result.updateProfile({
        displayName: userdetails.user.username
      })
      yield put({ type: 'SIGNUP_SUCCESS', user: result });
   
    } catch (error) {
      const error_message = { code: error.code, message: error.message };
      yield put({ type: 'SIGNUP_ERROR', error: error_message });
  }
}

