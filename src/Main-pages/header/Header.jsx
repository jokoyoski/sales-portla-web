import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import SideBar from '../layout/Sidebar';
import { selectCartItemsCount } from "../../redux-store/reducers/cart-reducer/cart.selector";
import "./header.styles.scss";
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

const Header = ({ itemCount }) => {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <div className='main-header'>
            <div className='top'>
                <img src="./Images/logo2.png" alt="" />

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


                <Link to="../shoppingCart">
                    <i class="fas fa-shopping-cart fa-lg"></i>
                    <span class="badge rounded-pill badge-notification bg-danger">
                        {
                            itemCount
                        }
                    </span>
                </Link>

                <a className='name'>
                    Hi David
                </a>
            </div>
            <hr/>
            <div className="categories-container">     
            <div className='bottom font-medium text-blue-500'>
               <a>
                 Food
               </a>
               <a>
                 Textile
               </a>
               <a>
                 Vehicle
               </a>
               <a>
                   Drinks
               </a>
               <a>
                 Road
               </a>
               <a>
                 Gadget
               </a>
               <a>
                 Yoghurt
               </a>
               <a>
                 Laptop
               </a>
               <a>
                 Text
               </a>
               <a>
                 Clothing
               </a>
               <a>
                 Road
               </a>
               <a>
                 Gadget
               </a>
               <a>
                 Yoghurt
               </a>
               <a>
                 Laptop
               </a>
               <a>
                 Text
               </a>
               <a>
                 Clothing
               </a>
            </div>
          </div>
        </div>
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
