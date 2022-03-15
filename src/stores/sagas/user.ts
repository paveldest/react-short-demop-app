import {
  call,
  put,
  takeEvery,
} from "redux-saga/effects";

import { PayloadAction } from "@reduxjs/toolkit";
import apiMiddleware from "../../services/apiMiddleware";
import { appConst } from "../../config";
import { loginFailure, logInRequest, loginSuccess } from "../reducers/user";
import { APILogIn } from "../reducers/user/userTypes";

export function* userSagas() {
  yield takeEvery(logInRequest, logIn);
}

export function* logIn({ payload }: PayloadAction<APILogIn>) {
  try {
    // @ts-ignore skip global wrap check
    const { data } = yield call(apiMiddleware, {
      url: appConst.services.logIn,
      method: "POST",
      data: payload,
    });

    yield put(loginSuccess(data));
  } catch ({ message = ''}) {
    yield put(loginFailure(message as string));
  }
}
