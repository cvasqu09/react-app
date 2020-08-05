import React from 'react';
import styled from 'styled-components';
import Button from "../UI/Button";


const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map(key =>
    (<li key={key}>
      <span style={ {textTransform: 'capitalize'} }>{key}</span>: {props.ingredients[key]}
    </li>));

  return (
    <React.Fragment>
      <h3>Order Summary</h3>
      <p>Burger with the following ingredients</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p><strong>Your total is: {props.totalPrice.toFixed(2)} </strong></p>
      <Button btnType="Danger" clicked={props.cancelOrder}>CANCEL</Button>
      <Button btnType="Success" clicked={props.continueOrder}>CONTINUE</Button>
    </React.Fragment>
  );
};

export default OrderSummary;
