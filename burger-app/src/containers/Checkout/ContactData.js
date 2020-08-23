import React, {Component} from 'react';
import styled from 'styled-components'
import Button from "../../components/UI/Button";
import axios from '../../axios-orders';
import Spinner from "../../components/UI/Spinner";
import Input from "../../components/UI/Input";

const ContactDataDiv = styled.div`
    margin: 20px auto;
    width: 80%;
    text-align: center;
    
    @media (min-width: 600px) {
      width: 500px;
    }`;

const Form = styled.form`
      display: flex;
      flex-direction: column;
      align-items: center;
  `;

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your name'
        },
        value: 'Chris V'
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: 'Chris V'
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your name'
        },
        value: 'Your Zipcode'
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Country'
        },
        value: 'US'
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your email'
        },
        value: ''
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          type: 'select',
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'},
          ]
        },
        value: 'fastest'
      }
    },
    loading: false,
  };

  inputChangedHandler = (event, inputId) => {
    console.log(event.target.value);
    const updatedForm = { ...this.state.orderForm };
    const updatedFormElement = {
      ...updatedForm[inputId]
    };

    updatedFormElement.value = event.target.value;
    updatedForm[inputId] = updatedFormElement;
    this.setState({orderForm: updatedForm});
  };

  orderHandler = (event) => {
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
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

  render() {
    const formInputs = [];
    for (let key in this.state.orderForm) {
      formInputs.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }


    let form = (
      <Form>
        {
          formInputs.map(formInput => (
            <Input
              key={formInput.id}
              elementType={formInput.config.elementType}
              elementConfig={formInput.config.elementConfig}
              value={formInput.config.value}
              changed={(event) => this.inputChangedHandler(event, formInput.id)}
            />
          ))
        }
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
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
