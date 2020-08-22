import React, {Component} from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary";
import {Route} from "react-router-dom";
import ContactData from "./ContactData";

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for(let param of query.entries()) {
      if(param[0] === 'price') {
        price = +param[1]
      } else {
        ingredients[param[0]] = +param[1];
      }

    }
    console.log('totalPrice: ', price);
    this.setState({ingredients, totalPrice: price});
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
        <Route path={this.props.match.path + '/contact-data'} render={(props) => <ContactData ingredients={this.state.ingredients} price={this.state.price} {...props}/>}/>
      </div>
    );
  }
}

Checkout.propTypes = {};

export default Checkout;
