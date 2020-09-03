import React, {Component} from 'react';
import styled from 'styled-components'
import Button from "../../components/UI/Button";
import axios from '../../axios-orders';
import Spinner from "../../components/UI/Spinner";
import Input from "../../components/UI/Input";
import {connect} from "react-redux";

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
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false,
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false,
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false,
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'US'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your email'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false,
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

  checkValidity(value, rules) {
    let isValid = false;

    if (rules.required) {
      isValid = value.trim() !== '';
    }

    return isValid;
  }

  inputChangedHandler = (event, inputId) => {
    console.log(event.target.value);
    const updatedForm = { ...this.state.orderForm };
    const updatedFormElement = {
      ...updatedForm[inputId]
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedForm[inputId] = updatedFormElement;
    console.log(this.state.orderForm);
    this.setState({orderForm: updatedForm});
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const formData = {};
    for (let formElementId in this.state.orderForm) {
      formData[formElementId] = this.state.orderForm[formElementId].value
    }

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    };
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
      <Form onSubmit={this.orderHandler}>
        {
          formInputs.map(formInput => (
            <Input
              key={formInput.id}
              elementType={formInput.config.elementType}
              elementConfig={formInput.config.elementConfig}
              value={formInput.config.value}
              invalid={!formInput.config.valid}
              shouldValidate={formInput.config.validation}
              touched={formInput.config.touched}
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

const mapStateToProps = state => {
  return {
    price: state.totalPrice,
    ingredients: state.ingredients
  }
};

export default connect(mapStateToProps)(ContactData);
