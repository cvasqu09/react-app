import React from 'react';
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



const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop click={props.modalClosed} showBackdrop={props.showModal}/>
      <ModalContainer style={ {
        transform: props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.showModal ? '1' : '0'
      }}>
        {props.children}
      </ModalContainer>
    </React.Fragment>
  );
};

export default Modal;
