import React from 'react';
import styled from 'styled-components';

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
    </React.Fragment>
  );
};

export default OrderSummary;
