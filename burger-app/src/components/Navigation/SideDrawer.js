import React from 'react';
import styled from 'styled-components';
import Logo from "../Logo";
import NavigationItems from "./NavigationItems";

const StyledSideDrawer = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;

  @media (min-width: 500px) {
    display: none;
  }
  
  .Open {
    transform: translateX(0);
  }
  
  .Close {
    transform: translateX(-100%);
  }
`;

const LogoContainer = styled.div`
  height: 11%;
`;

const SideDrawer = (props) => {
  return (
    <StyledSideDrawer>
      <LogoContainer>
        <Logo/>
      </LogoContainer>
      <nav>
        <NavigationItems/>
      </nav>
    </StyledSideDrawer>
  );
};

export default SideDrawer;
