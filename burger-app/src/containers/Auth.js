import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";

const StyledDiv = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  
  @media (min-width: 600px) {
    width: 500px;
  }
`;

class AuthComponent extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email Address'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false,
      }
    }
  };

  checkValidity(value, rules) {
    let isValid = false;

    if (rules.required) {
      isValid = value.trim() !== '';
    }

    return isValid;
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true
      }
    };

    this.setState({controls: updatedControls});
  };


  render() {
    const formInputs = [];
    for (let key in this.state.controls) {
      formInputs.push({
        id: key,
        config: this.state.controls[key]
      })
    }

    const form = formInputs.map(formInput => {
      return (
        <Input
          key={formInput.id}
          elementType={formInput.config.elementType}
          elementConfig={formInput.config.elementConfig}
          value={formInput.config.value}
          invalid={!formInput.config.valid}
          shouldValidate={formInput.config.validation}
          touched={formInput.config.touched}
          changed={(event) => this.inputChangedHandler(event, formInput.id)}
      />)
    });

    return (
      <StyledDiv>
        <form>
          {form}
          <Button btnType="Success">Submit</Button>
        </form>
      </StyledDiv>
    );
  }
}

AuthComponent.propTypes = {};

export default AuthComponent;
