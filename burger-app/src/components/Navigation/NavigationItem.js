import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
    color: #8F5c2c;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;
    
    &:hover, &:active, &.active {
      color: #40a4cb;
    }
    
    @media (min-width: 500px) {
      color: white;
      text-decoration: none;
      width: 100%;
      padding: 16px 10px;
      border-bottom: 4px solid transparent;
            
      &:hover, &:active, &.active {
        background-color: #8f5c2c;
        border-bottom: 4px solid #40a4c8;
        color: white;
      }
    }
`;

const NavigationItemContainer = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
  
  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    align-items: center;
    width: auto;
    height: 100%;
  }
`;

const NavigationItem = (props) => {
  return (
    <NavigationItemContainer><StyledNavLink to={props.link} exact>{props.children}</StyledNavLink></NavigationItemContainer>
  );
};

export default NavigationItem;
