import { all, fork } from "redux-saga/effects";
import { watchCalculate } from "./table-calculate.sagas";

export const rootSaga = function* root() {
  yield all([fork(watchCalculate)]);
};
