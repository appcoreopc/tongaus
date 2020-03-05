import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {HOMEPAGELOAD} from "./actions";

function* mySaga() {
    yield takeLatest(HOMEPAGELOAD, fetchUser);
  }

function* fetchUser(action:any) {    
    console.log('fetch user data');

    try {
       //const user = yield call(Api.fetchUser, action.payload.userId);
       //yield put({type: "USER_FETCH_SUCCEEDED", user: user});

       const employee = yield fetch('http://dummy.restapiexample.com/api/v1/employees').then
       (x => x.json());

       console.log(employee.data);

       yield put({type: "USER_FETCH_SUCCEEDED", employee: employee.data});

    } catch (e) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }


 export default mySaga;

