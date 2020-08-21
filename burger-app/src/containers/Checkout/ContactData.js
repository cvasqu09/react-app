import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Button from "../../components/UI/Button";

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      zipCode: ''
    }
  };



  render() {
    const ContactDataDiv = styled.div`
      margin: 20px auto;
      width: 80%;
      text-align: center;
      
      @media (min-width: 600px) {
        width: 500px;
      }`;

    const Input = styled.input`
        display: block;
    `;

    const Form = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    return (
      <ContactDataDiv>
        <h4>Enter your contact data</h4>
        <Form>
          <Input type="text" name="name" placeholder="Your name"/>
          <Input type="text" name="email" placeholder="Your email"/>
          <Input type="text" name="street" placeholder="Your address"/>
          <Input type="text" name="zipCode" placeholder="Your zipCode"/>
          <Button btnType="Success">ORDER</Button>
        </Form>
      </ContactDataDiv>
    );
  }
}

ContactData.propTypes = {};

export default ContactData;
