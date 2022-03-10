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
import Header from "./header/Header";
import Category from "./Category";
import DropdownPage from "../components/dropdown";
import ModalPage from "../components/Modal"
import Modal from "../components/Modal";
import Modalcheckout from "../components/Modalcheckout";
import AddressModal from "../components/AddressModal";
import { cacNumber, companyId } from "../components/utils/constants";
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


export function App({ cus_name, address, cus_number, cartItems, pay_is_pick_up, AddPayment, LoadAddress, selected_address, itemCount, total, states, pickUpStations }) {
  const [showBasic, setShowBasic] = useState(false);
  const [openPopup, setOpenPopup] = useState(false)
  const [pick_up, setPickUp] = useState(false)
  const [cash, setCash] = useState(0)
  const [addOpenPopup, setAddOpenPopup] = useState(false)

  var _value = false;
  useEffect(() => {
    LoadAddress();
    localStorage.setItem("pick_up", 0)
    return () => { };
  }, []);

  var confirm = () => {
    var payload = {
      pickupStationId: localStorage.getItem("pick_up"),
      selectedAddressId: selected_address.id,
      deliveryMethod: pick_up,
      paymentTypeId: cash,
      accountId: 0,
      cardTypeId: 0,
      cashRecieved: total, //get cash
      customerId: localStorage.getItem("userId2"),
      userId: localStorage.getItem("userId2"),
      discount: 0,
      discountcal: 0,
      sendBy: localStorage.getItem("userId2"),
      companyId: companyId,
      cacNumber: cacNumber,
      referenceNumber: 5555555,
      isOnlineTransaction: true,
      salesOrders: cartItems,

    }
    if (!pick_up && payload.pickupStationId > 0) {
      payload.pickupStationId = 0;
    }
    if (pick_up && payload.pickupStationId == 0) {
      alert("Please select a pick up station")
    } else {
      AddPayment(payload)
    }




  }

  //SelectedAddress(address[0])
  var is_pick_up = (e) => {
    setPickUp(e.target.value)
  }

  var is_cash_on_delivery = (e) => {
    setCash(e.target.value)
  }

  return (
    <div>
      <Header />{" "}
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
                    {selected_address.address ?? "No saved Address"}<br />
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
                    <input type="radio" onChange={is_pick_up} value={false} name="gender" />

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
                    <input type="radio" onChange={is_pick_up} value={true} name="gender" />

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
                    <input type="radio" onChange={is_cash_on_delivery} value={2} name="gender1" />


                    <label class="form-check-label" for="flexRadioDefault1">
                      {" "}
                      <strong>Cash on Delivery</strong>
                    </label>
                  </div>
                  <hr />
                  {/* <!-- Default checked radio --> */}
                  <div class="form-check">
                    <input type="radio" onChange={is_cash_on_delivery} value={1} name="gender1" />
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
                  onClick={confirm}
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
                  <strong>₦{total}</strong>
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

  AddPayment(payload) {
    dispatch({ type: "ADD_PAYMENT", payload });
  },


  SelectedAddress(payload) {
    dispatch({ type: "SELECTED_ADDRESS", payload });
  },


});

function mapStateToProps(state) {
  return {
    total: selectCartTotal(state),
    selected_address: state.utilityReducer.selected_address,
    itemCount: selectCartItemsCount(state),
    pickUpStations: state.userReducer.payPickUpStation,
    cus_name: state.userReducer.cus_name,
    cus_number: state.userReducer.cus_number,
    states: state.utilityReducer.states,
    cartItems: state.cartReducer.cartItems,
    address: state.utilityReducer.address
  };
}

export default connect(mapStateToProps, mapToDispatchToProps)(App);
