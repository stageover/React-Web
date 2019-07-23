import { takeEvery, all } from "redux-saga/effects";
import  { watchUserAuth, loginMethod, signupMethod, signOutMethod }  from './authSaga';

function* watchAll() {
    yield all([
      takeEvery("WATCH_USER_AUTH", watchUserAuth),
      takeEvery("LOGIN_START", loginMethod),
      takeEvery("SIGNUP_START", signupMethod),
      takeEvery("SIGNOUT_START", signOutMethod)
    ]);
}
  
export default watchAll;