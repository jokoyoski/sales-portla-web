import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";


import { Link } from "react-router-dom";
import Product from "../../assets/images/jacket.jpeg"
import Header from "../header/Header";
import "./category-selected.scss";
export function Dashboard({
  products,
  productCategories,
  LoadProducts,
  SetProduct,
  itemCount,
  cartRecords,
}) {
  const [showBasic, setShowBasic] = useState(false);

  useEffect(() => {
    LoadProducts();
  }, []);
  return (
    <div>
      <header>
        <div className="container top-nav pt-3 p-0 bg-blue-500">
          <Header />
          <hr />
        </div>

     
        <div style={{ backgroundColor: '#E8E8E8' }} className="second-nav">
          <nav class="navbar navbar-expand-lg navbar-light bg-white container-fluid">
            <div class="container">
              <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="fas fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav"></div>
            </div>
          </nav>
        </div>
        {/* <!-- Navbar -->

        <!-- Jumbotron --> */}
      </header>
      <div className="main-o" >
        <div className="main-cat">
          <span>Food</span>
          
        </div>
        <div className="main-card">
          <div className="pro">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fav" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
              <img
              className="img-att"
                src={Product}
                alt=""
                height={'200px'}
                width="100%"

              />
        

            <h4 style={{ fontSize: '20px' }}>Dettol Soap</h4>
            <div className="text-bottom">
              #400
              <button className="button" style={{ backgroundColor: '#1F43D8', color: 'white' }}>
                Buy Now
              </button>
            </div>
          </div>

          <div className="pro">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fav" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
              <img
              className="img-att"
                src={Product}
                alt=""
                height={'200px'}
                width="100%"

              />
        

            <h4 style={{ fontSize: '20px' }}>Dettol Soap</h4>
            <div className="text-bottom">
              #400
              <button className="button" style={{ backgroundColor: '#1F43D8', color: 'white' }}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="pro">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fav" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
              <img
              className="img-att"
                src={Product}
                alt=""
                height={'200px'}
                width="100%"

              />
        

            <h4 style={{ fontSize: '20px' }}>Dettol Soap</h4>
            <div className="text-bottom">
              #400
              <button className="button" style={{ backgroundColor: '#1F43D8', color: 'white' }}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="pro">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fav" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
              <img
              className="img-att"
                src={Product}
                alt=""
                height={'200px'}
                width="100%"

              />
        

            <h4 style={{ fontSize: '20px' }}>Dettol Soap</h4>
            <div className="text-bottom">
              #400
              <button className="button" style={{ backgroundColor: '#1F43D8', color: 'white' }}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="pro">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fav" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
              <img
              className="img-att"
                src={Product}
                alt=""
                height={'200px'}
                width="100%"

              />
        

            <h4 style={{ fontSize: '20px' }}>Dettol Soap</h4>
            <div className="text-bottom">
              #400
              <button className="button" style={{ backgroundColor: '#1F43D8', color: 'white' }}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="pro">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fav" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
              <img
              className="img-att"
                src={Product}
                alt=""
                height={'200px'}
                width="100%"

              />
        

            <h4 style={{ fontSize: '20px' }}>Dettol Soap</h4>
            <div className="text-bottom">
              #400
              <button className="button" style={{ backgroundColor: '#1F43D8', color: 'white' }}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="pro">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fav" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
              <img
              className="img-att"
                src={Product}
                alt=""
                height={'200px'}
                width="100%"

              />
        

            <h4 style={{ fontSize: '20px' }}>Dettol Soap</h4>
            <div className="text-bottom">
              #400
              <button className="button" style={{ backgroundColor: '#1F43D8', color: 'white' }}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="pro">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fav" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
              <img
              className="img-att"
                src={Product}
                alt=""
                height={'200px'}
                width="100%"

              />
        

            <h4 style={{ fontSize: '20px' }}>Dettol Soap</h4>
            <div className="text-bottom">
              #400
              <button className="button" style={{ backgroundColor: '#1F43D8', color: 'white' }}>
                Buy Now
              </button>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    products: state.dashboardReducer.products,
    productDetails: state.productDetailsReducer.productDetails,
    itemCount: state.cartReducer.itemCount,
    cartRecords: state.cartReducer.cartRecords,
  };
}
const mapDispatchToProps = (dispatch) => ({
  LoadProducts(payload) {
    dispatch({ type: "LOAD_PRODUCT", payload });
  },
  SetProduct(payload) {
    dispatch({ type: "SET_PRODUCT_DETAILS", payload });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
