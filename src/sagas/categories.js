import { put, takeLatest, all, call } from "redux-saga/effects";

import Request from "../utils/request";

import {getListCategoriesSuccess, getListCategoriesError, getListCategories} from "../actions/categories";

import { GET_LIST_CATEGORIES } from "../contans/categories";

export function* getCategories(action) {
    const url = `/categories/get?id_website=4`;
    try {
        const response = yield call(Request, url);
        yield put(getListCategoriesSuccess(response));
    } catch (error) {
        yield put(getListCategoriesError(error.message));
    }
}

export default function* ProductSaga() {
    yield all([
        yield takeLatest(GET_LIST_CATEGORIES, getListCategories),
    ]);
}
