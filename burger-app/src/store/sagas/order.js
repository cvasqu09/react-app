import {put} from "redux-saga/effects";
import axios from "../../axios-orders";
import {fetchOrdersFailure, fetchOrdersSuccess, purchaseBurgerFailed, purchaseBurgerSuccess} from "../actions";

export function* purchaseBurgerSaga(action) {
  try {
    const res = yield axios.post('orders.json', action.order);
    yield put(purchaseBurgerSuccess(res.data.name, action.order));
  } catch (err) {
    yield put(purchaseBurgerFailed());
  }
}

export function* fetchOrdersSaga() {
  try {
    const res = yield axios.get('/orders.json');
    const fetchedOrders = [];
    for (let key in res.data) {
      fetchedOrders.push({
        ...res.data[key],
        id: key
      })
    }
    yield put(fetchOrdersSuccess(fetchedOrders));
  } catch (err) {
    yield put(fetchOrdersFailure(err))
  }
}
