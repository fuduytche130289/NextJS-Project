import { all } from "redux-saga/effects";
import ProductSaga from "./product";
// import BannerSaga from "./banner";

export default function* rootSaga() {
  yield all([
    ProductSaga(),
    // BannerSaga(),
  ]);
}
