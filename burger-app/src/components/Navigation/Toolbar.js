import React from 'react';
import styled from 'styled-components';
import Logo from "../Logo";
import NavigationItems from "./NavigationItems";

const ToolbarHeader = styled.header`
    height: 56px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #703b09;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;
    
    nav {
     height: 100%;
    }
  `;

const LogoContainer = styled.div`
  height: 80%;
`;

const StyledNav = styled.nav`
  @media (max-width: 499px) {
    display: none;
  }
`;

const StyledMenu = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;
  
  @media (min-width: 500px) {
    display: none;
  }
`;

const StyledMenuItem = styled.div`
  width: 90%;
  height: 3px;
  background-color: white;
`;

const Toolbar = (props) => {
  return (
    <ToolbarHeader>
      <StyledMenu onClick={props.menuClick}>
        <StyledMenuItem/>
        <StyledMenuItem/>
        <StyledMenuItem/>
      </StyledMenu>
      <LogoContainer>
        <Logo>LOGO</Logo>
      </LogoContainer>
      <StyledNav>
        <NavigationItems/>
      </StyledNav>
    </ToolbarHeader>
  );
};

export default Toolbar;
