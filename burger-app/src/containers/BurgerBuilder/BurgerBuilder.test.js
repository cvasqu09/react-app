import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { BurgerBuilder } from "./BurgerBuilder";
import React from "react";
import BuildControls from "../../components/Burger/BuildControls";

configure({adapter: new Adapter()})

describe('BurgerBuilder Container', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} totalPrice={100}/>);
  })

  it('should render BuildControls when receiving ingredients', () => {
    wrapper.setProps({ingredients: {salad: 0}});

    expect(wrapper.find(BuildControls)).toHaveLength(1);
  })
})
