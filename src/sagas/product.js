import { put, takeLatest, all, call } from "redux-saga/effects";

import Request from "../utils/request";

import {
  getProductSuccess,
  getProductError,
  getProductDetailSuccess,
  getProductDetailError,
} from "../actions/product";

import { GET_PRODUCT, GET_DETAIL } from "../contans/product";

export function* getProduct(action) {
  const url = `products/get?active=1&id_parent=0&id_website=4`;
  try {
    const response = yield call(Request, url);
    yield put(getProductSuccess(response));
  } catch (error) {
    yield put(getProductError(error.message));
  }
}

export function* getDetail(action) {
  const url = `/products/detail?alias=${action.alias}`;
  try {
    const response = yield call(Request, url);
    yield put(getProductDetailSuccess(response.data));
  } catch (error) {
    yield put(getProductDetailError(error.message));
  }
}

export default function* ProductSaga() {
  yield all([
    yield takeLatest(GET_PRODUCT, getProduct),
    yield takeLatest(GET_DETAIL, getDetail),
  ]);
}
