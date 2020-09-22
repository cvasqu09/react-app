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
    error: error
  }
};

export const purchaseBurger = (orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER,
    order: orderData
  }
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  }
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  }
};

export const fetchOrdersFailure = (err) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: err
  }
};


export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  }
};
