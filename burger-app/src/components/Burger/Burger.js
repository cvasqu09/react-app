import React, {Component} from 'react';
import styled from 'styled-components';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import {withRouter} from "react-router-dom";
const BurgerDiv = styled.div`
    width: 100%;
    margin: auto;
    height: 250px;
    overflow: scroll;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    @media (min-width: 1000px) and (min-height: 700px) {
      width: 450px;
      height: 400px;
}`;

class Burger extends Component {
  render() {
    let transformedIngredients = Object.keys(this.props.ingredients)
      .map(ingredientKey => {
        return [...Array(this.props.ingredients[ingredientKey])].map((_, index) => {
          return <BurgerIngredient key={ingredientKey + index} type={ingredientKey}/>
        })
      }).reduce((arr, currVal) => {
        return arr.concat(currVal)
      }, []);

    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please start adding ingredients</p>
    }

    return (
      <BurgerDiv>
        <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
      </BurgerDiv>
    );
  }
}

Burger.propTypes = {};

export default withRouter(Burger);
