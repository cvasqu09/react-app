import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  color: ${props => props.btnType === 'Success' ? '#5C9210' : props.btnType === 'Danger' ? '#944317' : 'white'}; 

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
`;

const Button = (props) => {
  return (
    <ButtonComponent onClick={props.clicked} btnType={props.btnType}>{props.children}</ButtonComponent>
  );
};

export default Button;
