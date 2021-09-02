import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";
import { Link } from "react-router-dom";
// import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { connect } from "react-redux";
import {
    selectCartItems,
    selectCartTotal,
  } from "../redux-store/reducers/cart-reducer/cart.selector";
const CarouselPage = ({cartItems, total, AddOrders, ClearCart}) => {
    return (
        <div className="container-fluid">
        <MDBContainer
        className="p-0"
        >
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={false}
                showIndicators={true}
                className="z-depth-1 p-0 m-0 carousel-head"
                style={{ position:"Relative", left:"0.5rem"}}

            >
                <MDBCarouselInner
                        className="m-0 p-0"
                >
                    <MDBCarouselItem itemId="1" 
                    style={{width:"100"}}
                    className="m-0 p-0"
                    >
                        <MDBView>
                            <img
                                className="d-block top-slide w-100"
                                    src="https://www.topteny.com/wp-content/uploads/2017/08/DSF-1.jpg"
                                alt="First slide"
                                width="100%"
                            />
                            <MDBMask overlay="black-strong" />
                        </MDBView>
                        <MDBCarouselCaption>
                                <h3 className="h3-responsive"> <strong>August Shopping Festival</strong></h3>
                            <p>Buy anything on our store and get up to 50% discount this month <br /> from 15-30th of August</p>
                                <button type="button" class="btn btn-dark">Shop Now</button>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2"
                            className="m-0 p-0"
                    >
                        <MDBView>
                            <img
                                className="d-block w-100"
                                    src="https://www.dignited.com/wp-content/uploads/2021/07/naija-shopping.jpg"
                                alt="Second slide"
                                    width="100%"
                            />
                            
                            <MDBMask overlay="black-strong" />
                        </MDBView>
                        <MDBCarouselCaption>
                                <h3 className="h3-responsive"> <strong>August Shopping Festival</strong></h3>
                                <p>Buy anything on our store and get up to 50% discount this month <br /> from 15-30th of August</p>
                                <button type="button" class="btn btn-dark">Shop Now</button>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3"
                            className="m-0 p-0"
                    >
                        <MDBView>
                            <img
                                className="d-block w-100"
                                    src="https://alexis.lindaikejisblog.com/photos/shares/5f9d967fef6fc.png"
                                alt="Third slide"
                                    width="100%"
                            />
                            <MDBMask overlay="black-strong" />
                        </MDBView>
                        <MDBCarouselCaption>
                                <h3 className="h3-responsive"> <strong>August Shopping Festival</strong></h3>
                                <p>Buy anything on our store and get up to 50% discount this month <br /> from 15-30th of August</p>
                                <button type="button" class="btn btn-dark">Shop Now</button>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
        </div>
    );
}


const mapToDispatchToProps = (dispatch) => ({
    LoadOrders(payload) {
      dispatch({ type: "LOAD_SALES_PRODUCT_LIST", payload });
    },
    ClearCart: () => dispatch({ type: "CLEAR_CART"}), //setting the values,
    AddOrders(payload) {
      dispatch({ type: "SAVE_ORDERS", payload });
    },
    //object we are passing into the component
    // AddItem: (item) => dispatch(AddItem(item)), //setting the values,
  });
  
  const mapStateToProps = (state) => {
    return {
      cartItems: selectCartItems(state), // from the selector we pass in the state
      total: selectCartTotal(state)
    };
  };
  
  export default connect(mapStateToProps, mapToDispatchToProps)(CarouselPage); //higher order component
  