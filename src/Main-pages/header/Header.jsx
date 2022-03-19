import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux-store/reducers/cart-reducer/cart.selector";
import "./header.styles.scss";
import { MDBIcon } from "mdb-react-ui-kit";

const Header = ({ itemCount, categories, cus_name }) => {
  console.log("Here are the product Categories", categories);
  const [showBasic, setShowBasic] = useState(false);

  return (
    <div className="main-header px-32 py-4 w-full bg-white shadow-lg">
      <div className="grid grid-cols-3">
        <div className="col-span-2 flex space-x-4 items-center">
          {" "}
          <a href="/">
          <img src="./Images/logo2.png" alt="" />
          </a>
        
          <form className="d-flex input-group w-auto">
            <div className="flex space-x-4 items-center rounded-lg p-3 bg-gray-100">
              <input
                type="search"
                className="border-none w-[30rem] bg-transparent focus:outline-none"
                placeholder="Search and filter items by product name"
                aria-label="Search"
              />
              <MDBIcon fas icon="search" className="pl-1" />
            </div>
          </form>
        </div>
        <div className="grid grid-cols-2 space-x-4 items-center">
          {" "}
          <div>
            <div className="border-r-2 border-gray-300 w-2/5">
              <Link to="/main/cart">
                <i class="fas fa-shopping-cart fa-lg"></i>
                <span class="badge rounded-pill badge-notification bg-danger">
                  {itemCount}
                </span>
              </Link>
            </div>
          </div>
          <div className="flex justify-end">
            <div style={{ position: 'relative' }} className="flex space-x-3 items-center">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="rounded-full h-10 w-10"
                alt="Profile_img"
              />

              <p className="sub-menu-parent">
                <a className="border-b-2 font-semibold border-blue-500">
                  Hi {cus_name}
                </a>
                <div className="sub-menu">
                  <ul>
                    <li>
                      <Link to="/allOrders">My Orders</Link>
                    </li>
                    <li>
                      <Link to="/allOrders">Log Out</Link>
                    </li>
                  </ul>
                </div>

              </p>

            </div>
          </div>
        </div>
      </div>
      <hr />

      {/* Categories Here */}

      <div className="categories-container">
        <div style={{ position: 'relative' }} className="bottom flex space-x-14 font-bold text-gray-500 overflow-scroll">
          {categories.map((item) => {
            return (
              <a className="hover:text-blue-500 hover:underline transition duration-500 ease-in-out">
                {item.name}
              </a>

            );
          })}
        </div>
      </div>
      {/* Categories Ends Here */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemsCount(state),
    cus_name: state.userReducer.cus_name,
    categories: state.dashboardReducer.productCategories,
  };
};

const mapToDispatchToProps = (dispatch) => ({});
//nu

export default connect(mapStateToProps, mapToDispatchToProps)(Header);
