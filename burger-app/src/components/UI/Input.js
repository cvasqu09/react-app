import React from 'react';
import styled from 'styled-components';
import classes from './Input.module.css';

const StyledInput = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
`;

const StyledLabel = styled.label`
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
`;

const Input = (props) => {
  let inputElement = null;


  switch (props.elementType) {
    case 'input':
      inputElement = <input {...props.elementConfig} className={classes.InputElement} value={props.value} onChange={props.changed}/>;
      break;
    case 'textarea':
      inputElement = <textarea {...props.elementConfig} className={classes.InputElement} value={props.value} onChange={props.changed}/>;
      break;
    case 'select':
      inputElement =
        <select className={classes.InputElement} value={props.value} onChange={props.changed}>
          {props.elementConfig.options.map(option => (
              <option value={option.value} key={option.value}>{option.displayValue}</option>
            ))}
        </select>;
      break;
    default:
      inputElement = <input {...props.elementConfig} className={classes.InputElement} value={props.value} onChange={props.changed}/>;
  }

  return (
    <StyledInput>
      <StyledLabel>{props.label}</StyledLabel>
      {inputElement}
    </StyledInput>
  );
};

export default Input;
