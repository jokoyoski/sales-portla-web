import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import "./App.scss";
import Dashboard from "./Main-pages/Dashbaord";
import Cart from "./Main-pages/Cart";
import Category from "./Main-pages/Category";
import All from "./Main-pages/All";
import Selected from "./Main-pages/Selected";
import ShoppingCart from "./Main-pages/ShoppingCart";
import LoadingOverlay from "react-loading-overlay";
import { connect } from "react-redux";
import Order from "./Main-pages/Order";
import Profile from "./Main-pages/Others/Profile"

class App extends Component {
  render() {
    return (
      <Router>
            <Switch>
                <LoadingOverlay
                    active={this.props.spinner}
                    className="overlay-height"
                    spinner
                >
          <Route path="/" exact component={Dashboard} />
          <Route path="/Cart" exact component={Cart} />
          <Route path="/Cartegory" exact component={Category} />
          <Route path="/Allitems" exact component={All} />
          <Route path="/selected" exact component={Selected} />
          <Route path="/shoppingCart" exact component={ShoppingCart} />
          <Route path="/Order" exact component={Order} />
          <Route path="/Profile" exact component={Profile} />
                    </LoadingOverlay>
        </Switch>
      </Router>

      // <div>cvbnm,</div>
    );
  }
}

function mapStateToProps(state) {
    return {
      
        spinner: state.utilityReducer.spinner,
    };
}
const mapDispatchToProps = (dispatch) => ({
    SetLoader() {
        dispatch({ type: "LOADING_BUTTON_SPINNER" });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

