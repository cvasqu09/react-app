import React from 'react';
import styled from 'styled-components';

const NavigationItemContainer = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
  
  a {
    color: #8F5c2c;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;
    
    &:hover, &:active, &.active {
      color: #40a4cb;
    }
  }
  
  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    align-items: center;
    width: auto;
    height: 100%;
   
    a {
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
  }
`;

const NavigationItem = (props) => {
  console.log('props active', props.active);
  return (
    <NavigationItemContainer><a href={props.link} className={props.active ? 'active' : null}>{props.children}</a></NavigationItemContainer>
  );
};

export default NavigationItem;
