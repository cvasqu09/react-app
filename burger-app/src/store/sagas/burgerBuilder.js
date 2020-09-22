import axios from "../../axios-orders";
import {fetchIngredientsFailed, setIngredients} from "../actions";
import {put} from "redux-saga/effects";

export function* loadIngredientsSaga() {
  try {
    const result = yield axios.get('https://burgerapp-d0f0c.firebaseio.com/ingredients.json');
    yield put(setIngredients(result.data));
  } catch (err) {
    yield put(fetchIngredientsFailed())
  }
}
