import React from 'react';
import styled from 'styled-components';

const Layout = (props) => {
  const MainContent = styled.main`
    margin-top: 16px;
  `;

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
