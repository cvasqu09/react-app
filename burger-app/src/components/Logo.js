import React from 'react';
import styled from 'styled-components';
import PeepoImg from '../assets/peepo_heart.png';

const LogoContainer = styled.div`
  background-color: white;
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  
  img {
    height: 100%;
  }
`;

const Logo = (props) => {
  return (
    <LogoContainer>
      <img src={PeepoImg} alt="peepo"/>
    </LogoContainer>
  );
};

export default Logo;
