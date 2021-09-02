import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
import CarouselPage from "./Cart";
import Category from "./Category"
import Modal from '../components/Modal';
import Modalcheckout from "../components/Modalcheckout";
import { Link } from 'react-router-dom';

export function Dashboard({ products, productCategories, LoadProducts, SetProduct, itemCount,cartRecords}) {
  const [showBasic, setShowBasic] = useState(false);

    useEffect(() => {
       LoadProducts()
    }, [])
  return (
    <div>
      <header>
        <div className="container top-nav pt-3 p-0">
          <MDBNavbar expand="lg" light bgColor="white">
            <MDBContainer fluid>
              <MDBNavbarBrand href="#" className="p-0">
                <img src="./Images/logo2.png" alt="" />
              </MDBNavbarBrand>

              <MDBNavbarToggler
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setShowBasic(!showBasic)}
              >
                <MDBIcon icon="bars" fas />
              </MDBNavbarToggler>
              <MDBCollapse navbar show={showBasic}>
                <form className="d-flex input-group w-auto">
                  <input
                    type="search"
                    className="form-control mt-2"
                    placeholder="Search Item, Brands and filter Names"
                    aria-label="Search"
                    style={{ width: "30rem" }}
                  />
                  <MDBIcon
                    fas
                    icon="search"
                    className="pl-2"
                    style={{ paddingTop: "1.2rem", color: "#bab8b8" }}
                  />
                </form>

                <div className="cart-container pr-3 p-2">
                   <Link to="../shoppingCart">
                    <i class="fas fa-shopping-cart fa-lg"></i>
                    <span class="badge rounded-pill badge-notification bg-danger">
                        {
                            itemCount
                        }
                    </span>
                  </Link>
                </div>

                <div className="profile">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                    class="rounded-circle"
                    height="25"
                    alt=""
                    loading="lazy"
                  />

                  <span className="pl-2 pr-2">
                    <strong>Hi Adeola</strong>
                  </span>
                  <a
                    class="dropdown-toggle align-items-center hidden-arrow d-inline"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  ></a>

                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        My profile
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-mdb-toggle="modal"
                        data-mdb-target="#exampleModal"
                      >
                        Change Password
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-mdb-toggle="modal"
                        data-mdb-target="#exampleModal"
                      >
                        View Saved Items
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>

          <hr />
        </div>

        {/* <!-- Navbar --> */}
        <div className="second-nav">
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
              <div class="collapse navbar-collapse" id="navbarNav">
              </div>
            </div>
          </nav>
        </div>
        {/* <!-- Navbar -->

        <!-- Jumbotron --> */}
        <div className="container pt-3 first-section">
          <div className="row">
            <div class=" w-75 p-0">
              <div className="first-section-slide">
                {/* Add Carousels Here */}
                <CarouselPage />
                {/* End Carousels Here */}
              </div>
            </div>

            <div class="w-25 ">
              <div className="p-3 first-section-still shadow-2-strong">
                <div>
                  <h4>
                    {" "}
                    <strong>Let's Celebrate this Month Season with you</strong>
                  </h4>
                  <p>
                    50% Discount on bottle of wine, <br />{" "}
                    <strong>15 - 30th Aug</strong>
                  </p>
                  <div>
                    <img
                      src="https://www.bottledprices.com/wp-content/uploads/2018/08/hennessy_banner.jpg"
                      alt=""
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Jumbotron --> */}
      </header>

      {/* // The Top Nav */}

      {/* First Section With the Carousels  */}
      <div className="container bg-white down-section-1 pt-3">
        <div
          className="p-0 m-0 d-flex container-fluid"
          style={{ position: "relative" }}
        >
          <h5 className="text-dark">
            {" "}
            <strong>Top Selling Items</strong>
          </h5>
          <h5
            className="text-primary"
            style={{ position: "absolute", right: "2rem" }}
          >
            {" "}
            <Link to="../Allitems">
            <strong>See all items</strong>
            </Link>
          </h5>
        </div>
        <hr />
              <Category setProdctDetails={SetProduct} products={products } />
      </div>

      {/* Second Section With the Carousels  */}
      <div className="container bg-white down-section-2 pt-3">
        <div
          className="p-0 m-0 d-flex container-fluid"
          style={{ position: "relative" }}
        >
          <h5 className="text-dark">
            {" "}
            <strong>Top Selling Items</strong>
          </h5>
          <h5
            className="text-primary"
            style={{ position: "absolute", right: "2rem" }}
          >
            {" "}
            <Link to="../Allitems">
            <strong>See all items</strong>
            </Link>
          </h5>
        </div>
        <hr />
              <Category products={products} />
      </div>

      {/* Third Section With the Carousels  */}
      <div className="container bg-white down-section-3 pt-3">
        <div
          className="p-0 m-0 d-flex container-fluid"
          style={{ position: "relative" }}
        >
          <h5 className="text-dark">
            {" "}
            <strong>Top Selling Items</strong>
          </h5>
          <h5
            className="text-primary"
            style={{ position: "absolute", right: "2rem" }}
          >
            {" "}
            <Link to="../Allitems">
              <strong>See all items</strong>
            </Link>
          </h5>
        </div>
        <hr />
              <Category products={products} />
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
     console.log(state)
    return {
       products:state.dashboardReducer.products,
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
