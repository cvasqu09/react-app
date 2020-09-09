import React from 'react';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import {Route, Switch} from "react-router-dom";
import Orders from "./containers/Orders";
import AuthComponent from "./containers/Auth";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={AuthComponent} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/" component={BurgerBuilder} exact />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
