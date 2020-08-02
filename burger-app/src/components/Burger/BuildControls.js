import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BuildControl from "../BuildControl";

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
];

const BuildControls = props => {
  const BuildControlsDiv = styled.div`
    width: 100%;
    background-color: #CF8F2E;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 0 2px 1px #ccc;
    margin: auto;
    padding: 10px 0;
  `;

  return (
    <BuildControlsDiv>
      {controls.map(control => (<BuildControl key={control.label} label={control.label}/>))}
    </BuildControlsDiv>
  );
};

BuildControls.propTypes = {};

export default BuildControls;
