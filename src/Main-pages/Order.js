import React, { useState, useEffect } from "react";
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
  MDBCollapse,
} from "mdb-react-ui-kit";
import CarouselPage from "./Cart";
import Category from "./Category";
import DropdownPage from "../components/dropdown";
import ModalPage from "../components/Modal"
import Modal from "../components/Modal";
import Modalcheckout from "../components/Modalcheckout";
import AddressModal from "../components/AddressModal";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  selectCartItems, selectCartTotal
} from "../redux-store/reducers/cart-reducer/cart.selector";
import { selectCartItemsCount } from "../redux-store/reducers/cart-reducer/cart.selector";
import { ClearItemFromCart, AddItem, RemoveItem } from '../redux-store/reducers/cart-reducer/cart.action';
import { store } from "../redux-store/store";
import AddLocationForm from '../Main-pages/location/AddLocationForm';
import Popup from "../utilities/Popup";
import PickUpStation from "../Main-pages/address/PickUpStation";
import Controls from "../controls/Controls";


export function App({ cus_name, address, cus_number, LoadAddress, itemCount, total, states, pickUpStations }) {
  const [showBasic, setShowBasic] = useState(false);
  const [openPopup, setOpenPopup] = useState(false)
  const [addOpenPopup, setAddOpenPopup] = useState(false)
  useEffect(() => {
    LoadAddress();
    return () => { };
  }, []);


  var is_pick_up = (e) => {
    store.dispatch({ type: "PAY_IS_PICK_UP_STATION", payload: e })
  }

  var is_cash_on_delivery = (e) => {
    store.dispatch({ type: "IS_CASH_ON_DELIVERY", payload: e })
  }
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
                  <a href="">
                    <i class="fas fa-shopping-cart fa-lg"></i>
                    <span class="badge rounded-pill badge-notification bg-danger">
                      12
                    </span>
                  </a>
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
                    <strong>Hi {cus_name ?? 'Anonymous'}</strong>
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
                      <a class="dropdown-item" href="#">
                        View Saved Items
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-mdb-toggle="modal"
                        data-mdb-target="#exampleModal3"
                      >
                        Change Password
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
                <ul class="navbar-nav">
                  <li class="nav-item ">
                    <a class="nav-link active" aria-current="page" href="#">
                      All Categories
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Health and Beauty
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Home and Office
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Phones and Tablets
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Computing
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Electronics
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Fashion
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Gaming
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Others
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <div className="p-4">
              <div class="card w-100 selected-container">
                <div class="card-body">
                  <div
                    className="p-0 m-0 d-flex container-fluid"
                    style={{ position: "relative" }}
                  >
                    <h6 className="text-dark">
                      {" "}
                      <i class="far fa-check-circle text-success"></i>{" "}
                      <strong>Address Details</strong>
                    </h6>
                    <a href="#" data-mdb-toggle="modal"
                      data-mdb-target="#exampleModal3"> <strong>Change</strong></a>
                    <h6
                      className="text-primary"
                      style={{ position: "absolute", right: "2rem", textAlign: 'center' }}
                    >
                      <Popup
                        title="Add Location Form"
                        openPopup={addOpenPopup}
                        setOpenPopup={setAddOpenPopup}
                      >

                        <AddLocationForm />
                      </Popup>

                      <Popup
                        title="Pick up Station"
                        openPopup={openPopup}
                        setOpenPopup={setOpenPopup}
                      >
                        <PickUpStation statesV={states} />
                      </Popup>

                      <Controls.Button
                        text="Add New"
                        variant="outlined"
                        onClick={() => { setAddOpenPopup(true); }}
                      />
                      {" "}
                    </h6>
                  </div>
                  <hr />
                  <h5 class="card-title">{cus_name}</h5>
                  <p class="card-text">
                    {address[0]?.address ?? "No saved Address"}<br />
                    {cus_number}
                  </p>
                </div>
              </div>

              <div class="card w-100 selected-container mt-4">
                <div class="card-body">
                  <div
                    className="p-0 m-0 d-flex container-fluid"
                    style={{ position: "relative" }}
                  >
                    <h6 className="text-dark">
                      {" "}
                      <i class="far fa-check-circle text-success"></i>{" "}
                      <strong>Delivery Method</strong>
                    </h6>
                  </div>
                  <hr />
                  <h6 className="color-grey">
                    {" "}
                    <strong>How do you want your order to be delivered</strong>
                  </h6>
                  {/* <!-- Default radio --> */}
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      onChange={is_pick_up(false)}
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      {" "}
                      <strong>To my Doorstep</strong>
                    </label>
                    <p>
                      {" "}
                      Delivered between wednesday 3 to friday 5 Sep for{" "}
                      <span className="text-primary">N1000</span>
                    </p>
                  </div>
                  <hr />
                  {/* <!-- Default checked radio --> */}
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      onChange={is_pick_up(true)}
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      {" "}
                      <strong>Pickup Station</strong>{" "}
                    </label>
                    <p>
                      {" "}
                      Ready for pickup between wednesday 3 to friday 5 Sep with
                      cheaper shipping fees <br />
                    </p>
                    <a href="#">
                      {" "}
                      <Controls.Button
                        text="Select Pick up Station"
                        variant="outlined"
                        onClick={() => { setOpenPopup(true); }}
                      />{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div class="card w-100 selected-container mt-4">
                <div class="card-body">
                  <div
                    className="p-0 m-0 d-flex container-fluid"
                    style={{ position: "relative" }}
                  >
                    <h6 className="text-dark">
                      {" "}
                      <i class="far fa-check-circle text-success"></i>{" "}
                      <strong>Payment Method</strong>
                    </h6>
                  </div>
                  <hr />
                  <h6 className="color-grey">
                    {" "}
                    <strong>How do you want to make your Payment</strong>
                  </h6>
                  {/* <!-- Default radio --> */}
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault8"
                      onChange={is_cash_on_delivery(true)}
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      {" "}
                      <strong>Cash on Delivery</strong>
                    </label>
                  </div>
                  <hr />
                  {/* <!-- Default checked radio --> */}
                  <div class="form-check">
                  <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault8"
                      onChange={is_cash_on_delivery(false)}
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      {" "}
                      <strong>Credit/Debit Card</strong>{" "}
                    </label>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center pt-4">
                <button
                  type="button"
                  class="btn btn-success"
                  data-mdb-toggle="modal"
                  data-mdb-target="#exampleModal2"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-3 pt-4">
            <div className="bg-white selected-container p-3">
              <h6>
                {" "}
                <strong>ORDER SUMMARY</strong>
              </h6>
              <hr />
              <div
                className="p-0 m-0 d-flex container-fluid"
                style={{ position: "relative" }}
              >
                <h6 className="text-dark">
                  {" "}
                  <strong>Items</strong>
                </h6>
                <h6
                  className="text-primary"
                  style={{ position: "absolute", right: "2rem" }}
                >
                  {" "}
                  <strong>{itemCount} Items</strong>
                </h6>
              </div>

              <div
                className="p-0 m-0 d-flex container-fluid"
                style={{ position: "relative" }}
              >
                <h6 className="text-dark">
                  {" "}
                  <strong>Subtotal</strong>
                </h6>
                <h6
                  className="text-primary"
                  style={{ position: "absolute", right: "2rem" }}
                >
                  {" "}
                  <strong>N {total}</strong>
                </h6>
              </div>

              <div
                className="p-0 m-0 d-flex container-fluid"
                style={{ position: "relative" }}
              >
                <h6 className="text-dark">
                  {" "}
                  <strong>Delivery Fee</strong>
                </h6>
                <h6
                  className="text-primary"
                  style={{ position: "absolute", right: "2rem" }}
                >
                  {" "}
                  <strong> ₦ 400</strong>
                </h6>
              </div>
              <hr />

              <div
                className="p-0 m-0 d-flex container-fluid"
                style={{ position: "relative" }}
              >
                <h6 className="text-dark">
                  {" "}
                  <strong>Total</strong>
                </h6>
                <h6
                  className="text-success"
                  style={{ position: "absolute", right: "2rem" }}
                >
                  {" "}
                  <strong> ₦ {total + 400}</strong>
                </h6>
              </div>
              <div className="d-flex justify-content-center">
                <Link to="./shoppingCart">
                  <button type="button" class="btn btn-primary">
                    Modify Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddressModal address={address} />
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

const mapToDispatchToProps = (dispatch) => ({
  LoadAddress(payload) {
    dispatch({ type: "GET_ADDRESS", payload });
  },
});

function mapStateToProps(state) {
  return {
    total: selectCartTotal(state),
    itemCount: selectCartItemsCount(state),
    pickUpStations: state.cartReducer.pickUpStations,
    cus_name: state.userReducer.cus_name,
    cus_number: state.userReducer.cus_number,
    states: state.utilityReducer.states,
    address: state.utilityReducer.address
  };
}

export default connect(mapStateToProps, mapToDispatchToProps)(App);
