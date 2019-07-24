
import { reduxSagaFirebase, googleProvider, facebookProvider } from '../Firebase/firebaseconfig';
import { put, call, delay } from "redux-saga/effects";
import cookie from 'react-cookies';


export function* watchUserAuth() {
    let userData = (cookie.load('userAuth')) ? cookie.load('userAuth') : null;
    yield put ({ type: 'LOAD_USER_AUTH', userAuth: userData });
}

export function* loginMethod (credentials) {
    try {
        const result = yield call(
          reduxSagaFirebase.auth.signInWithEmailAndPassword,
          credentials.user.email,
          credentials.user.password
        )
        
        if (credentials.user.remember) {
          cookie.save('userAuth', result);
        } else {
          const expires = new Date()
          expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14);
          const settings = {
              path: '/',
              expires
            }
          cookie.save('userAuth', result, settings);
        }
        yield put({ type: 'LOGIN_SUCCESS', userAuth: result });
        yield put({ type: 'MODAL_CLOSE' });
      } catch (error) {
        const error_message = { code: error.code, message: error.message };
        yield put({ type: 'LOGIN_ERROR', error: error_message });
    }
}


export function* sendPasswordResetEmail (userdetails) {
  const actionCodeSettings = {
    url : 'http://localhost:3000/'
  }
  try {
    yield call(reduxSagaFirebase.auth.sendPasswordResetEmail, userdetails.user.email, actionCodeSettings);
    yield put({ type: 'SEND_PASSWORD_RESET_EMAIL_SUCCESS' });

  }
  catch(error) {
    const error_message = { code: error.code, message: error.message };
    yield put({ type: 'SEND_PASSWORD_RESET_EMAIL_ERROR', error: error_message });
  }
}

export function* signupMethod (userdetails) {
    try {
        yield call(
          reduxSagaFirebase.auth.createUserWithEmailAndPassword,
          userdetails.user.email,
          userdetails.user.password,
        )
        yield call(reduxSagaFirebase.auth.updateProfile, {
          displayName: userdetails.user.fullname,
          phoneNumber: '+639559160218'
        });
        yield put({ type: 'SIGNUP_SUCCESS' });
        yield delay(2000);
        yield put({ type: 'MODAL_OPEN', mode: 'login', title: 'Login' });
      } catch (error) {
        const error_message = { code: error.code, message: error.message };
        yield put({ type: 'SIGNUP_ERROR', error: error_message });
    }
}

export function* signOutMethod () {
  try {
    yield call(reduxSagaFirebase.auth.signOut);
    cookie.remove('userAuth', { path: '/' })
    yield put({ type: 'SIGNOUT_SUCCESS' });
  }
  catch(error) {
    yield put({ type: 'SIGNOUT_ERROR' });
  }
}

/* Social Login */
export function* loginSocialMethod (loginType) {
  const authProvider = loginType.mode === 'facebook' ? facebookProvider : googleProvider;
  try {
    const result = yield call(reduxSagaFirebase.auth.signInWithPopup, authProvider);
    yield put({ type: 'LOGIN_SOCIAL_SUCCESS', authUser: result })
  }
  catch(error) {
    const error_message = { code: error.code, message: error.message };
    yield put({ type: 'LOGIN_SOCIAL_ERROR', error: error_message });
  }
}