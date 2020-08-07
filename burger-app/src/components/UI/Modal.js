import React, {Component} from 'react';
import styled from 'styled-components';
import Backdrop from "./Backdrop";

const ModalContainer = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  
  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`;

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.showModal !== this.props.showModal;
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('modal will update');
  }

  render() {
    return (
      <React.Fragment>
        <Backdrop click={this.props.modalClosed} showBackdrop={this.props.showModal}/>
        <ModalContainer style={ {
          transform: this.props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: this.props.showModal ? '1' : '0'
        }}>
          {this.props.children}
        </ModalContainer>
      </React.Fragment>
    );
  }
}

export default Modal;
