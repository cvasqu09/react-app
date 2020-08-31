import React, {Component} from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary";
import {Route} from "react-router-dom";
import ContactData from "./ContactData";
import {connect} from "react-redux";

class Checkout extends Component {
  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.props.ingredients} checkoutCancelled={this.checkoutCanceledHandler}
                         checkoutContinued={this.checkoutContinuedHandler}/>
        <Route path={this.props.match.path + '/contact-data'}
               component={ContactData}/>
      </div>
    );
  }
}

Checkout.propTypes = {};

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
  }
};



export default connect(mapStateToProps)(Checkout);
