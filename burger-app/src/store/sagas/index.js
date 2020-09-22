import {takeEvery} from "redux-saga/effects";
import * as actionTypes from '../actions/actionTypes';
import {loadIngredientsSaga} from "./burgerBuilder";

export function* watchLoadIngredients() {
  yield takeEvery(actionTypes.INIT_INGREDIENTS, loadIngredientsSaga);
}
