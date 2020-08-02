import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BuildControl = props => {
  const BuildControlDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
  `;

  const BuildControlButton = styled.div`
    display: flex;
    justify-content: center;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #AA6817;
    cursor: pointer;
    outline: none;
    
    &:disabled {
      background-color: #AC9980;
      border: 1px solid #7E7365;
      color: #ccc;
      cursor: default;
    }
    
    &:hover:disabled {
      background-color: #AC9980;
      color: #ccc;
      cursor: not-allowed;
    }
  `;

  const LabelDiv = styled.div`
    padding: 10px;
    font-weight: bold;
    width: 80px;
  `;

  const LessButton = styled(BuildControlButton)`
    background-color: #D39952;
    color: white;
    
    &:hover, &:active {
      background-color: #DAA972;
      color: white;
    }
  `;

  const MoreButton = styled(BuildControlButton)`
    background-color: #8F5E1E;
    color: white;
    
    &:hover, &:active {
      background-color: #99703F;
      color: white;
    }
    
  `;

  return (
    <BuildControlDiv>
      <LabelDiv>{props.label}</LabelDiv>
      <LessButton>Less</LessButton>
      <MoreButton>More</MoreButton>
    </BuildControlDiv>
  );
};

BuildControl.propTypes = {};

export default BuildControl;
