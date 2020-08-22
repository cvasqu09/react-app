import React, {Component} from 'react';
import styled from 'styled-components'
import Button from "../../components/UI/Button";
import axios from '../../axios-orders';
import Spinner from "../../components/UI/Spinner";

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      zipCode: ''
    },
    loading: false,

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

    const orderHandler = (event) => {
      this.setState({loading: true});
      const order = {
        ingredients: this.props.ingredients,
        price: this.props.price,
        customer: {
          name: 'Chris V',
          address: {
            street: 'test',
            zipCode: 78830,
            country: 'Brazil'
          },
          email: 'test@test.com',
          deliveryMethod: 'fastest'
        }
      };

      axios.post('orders.json', order)
        .then(res => {
          console.log(res);
          this.setState({loading: false});
          this.props.history.push("/");
        })
        .catch(err => {
          console.log(err);
          this.setState({loading: false});
        })
    };

    let form = (
      <Form>
        <Input type="text" name="name" placeholder="Your name"/>
        <Input type="text" name="email" placeholder="Your email"/>
        <Input type="text" name="street" placeholder="Your address"/>
        <Input type="text" name="zipCode" placeholder="Your zipCode"/>
        <Button btnType="Success" clicked={orderHandler}>ORDER</Button>
      </Form>
    );

    if(this.state.loading) {
      form = <Spinner/>
    }

    return (
      <ContactDataDiv>
        <h4>Enter your contact data</h4>
        {form}
      </ContactDataDiv>
    );
  }
}

ContactData.propTypes = {};

export default ContactData;
