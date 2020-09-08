import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Order from "../components/Order/Order";
import axios from '../axios-orders';
import withErrorHandler from "../hoc/withErrorHandler";
import * as orderActions from '../store/actions/order'
import {connect} from "react-redux";
import Spinner from "../components/UI/Spinner";

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    let orders = <Spinner/>;

    if(this.props.orders) {
      orders = this.props.orders.map(order =>
          <Order key={order.id} ingredients={order.ingredients} price={order.price}/>
      );
    }

    return (
      <div>
        {orders}
      </div>
    );
  }
}

Orders.propTypes = {};

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => dispatch(orderActions.fetchOrders()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
