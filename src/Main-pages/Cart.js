import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../redux-store/reducers/cart-reducer/cart.selector";
import Banner05 from "../assets/images/Banner-05.png";
import Banner04 from "../assets/images/Banner-04.png";
import Banner03 from "../assets/images/Banner-03.png";
import Banner02 from "../assets/images/Banner-02.png";
import Banner01 from "../assets/images/Banner-01.png";

const CarouselPage = ({ cartItems, total, AddOrders, ClearCart }) => {
  return (
    <div className="">
      <MDBContainer className="p-0">
        <MDBCarousel
          activeItem={1}
          length={5}
          showControls={false}
          showIndicators={true}
          className="z-depth-1 p-0 m-0 carousel-head"
          style={{ position: "Relative", left: "0.5rem" }}
        >
          <MDBCarouselInner className="m-0 p-0">
            <MDBCarouselItem
              itemId="1"
              style={{ width: "100" }}
              className="m-0 p-0"
            >
              <MDBView>
                <img
                  className="block top-slide w-100 rounded-2xl"
                  src={Banner05}
                  alt="First_slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2" className="m-0 p-0">
              <MDBView>
                <img
                  className="block w-100 rounded-2xl"
                  src={Banner04}
                  alt="Second_slide"
                />
              </MDBView>
            </MDBCarouselItem>

            <MDBCarouselItem itemId="3" className="m-0 p-0">
              <MDBView>
                <img
                  className="block w-100 rounded-2xl"
                  src={Banner03}
                  alt="Third_slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4" className="m-0 p-0">
              <MDBView>
                <img
                  className="block w-100 rounded-2xl"
                  src={Banner02}
                  alt="Forth_slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="5" className="m-0 p-0">
              <MDBView>
                <img
                  className="block w-100 rounded-2xl"
                  src={Banner01}
                  alt="Fifth_slide"
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
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
