import React from 'react';
import styled from 'styled-components';
import Burger from "../Burger/Burger";
import Button from "../UI/Button";

const CheckoutSummary = (props) => {
  const CheckoutSummaryDiv = styled.div`
      text-align: center;
      width: 80%;
      margin: auto;
      
      @media(min-width: 600px) {
        width: 500px;
      }
  `;

  return (
    <CheckoutSummaryDiv>
      <h1>We hope it tastes well!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
    </CheckoutSummaryDiv>
  );
};

export default CheckoutSummary;
