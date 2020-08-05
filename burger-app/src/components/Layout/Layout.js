import React from 'react';
import styled from 'styled-components';
import Toolbar from "../Navigation/Toolbar";
import SideDrawer from "../Navigation/SideDrawer";
const MainContent = styled.main`
    margin-top: 72px;
  `;
const Layout = (props) => {
  return (
    <React.Fragment>
      <Toolbar/>
      <SideDrawer/>
      <MainContent>
        {props.children}
      </MainContent>
    </React.Fragment>
  )
};

export default Layout;
