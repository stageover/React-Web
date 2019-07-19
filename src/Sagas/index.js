import { takeEvery, all } from "redux-saga/effects";
import  { loginMethod }  from './authSaga';

function* watchAll() {
    yield all([
      takeEvery("LOGIN", loginMethod)
    ]);
  }
  
export default watchAll;