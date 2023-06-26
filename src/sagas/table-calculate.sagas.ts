import { put, takeEvery } from "redux-saga/effects";

export function* watchCalculate() {
  yield takeEvery("CALCULATE", foo);
}

function* foo(e: any) {
  switch (e.type) {
    case "CALCULATE":
      yield put({
        type: "CALCULATE_COMPLETED",
        payload: e.payload,
      });
      break;
    default:
      break;
  }
}
