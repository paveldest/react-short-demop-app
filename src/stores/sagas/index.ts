import { all, fork } from "redux-saga/effects";

import { userSagas } from "./user";

export default function* root() {
  yield all([
    fork(userSagas),
  ]);
}
