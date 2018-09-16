import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("FETCH_LOCATION", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchDog() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(data) {
  try {
    //const response = yield call(fetchDog);
    const place = data.place;

    // dispatch a success action to the store with the new dog
    yield put({ type: "STORE_SUCCESS", place });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
