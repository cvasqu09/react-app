import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  }
};

export const purchaseBurgerFailed = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAILED,
    error
  }
};

export const purchaseBurgerStart = (orderData) => {
  return dispatch => {
    axios.post('orders.json', orderData)
      .then(res => {
        console.log(res);
        dispatch(purchaseBurgerSuccess(res.data, orderData))
      })
      .catch(err => {
        console.log(err);
        dispatch(purchaseBurgerFailed(err))
      });
  }
};
