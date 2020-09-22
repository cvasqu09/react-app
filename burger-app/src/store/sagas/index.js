import {takeEvery} from "redux-saga/effects";
import * as actionTypes from '../actions/actionTypes';
import {loadIngredientsSaga} from "./burgerBuilder";
import {fetchOrdersSaga, purchaseBurgerSaga} from "./order";

export function* watchLoadIngredients() {
  yield takeEvery(actionTypes.INIT_INGREDIENTS, loadIngredientsSaga);
}

export function* watchPurchaseBurger() {
  yield takeEvery(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
}

export function* watchFetchOrders() {
  yield takeEvery(actionTypes.FETCH_ORDERS_START, fetchOrdersSaga);
}
