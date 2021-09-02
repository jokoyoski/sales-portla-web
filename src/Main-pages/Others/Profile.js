import React, { useState } from "react";
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
import { InputPage, Input2, Input3, Input4, Input5} from "../../components/input"
import Modal from "../../components/Modal";
import Modalcheckout from "../../components/Modalcheckout";
import { Link } from "react-router-dom";


export default function App() {
  const [showBasic, setShowBasic] = useState(false);

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
                      <Link to="../dashboard">
                      <a class="dropdown-item" href="#">
                        Logout
                      </a>
                      </Link>
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
          <div className="col-sm-3">
            <div className="bg-white selected-container mt-3 mb-3">

            {/* New Nav Stays Here */}

              <div
                class="nav flex-column nav-tabs nav-container"
                id="v-tabs-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  class="nav-link active"
                  id="v-tabs-home-tab"
                  data-mdb-toggle="tab"
                  href="#v-tabs-profile"
                  role="tab"
                  aria-controls="v-tabs-home"
                  aria-selected="true"
                > <i class="fas fa-user-alt pr-2"></i> My Profile</a
                >
                <a
                  class="nav-link"
                  id="v-tabs-profile-tab"
                  data-mdb-toggle="tab"
                  href="#v-tabs-profile"
                  role="tab"
                  aria-controls="v-tabs-profile"
                  aria-selected="false"
                > <i class="fas fa-cart-arrow-down pr-2"></i>Orders</a
                >
                <a
                  class="nav-link"
                  id="v-tabs-messages-tab"
                  data-mdb-toggle="tab"
                  href="#v-tabs-messages"
                  role="tab"
                  aria-controls="v-tabs-messages"
                  aria-selected="false"
                > <i class="fas fa-cloud pr-2"></i> Saved Items</a>
                <a
                  class="nav-link"
                  id="v-tabs-password-tab"
                  data-mdb-toggle="tab"
                  href="#v-tabs-password"
                  role="tab"
                  aria-controls="v-tabs-password"
                  aria-selected="false"
                >  <i class="fas fa-lock pr-2"></i> Change Password</a>
                <a
                  class="nav-link"
                  id="v-tabs-messages-tab"
                  data-mdb-toggle="tab"
                  href="#v-tabs-messages"
                  role="tab"
                  aria-controls="v-tabs-messages"
                  aria-selected="false"
                > <i class="fas fa-sign-out-alt pr-2 text-danger"></i> Logout</a>
              </div>
            {/*The nev Ends Here  */}
            </div>
          </div>

          <div className="col-sm-9">
              <div className="p-3 selected-container mt-3 mb-3">
              

              {/* The Tab ends here */}
              <div class="tab-content" id="v-tabs-tabContent">
                <div
                  class="tab-pane fade show active main-profile p-3 bg-white"
                  id="v-tabs-home"
                  role="tabpanel"
                  aria-labelledby="v-tabs-home-tab"
                  style={{background:"none"}}
                >
                  <div className="heading pb-3">
                    <h6> <strong> Account Overview </strong></h6>
                    <hr />
                    <h6> <strong> <span className="color-grey"> PROFILE INFORMATION | </span><span> <a href="#"> Edit Profile</a></span> </strong></h6>
                  </div>
                  <div className="profile-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdC6dhrkTT1HuyDjkqgMdJmHeSrnfd47VUmEu7mNx6z3I-ro0RMNc_8jQ4nwbx3dqd_-U&usqp=CAU" alt="Avatar" width="20%" className="profile-img-1"/>
                  </div>

                  <div className="row pt-3">
                    <div className="col">
                      <InputPage />
                      <Input3 />
                      <Input5 />
                    </div>
                    <div className="col">
                      <Input2 />
                      <Input4 />
                    </div>
                  </div>

                  <hr />

                  <div className="address-container">
                    <span className="color-grey"> <strong> Address | </strong></span> <span> <a href="#" className="text-primary"> <strong> Add New Addres </strong></a></span>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div class="card mt-3" style={{ boxShadow: "none", border:"2px solid rgb(221, 220, 220)", borderRadius:"7px"}}>
                        <div class="card-body"> 
                          <h5 class="card-title">Adeola Oladeinde</h5>
                          <p class="card-text">
                            Address here Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Pariatur atque quam perferendis,
                            reiciendis animi sapiente. <br />
                            +234 3773 37373737
                          </p>
                          <hr />
                          <div>
                            Default Address <span className="float-right"><i class="far fa-edit pr-3"></i> <i class="fas fa-trash text-danger"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div class="card mt-3" style={{ boxShadow: "none", border: "2px solid rgb(221, 220, 220)", borderRadius: "7px" }}>
                        <div class="card-body">
                          <h5 class="card-title">Adeola Oladeinde</h5>
                          <p class="card-text">
                            Address here Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Pariatur atque quam perferendis,
                            reiciendis animi sapiente. <br />
                            +234 3773 37373737
                          </p>
                          <hr />
                          <div>
                            Default Address <span className="float-right"><i class="far fa-edit pr-3"></i> <i class="fas fa-trash text-danger"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade bg-white"
                  id="v-tabs-profile"
                  role="tabpanel"
                  aria-labelledby="v-tabs-profile-tab"
                >
                  <hr />

                  {/* Content Nav Stays here */}
                  <ul class="nav nav-tabs mb-4" id="myTab0" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active nav-link-tab"
                        id="home-tab0"
                        data-mdb-toggle="tab"
                        data-mdb-target="#home0"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        OPEN ORDERS
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link nav-link-tab"
                        id="profile-tab0"
                        data-mdb-toggle="tab"
                        data-mdb-target="#profile0"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                       
                      >
                        <span className="color-grey">CLOSED ORDERS</span>
                      </button>
                    </li>
                  </ul>
                {/* Nav ends Here */}
                {/* Content */}
                  <div class="tab-content m-3 bg-white" id="myTabContent0">

                    <div
                      class="tab-pane fade show active p-3"
                      id="home0"
                      role="tabpanel"
                      aria-labelledby="home-tab0"
                      style={{ background: "rgb(243, 243, 243)", borderRadius: "7px" }}
                    >
                      <h5> <strong>Order 1</strong></h5>
                      <p>Order 388444746</p>
                      <span className="float-right text-primary"> <a href="#"> <strong> See More Details</strong></a></span>
                      <span className="text-success p-2">  <i class="fas fa-cart-arrow-down pr-2"></i> Delivered</span>
                      {" "}
                    </div>

                    <div
                      class="tab-pane fade show active p-3 mt-3"
                      id="home0"
                      role="tabpanel"
                      aria-labelledby="home-tab0"
                      style={{ background: "rgb(243, 243, 243)", borderRadius:"7px" }}
                    >
                      <h5> <strong>Order 1</strong></h5>
                      <p>Order 388444746</p>
                      <span className="float-right text-primary"> <a href="#"> <strong> See More Details</strong></a></span>
                      <span className="text-success p-2">  <i class="fas fa-cart-arrow-down pr-2"></i> Delivered</span>
                      {" "}
                    </div>


                    <div
                      class="tab-pane fade p-3 mt-4"
                      id="profile0"
                      role="tabpanel"
                      aria-labelledby="profile-tab0"
                    >
                    
                      <div
                        class="tab-pane fade show active p-3 mt-3"
                        id="profile0"
                        role="tabpanel"
                        aria-labelledby="home-tab0"
                        style={{ background: "rgb(243, 243, 243)", borderRadius: "7px" }}
                      >
                        <h5> <strong>Order 1</strong></h5>
                        <p>Order 388444746</p>
                        <span className="float-right text-primary"> <a href="#"> <strong> See More Details</strong></a></span>
                        <span className="text-danger p-2">  <i class="fas fa-times-circle pr-2"></i> <strike>Payment Canceled</strike></span>
                        {" "}
                      </div>

                      <div
                        class="tab-pane fade show active p-3 mt-3"
                        id="profile0"
                        role="tabpanel"
                        aria-labelledby="home-tab0"
                        style={{ background: "rgb(243, 243, 243)", borderRadius: "7px" }}
                      >
                        <h5> <strong>Order 1</strong></h5>
                        <p>Order 388444746</p>
                        <span className="float-right text-primary"> <a href="#"> <strong> See More Details</strong></a></span>
                        <span className="text-danger p-2">  <i class="fas fa-times-circle text-danger pr-2"></i> <strike>Payment Cancelled</strike></span>
                        {" "}
                      </div>

                    </div>
                  </div>
                {/* Content Ends Here */}
                </div>
                <div
                  class="tab-pane fade bg-white" 
                  id="v-tabs-messages"
                  role="tabpanel"
                  aria-labelledby="v-tabs-messages-tab"
                >
                  <h5> <strong>Saved Items</strong></h5>
                  <hr />
                  
                  {/* Saved items Container */}
                  <div class="row">
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0469/4533/products/Black-Balls_085_no-highlight_1024x1024.png?v=1501521533"
                            class="img-fluid"
                            alt=""
                          />
                        </div>
                        <div class="thumb-content">
                          <h4>Apple iPad</h4>
                          <p class="item-price">
                            <strike>$400.00</strike> <span>$369.00</span>
                          </p>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0469/4533/products/Black-Balls_085_no-highlight_1024x1024.png?v=1501521533"
                            class="img-fluid"
                            alt=""
                          />
                        </div>
                        <div class="thumb-content">
                          <h4>Sony Headphone</h4>
                          <p class="item-price">
                            <strike>$25.00</strike> <span>$23.99</span>
                          </p>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img
                            src="https://www.drinks.ng/wp-content/uploads/2021/02/61ea6bb31c408e285458395c063656206ce212cf.jpg"
                            class="img-fluid"
                            alt=""
                          />
                        </div>
                        <div class="thumb-content">
                          <h4>Macbook Air</h4>
                          <p class="item-price">
                            <strike>$899.00</strike> <span>$649.00</span>
                          </p>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img
                            src="https://shopazodatacube.s3.eu-central-1.amazonaws.com/content/media/20200920092809/ezgif.com-webp-to-jpg2028129.jpg"
                            class="img-fluid"
                            alt=""
                          />
                        </div>
                        <div class="thumb-content">
                          <h4>Nikon DSLR</h4>
                          <p class="item-price">
                            <strike>$315.00</strike> <span>$250.00</span>
                          </p>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0469/4533/products/Black-Balls_085_no-highlight_1024x1024.png?v=1501521533"
                            class="img-fluid"
                            alt=""
                          />
                        </div>
                        <div class="thumb-content">
                          <h4>Apple iPad</h4>
                          <p class="item-price">
                            <strike>$400.00</strike> <span>$369.00</span>
                          </p>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0469/4533/products/Black-Balls_085_no-highlight_1024x1024.png?v=1501521533"
                            class="img-fluid"
                            alt=""
                          />
                        </div>
                        <div class="thumb-content">
                          <h4>Sony Headphone</h4>
                          <p class="item-price">
                            <strike>$25.00</strike> <span>$23.99</span>
                          </p>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img
                            src="https://www.drinks.ng/wp-content/uploads/2021/02/61ea6bb31c408e285458395c063656206ce212cf.jpg"
                            class="img-fluid"
                            alt=""
                          />
                        </div>
                        <div class="thumb-content">
                          <h4>Macbook Air</h4>
                          <p class="item-price">
                            <strike>$899.00</strike> <span>$649.00</span>
                          </p>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img
                            src="https://shopazodatacube.s3.eu-central-1.amazonaws.com/content/media/20200920092809/ezgif.com-webp-to-jpg2028129.jpg"
                            class="img-fluid"
                            alt=""
                          />
                        </div>
                        <div class="thumb-content">
                          <h4>Nikon DSLR</h4>
                          <p class="item-price">
                            <strike>$315.00</strike> <span>$250.00</span>
                          </p>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0469/4533/products/Black-Balls_085_no-highlight_1024x1024.png?v=1501521533"
                            class="img-fluid"
                            alt=""
                          />
                        </div>
                        <div class="thumb-content">
                          <h4>Apple iPad</h4>
                          <p class="item-price">
                            <strike>$400.00</strike> <span>$369.00</span>
                          </p>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0469/4533/products/Black-Balls_085_no-highlight_1024x1024.png?v=1501521533"
                            class="img-fluid"
                            alt=""
                          />
                        </div>
                        <div class="thumb-content">
                          <h4>Sony Headphone</h4>
                          <p class="item-price">
                            <strike>$25.00</strike> <span>$23.99</span>
                          </p>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img
                            src="https://www.drinks.ng/wp-content/uploads/2021/02/61ea6bb31c408e285458395c063656206ce212cf.jpg"
                            class="img-fluid"
                            alt=""
                          />
                        </div>
                        <div class="thumb-content">
                          <h4>Macbook Air</h4>
                          <p class="item-price">
                            <strike>$899.00</strike> <span>$649.00</span>
                          </p>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img
                            src="https://shopazodatacube.s3.eu-central-1.amazonaws.com/content/media/20200920092809/ezgif.com-webp-to-jpg2028129.jpg"
                            class="img-fluid"
                            alt=""
                          />
                        </div>
                        <div class="thumb-content">
                          <h4>Nikon DSLR</h4>
                          <p class="item-price">
                            <strike>$315.00</strike> <span>$250.00</span>
                          </p>

                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End of saved items Container */}
                </div>
              </div>
              {/* The Ui ends here */}

            </div>
          </div>
        </div>
      </div>
      {/* Called the components */}

      {/* Change Password Snippets */}


      <div className="components">
        <Modal />
        <Modalcheckout />
      </div>

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
{/* // The Nav Head Goes here */}
