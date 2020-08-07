import React, {Component} from 'react';
import styled from 'styled-components';
import Toolbar from "../../components/Navigation/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer";
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

  sideDrawerOpenHandler = () => {
    this.setState((prevState) => ({showSideDrawer: !prevState.showSideDrawer}))
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar menuClick={this.sideDrawerOpenHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <MainContent>
          {this.props.children}
        </MainContent>
      </React.Fragment>
    )
  }
};

export default Layout;
