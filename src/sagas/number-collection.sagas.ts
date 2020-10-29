import { call, put, takeEvery } from 'redux-saga/effects';
import { numberRequestCompletedAction } from '../actions';
import { generateNewNumber } from '../api';

export function* watchNewGeneratedNumberRequestStart() {
  yield takeEvery(
    'GET_NUMBER_REQUEST_START',
    requestNewGeneratedNumber
  );
}

function* requestNewGeneratedNumber(e: any) {
  console.log('requestNewGeneratedNumber', e)
  switch (e.type) {
    case 'GET_NUMBER_REQUEST_START':
      const generatedNumber = yield call(generateNewNumber);
      console.log(generatedNumber)
      yield put(numberRequestCompletedAction(generatedNumber));
      break;
    default:
      break;
  }
}