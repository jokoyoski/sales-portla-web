import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../redux-store/reducers/cart-reducer/cart.selector";
import BannerGif from "../assets/images/Home-Display.gif";

const CarouselPage = ({ cartItems, total, AddOrders, ClearCart }) => {
  return (
    <div className="w-[70%]">
      <div className="">
        <img src={BannerGif} alt="hero-img" className="rounded-2xl" />
      </div>
    </div>
  );
};

const mapToDispatchToProps = (dispatch) => ({
  LoadOrders(payload) {
    dispatch({ type: "LOAD_SALES_PRODUCT_LIST", payload });
  },
  ClearCart: () => dispatch({ type: "CLEAR_CART" }), //setting the values,
  AddOrders(payload) {
    dispatch({ type: "SAVE_ORDERS", payload });
  },
});

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state), // from the selector we pass in the state
    total: selectCartTotal(state),
  };
};

export default connect(mapStateToProps, mapToDispatchToProps)(CarouselPage); //higher order component
