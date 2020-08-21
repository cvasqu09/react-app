import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import CheckoutSummary from "../../components/Order/CheckoutSummary";
import {Route} from "react-router-dom";
import ContactData from "./ContactData";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1
    }
  };

  componentDidMount() {
    console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for(let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({ingredients});
  }

  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients} checkoutCancelled={this.checkoutCanceledHandler} checkoutContinued={this.checkoutContinuedHandler}/>
        <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
      </div>
    );
  }
}

Checkout.propTypes = {};

export default Checkout;
