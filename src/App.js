import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import "./App.scss";
import Dashboard from "./Main-pages/Dashbaord";
import Cart from "./Main-pages/Cart";
import Category from "./Main-pages/Category";
import All from "./Main-pages/All";
import Selected from "./Main-pages/Selected";
import LoadingOverlay from "react-loading-overlay";
import { connect } from "react-redux";
import Order from "./Main-pages/Order";
import Orders from "./Main-pages/orders/Order";
import Profile from "./Main-pages/Others/Profile";
import RegisterComponent from "./components/register/register";
import LoginPageComponent from "./components/login/LoginPageComponent";
import AddLocationForm from "./Main-pages/location/AddLocationForm";
import Account from "./Main-pages/account/Account";
import OrderDetails from "./Main-pages/orders/OrderDetails";
import SavedItems from "./Main-pages/saved-items/SavedItems";
import CategorySelected from "./Main-pages/category-selected/CategorySelected";
import ResetPassword from "./components/Password-Reset/ResetPassword";
import ResetCode from "./components/Password-Reset/RecievedCode";
import MainCart from "./Main-pages/MainCart";
import TopSlider from "./Main-pages/TopSlider";

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
            <Route path="/Order" exact component={Order} />
            <Route path="/location" exact component={AddLocationForm} />
            <Route path="/Profile" exact component={Profile} />
            <Route path="/details" exact component={OrderDetails} />
            <Route path="/select" exact component={Orders} />
            <Route path="/main/cart" exact component={MainCart} />
            <Route path="/main/slider" exact component={TopSlider} />

            <Route
              path="/category-selected"
              exact
              component={CategorySelected}
            />
            <Route path="/select/details" exact component={Orders} />
            <Route path="/user/register" exact component={RegisterComponent} />
            <Route path="/account" exact component={Account} />
            <Route path="/saved-items" exact component={SavedItems} />
            <Route path="/user/login" exact component={LoginPageComponent} />
            <Route
              path="/user/reset-password"
              exact
              component={ResetPassword}
            />
            <Route path="/user/reset-code" exact component={ResetCode} />
          </LoadingOverlay>
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    spinner: state.utilityReducerSales.spinner,
  };
}
const mapDispatchToProps = (dispatch) => ({
  SetLoader() {
    dispatch({ type: "LOADING_BUTTON_SPINNER" });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
