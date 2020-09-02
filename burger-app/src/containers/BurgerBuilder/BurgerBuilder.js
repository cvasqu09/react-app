import React, {Component} from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls";
import styled from 'styled-components';
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/Burger/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler";
import {connect} from "react-redux";
import {addIngredient, removeIngredient, clearIngredients} from "../../store/actions/index";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const Price = styled.div`
  font-weight: bold;
`;


class BurgerBuilder extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    axios.get('https://burgerapp-d0f0c.firebaseio.com/ingredients.json')
      .then(response => {
        this.setState({ingredients: response.data});
      })
      .catch(error => {
        this.setState({error: error});
      });
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    });
  };

  purchaseContinueHandler = () => {
    this.props.history.push({
      pathname: '/checkout',
    });
  };

  cancelPurchaseHandler = () => {
    this.setState({
      purchasing: false
    })
  };

  canPurchase = () => {
    const sum = Object.keys(this.props.ingredients)
      .map(ingredient => this.props.ingredients[ingredient])
      .reduce((acc, curr) => acc + curr, 0);

    console.log('sum is', sum);
    return sum > 0;
  };

  render() {
    const disabledInfo = {...this.props.ingredients};

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }


    let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner/>;
    let orderSummary = null;

    if (this.props.ingredients) {
      console.log('this.props.totalPrice', this.props.totalPrice);
      burger = (
        <React.Fragment>
          <Burger ingredients={this.props.ingredients}/>
          <BuildControls
            canPurchase={this.canPurchase()}
            purchasing={this.purchaseHandler}
            ingredientAdded={this.props.onIngredientAdded}
            removeIngredient={this.props.onIngredientRemoved}
            clearIngredients={this.props.onClearIngredients}
            disabledControls={disabledInfo}/>
        </React.Fragment>
      );

      orderSummary = <OrderSummary ingredients={this.props.ingredients}
                                   cancelOrder={this.cancelPurchaseHandler}
                                   continueOrder={this.purchaseContinueHandler}
                                   totalPrice={this.props.totalPrice}/>;
    }

    if (this.state.loading) {
      orderSummary = <Spinner/>
    }

    return (
      <React.Fragment>
        <Modal showModal={this.state.purchasing} modalClosed={this.cancelPurchaseHandler}>
          {orderSummary}
        </Modal>
        {burger}
        <Price>Total Price is ${this.props.totalPrice.toFixed(2)} dollars</Price>
      </React.Fragment>
    );
  }
}

BurgerBuilder.propTypes = {};

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingredient) => dispatch(addIngredient(ingredient)),
    onIngredientRemoved: (ingredient) => dispatch(removeIngredient(ingredient)),
    onClearIngredients: () => dispatch(clearIngredients())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
