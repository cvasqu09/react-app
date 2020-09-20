import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from "./NavigationItems";
import React from "react";
import NavigationItem from "./NavigationItem";

configure({adapter: new Adapter()});

describe('NavigationItems', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationItems/>)
  });

  it('should render three navigation item elements', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  })

  it('should have a burger builder nav item', () => {
    expect(wrapper.findWhere(node => {
      return node.text() === 'Burger Builder';
    })).toBeTruthy();
  });

  it('should have a orders nav item', () => {
    expect(wrapper.findWhere(node => {
      return node.text() === 'Orders';
    })).toBeTruthy();
  });

  it('should have an Auth item', () => {
    expect(wrapper.findWhere(node => {
      return node.text() === 'Auth';
    })).toBeTruthy();
  });
});
