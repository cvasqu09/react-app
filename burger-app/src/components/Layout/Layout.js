import React, {Component} from 'react';
import styled from 'styled-components';
import Toolbar from "../Navigation/Toolbar";
import SideDrawer from "../Navigation/SideDrawer";
const MainContent = styled.main`
    margin-top: 72px;
  `;
class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <MainContent>
          {this.props.children}
        </MainContent>
      </React.Fragment>
    )
  }
};

export default Layout;
