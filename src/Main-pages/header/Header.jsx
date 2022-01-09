import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import SideBar from '../layout/Sidebar';
import { selectCartItemsCount } from "../../redux-store/reducers/cart-reducer/cart.selector";
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

const Header = ({itemCount }) => {
    const [showBasic, setShowBasic] = useState(false);

    return (
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
                                        <a class="dropdown-item" href="/account">
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
                                            data-mdb-target="#exampleModal"
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
        </header>

    );
}


const mapStateToProps = (state) => {
    return {
      itemCount: selectCartItemsCount(state)
    };
  };
  
  const mapToDispatchToProps = (dispatch) => ({
   
  })
  //nu
  
  
  
  export default connect(mapStateToProps, mapToDispatchToProps)(Header);
