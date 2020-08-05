import React from 'react';
import styled from 'styled-components';
import NavigationItem from "./NavigationItem";

const NavigationItemsContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavigationItems = (props) => {
  return (
    <NavigationItemsContainer>
      <NavigationItem link="/" active>Burger Builder</NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </NavigationItemsContainer>
  );
};

export default NavigationItems;
