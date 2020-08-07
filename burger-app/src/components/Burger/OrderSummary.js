import React, {Component} from 'react';
import styled from 'styled-components';
import Button from "../UI/Button";


class OrderSummary extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('will update');
  }

  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(key =>
      (<li key={key}>
        <span style={ {textTransform: 'capitalize'} }>{key}</span>: {this.props.ingredients[key]}
      </li>));

    return (
      <React.Fragment>
        <h3>Order Summary</h3>
        <p>Burger with the following ingredients</p>
        <ul>
          {ingredientsSummary}
        </ul>
        <p><strong>Your total is: {this.props.totalPrice.toFixed(2)} </strong></p>
        <Button btnType="Danger" clicked={this.props.cancelOrder}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.continueOrder}>CONTINUE</Button>
      </React.Fragment>
    );
  }
}

export default OrderSummary;
