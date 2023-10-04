import { increment, decrement } from "../slice/counter";

import { delay, takeLatest, put } from "redux-saga/effects";

function* incrementDelayAsync() {
  console.log("incrementDelayAsync before delay");
  yield delay(1000);
  console.log("incrementDelayAsync after delay");
}

function* decrementDelayAsync() {
  console.log("decrementDelayAsync before delay");
  yield delay(1000);
  console.log("decrementDelayAsync after delay");
}

export function* watchIncrementAsync() {
  yield takeLatest(increment.type, incrementDelayAsync);
}

export function* watchDecrementDelayAsync() {
  yield takeLatest(decrement.type, decrementDelayAsync);
}
