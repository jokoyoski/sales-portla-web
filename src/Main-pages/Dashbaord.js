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
import CarouselPage from "./Cart";
import Category from "./Category";
import Modal from "../components/Modal";
import Modalcheckout from "../components/Modalcheckout";
import { Link } from "react-router-dom";
import Classjs from "./Classjs";
import Promo from "../assets/images/hene.jpeg";
import Product from "../assets/images/amala.jpeg";
import Header from "./header/Header";
import SecondPromote from "./SidedPromote";

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
        <div className=" top-nav pt-3 p-0 ">
          <Header />
        </div>

        {/* <!-- Navbar --> */}
        {/* <div style={{ backgroundColor: '#E8E8E8' }} className="second-nav">
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
        </div> */}
        {/* <!-- Navbar -->

        <!-- Jumbotron --> */}
        <div className="container pt-3 first-section">
          <div style={{ display: "flex" }}>
            <div>
              <CarouselPage />
            </div>

            <div className="overlay"></div>
            <div>
              <SecondPromote />
            </div>
          </div>
        </div>
      </header>

      <div className="main">
        <div className="main-cat">
          <span>Food</span>
        </div>
        <div className="main-card">
          <div className="pro">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fav"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <img
              className="img-att"
              src={Product}
              alt=""
              height={"200px"}
              width="100%"
            />

            <h4 style={{ fontSize: "20px" }}>Dettol Soap</h4>
            <div className="text-bottom">
              #400
              <button
                className="button"
                style={{ backgroundColor: "#1F43D8", color: "white" }}
              >
                Buy Now
              </button>
            </div>
          </div>

          <div className="pro">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fav"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <img
              className="img-att"
              src={Product}
              alt=""
              height={"200px"}
              width="100%"
            />

            <h4 style={{ fontSize: "20px" }}>Dettol Soap</h4>
            <div className="text-bottom">
              #400
              <button
                className="button"
                style={{ backgroundColor: "#1F43D8", color: "white" }}
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className="pro">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fav"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <img
              className="img-att"
              src={Product}
              alt=""
              height={"200px"}
              width="100%"
            />

            <h4 style={{ fontSize: "20px" }}>Dettol Soap</h4>
            <div className="text-bottom">
              #400
              <button
                className="button"
                style={{ backgroundColor: "#1F43D8", color: "white" }}
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className="pro">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fav"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <img
              className="img-att"
              src={Product}
              alt=""
              height={"200px"}
              width="100%"
            />

            <h4 style={{ fontSize: "20px" }}>Dettol Soap</h4>
            <div className="text-bottom">
              #400
              <button
                className="button"
                style={{ backgroundColor: "#1F43D8", color: "white" }}
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className="pro">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fav"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <img
              className="img-att"
              src={Product}
              alt=""
              height={"200px"}
              width="100%"
            />

            <h4 style={{ fontSize: "20px" }}>Dettol Soap</h4>
            <div className="text-bottom">
              #400
              <button
                className="button"
                style={{ backgroundColor: "#1F43D8", color: "white" }}
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className="pro">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fav"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <img
              className="img-att"
              src={Product}
              alt=""
              height={"200px"}
              width="100%"
            />

            <h4 style={{ fontSize: "20px" }}>Dettol Soap</h4>
            <div className="text-bottom">
              #400
              <button
                className="button"
                style={{ backgroundColor: "#1F43D8", color: "white" }}
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className="pro">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fav"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <img
              className="img-att"
              src={Product}
              alt=""
              height={"200px"}
              width="100%"
            />

            <h4 style={{ fontSize: "20px" }}>Dettol Soap</h4>
            <div className="text-bottom">
              #400
              <button
                className="button"
                style={{ backgroundColor: "#1F43D8", color: "white" }}
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className="pro">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fav"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <img
              className="img-att"
              src={Product}
              alt=""
              height={"200px"}
              width="100%"
            />

            <h4 style={{ fontSize: "20px" }}>Dettol Soap</h4>
            <div className="text-bottom">
              #400
              <button
                className="button"
                style={{ backgroundColor: "#1F43D8", color: "white" }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal />
      <Modalcheckout />
      <footer class="bg-light text-center text-lg-start">
        <div class="text-center p-3 bg-dark text-white row px-5">
          <div className="col">Privacy & Cookies</div>
          <div className="col">
            © 2020 Copyright:{" "}
            <a class="text-white" href="#">
              Bizen Cloud
            </a>
          </div>
          <div className="col">Terms & Condition</div>
        </div>
      </footer>
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
