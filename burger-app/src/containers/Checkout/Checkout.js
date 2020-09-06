import React, {Component} from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary";
import {Route} from "react-router-dom";
import ContactData from "./ContactData";
import {connect} from "react-redux";
import {purchaseInit} from "../../store/actions/order";
import { Redirect } from 'react-router-dom';

class Checkout extends Component {
  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    let summary = <Redirect to="/" />;
    if(this.props.ingredients) {
      const purchaseRedirect = this.props.purchased ? <Redirect to="/" /> : null;

      summary =
        <div>
          {purchaseRedirect}
          <CheckoutSummary ingredients={this.props.ingredients} checkoutCancelled={this.checkoutCanceledHandler}
                           checkoutContinued={this.checkoutContinuedHandler}/>
          <Route path={this.props.match.path + '/contact-data'}
                 component={ContactData}/>
        </div>
    }
    return summary;
  }
}

Checkout.propTypes = {};

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  }
};



export default connect(mapStateToProps)(Checkout);
