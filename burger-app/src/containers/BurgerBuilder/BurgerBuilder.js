import React, {Component} from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls";
import styled from 'styled-components';
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/Burger/OrderSummary";

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
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    canPurchase: false,
    purchasing: false
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients, canPurchase: true})
  };

  removeIngredient = (type) => {
    const oldState = {...this.state};
    const updatedIngredientCount = Math.max(oldState.ingredients[type] - 1, 0);
    const updatedPrice = oldState.totalPrice - INGREDIENT_PRICES[type];

    const updatedState = {
      ...this.state,
      ingredients: {
        ...oldState.ingredients,
        [type]: updatedIngredientCount
      },
      totalPrice: updatedPrice,
    };

    this.setState({
      ...updatedState,
      canPurchase: Object.keys(updatedState.ingredients).reduce((prev, curr) => prev || updatedState.ingredients[curr] !== 0, false)
    });
  };

  clearIngredientsHandler = () => {
    this.setState({
      ...this.state,
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4,
      canPurchase: false,
      purchasing: false
    })
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    });
  };

  purchaseContinueHandler = () => {
    console.log("Continue");
  };

  cancelPurchaseHandler = () => {
    this.setState({
      purchasing: false
    })
  };

  render() {
    const disabledInfo = {...this.state.ingredients};

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <React.Fragment>
        <Modal showModal={this.state.purchasing} modalClosed={this.cancelPurchaseHandler}>
          <OrderSummary ingredients={this.state.ingredients}
                        cancelOrder={this.cancelPurchaseHandler}
                        continueOrder={this.purchaseContinueHandler}
                        totalPrice={this.state.totalPrice}
          />
        </Modal>
        <Price>Total Price is ${this.state.totalPrice.toFixed(2)} dollars</Price>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          canPurchase={this.state.canPurchase}
          purchasing={this.purchaseHandler}
          ingredientAdded={this.addIngredientHandler}
          removeIngredient={this.removeIngredient}
          clearIngredients={this.clearIngredientsHandler}
          disabledControls={disabledInfo}
        />
      </React.Fragment>
    );
  }
}

BurgerBuilder.propTypes = {};

export default BurgerBuilder;
