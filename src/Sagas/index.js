import { takeEvery, all } from "redux-saga/effects";
import  { watchUserAuth, loginMethod, signupMethod, signOutMethod, sendPasswordResetEmail, loginSocialMethod }  from './authSaga';

function* watchAll() {
    yield all([
      takeEvery("WATCH_USER_AUTH", watchUserAuth),
      takeEvery("LOGIN_START", loginMethod),
      takeEvery("SIGNUP_START", signupMethod),
      takeEvery("SIGNOUT_START", signOutMethod),
      takeEvery("SEND_PASSWORD_RESET_EMAIL_START", sendPasswordResetEmail),
      takeEvery("LOGIN_SOCIAL_START", loginSocialMethod)
    ]);
}
  
export default watchAll;