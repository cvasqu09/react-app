import React from 'react';
import styled from 'styled-components';
import Logo from "../Logo";
import NavigationItems from "./NavigationItems";
import Backdrop from "../UI/Backdrop";

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
  
  &.Open {
    transform: translateX(0);
  }
  
  &.Close {
    transform: translateX(-100%);
  }
`;

const LogoContainer = styled.div`
  height: 11%;
  margin-bottom: 32px;
`;

const SideDrawer = (props) => {

  const attachedClass = props.open ? 'Open' : 'Close';

  return (
    <React.Fragment>
      <Backdrop showBackdrop={props.open} click={props.closed}/>
      <StyledSideDrawer className={attachedClass}>
        <LogoContainer>
          <Logo/>
        </LogoContainer>
        <nav>
          <NavigationItems/>
        </nav>
      </StyledSideDrawer>
    </React.Fragment>
  );
};

export default SideDrawer;
