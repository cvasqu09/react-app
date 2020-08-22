import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Order from "../components/Order/Order";
import axios from '../axios-orders';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
    error: null
  };

  componentDidMount() {
    axios.get('/orders.json')
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          })
        }
        this.setState({orders: fetchedOrders, loading: false});
      })
      .catch((err) => {
        this.setState({error: err, loading: false});
      })
  }

  render() {
    console.log('state orders', this.state.orders);
    const orders = this.state.orders.map(order =>
        <Order key={order.id} ingredients={order.ingredients} price={order.price}/>
    );
    console.log(orders);


    return (
      <div>
        {orders}
      </div>
    );
  }
}

Orders.propTypes = {};

export default Orders;
