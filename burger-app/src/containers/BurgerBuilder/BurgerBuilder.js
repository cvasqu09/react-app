import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BurgerBuilder extends Component {
  render() {
    return (
      <React.Fragment>
        <div>Burger</div>
        <div>Build Controls</div>
      </React.Fragment>
    );
  }
}

BurgerBuilder.propTypes = {};

export default BurgerBuilder;
