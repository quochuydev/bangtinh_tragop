import { call, put, takeEvery } from 'redux-saga/effects';

export function* watchCalculate() {
  yield takeEvery(
    'CALCULATE',
    foo
  );
}

function* foo(e: any) {
  switch (e.type) {
    case 'CALCULATE':
      console.log(e.payload)
      yield put({
        type: 'CALCULATE_COMPLETED',
        payload: e.payload,
      });
      break;
    default:
      break;
  }
}