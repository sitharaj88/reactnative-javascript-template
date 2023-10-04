//root saga with counter saga

import { all } from "redux-saga/effects";

import { watchIncrementAsync, watchDecrementDelayAsync } from "./counter";

export default function* rootSaga() {
  yield all([watchIncrementAsync(), watchDecrementDelayAsync()]);
}
