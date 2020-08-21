import React, {Component} from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls";
import styled from 'styled-components';
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/Burger/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler";

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
    ingredients: null,
    totalPrice: 4,
    canPurchase: false,
    purchasing: false,
    loading: false,
  };

  componentDidMount() {
    console.log(this.props);
    axios.get('https://burgerapp-d0f0c.firebaseio.com/ingredients.json')
      .then(response => {
        this.setState({ingredients: response.data});
      })
      .catch(error => {
        this.setState({error: error});
      });
  }

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
    // this.setState({loading: true});
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: 'Chris V',
    //     address: {
    //       street: 'test',
    //       zipCode: 78830,
    //       country: 'Brazil'
    //     },
    //     email: 'test@test.com',
    //     deliveryMethod: 'fastest'
    //   }
    // };
    //
    // axios.post('order', order)
    //   .then(res => {
    //     console.log(res);
    //     this.setState({loading: false, purchasing: false});
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     this.setState({loading: false, purchasing: false});
    //   })
    let ingredientsCountArr = [];
    console.log('state ing', this.state.ingredients);

    for(const [ingredient, ingredientCount] of Object.entries(this.state.ingredients)) {
      ingredientsCountArr.push(ingredient.toString() + '=' + ingredientCount);
    }

    console.log("the ingredients", ingredientsCountArr.join('&'));
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + ingredientsCountArr.join('&')
    });
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


    let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner/>;
    let orderSummary = null;

    if (this.state.ingredients) {
      burger = (
        <React.Fragment>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls
            canPurchase={this.state.canPurchase}
            purchasing={this.purchaseHandler}
            ingredientAdded={this.addIngredientHandler}
            removeIngredient={this.removeIngredient}
            clearIngredients={this.clearIngredientsHandler}
            disabledControls={disabledInfo}/>
        </React.Fragment>
      );

      orderSummary = <OrderSummary ingredients={this.state.ingredients}
                                   cancelOrder={this.cancelPurchaseHandler}
                                   continueOrder={this.purchaseContinueHandler}
                                   totalPrice={this.state.totalPrice}/>;
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
        <Price>Total Price is ${this.state.totalPrice.toFixed(2)} dollars</Price>
      </React.Fragment>
    );
  }
}

BurgerBuilder.propTypes = {};

export default withErrorHandler(BurgerBuilder, axios);
