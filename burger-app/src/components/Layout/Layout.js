import React from 'react';
import styled from 'styled-components';
const MainContent = styled.main`
    margin-top: 16px;
  `;
const Layout = (props) => {


  return (
    <React.Fragment>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <MainContent>
        {props.children}
      </MainContent>
    </React.Fragment>
  )
};

export default Layout;
