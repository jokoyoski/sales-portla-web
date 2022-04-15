import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux-store/reducers/cart-reducer/cart.selector";
import "./header.styles.scss";
import { MDBIcon } from "mdb-react-ui-kit";
import { LOAD_RELATED_ITEMS } from "../../redux-store/constants/constants";

const Header = ({ itemCount, categories, cus_name, LoadCatproducts }) => {
  const [showBasic, setShowBasic] = useState(false);
  const [mobile, setMobile] = useState(false);

  const changeMobile = () => {
    mobile === false ? setMobile(true) : setMobile(false);
  };

  const [switchMobile, setSwitchMobile] = useState(false);

  const removeMenu = () => {
    setSwitchMobile(true);
  };

  return (
    <div className="main-header lg:px-32 md:px-10 px-5 py-4 w-full bg-white shadow-lg">
      <div className="grid md:grid-cols-3 md:gap-5 md:grid-rows-1 grid-rows-2">
        <div className="md:col-span-2  w-full flex space-x-4 items-center">
          <div className="md:col-span-2 w-full flex space-x-4 items-center">
            {" "}
            <Link to="/">
              <img
                src="./Images/logo2.png"
                alt="bizinCloud_logo"
                className=""
              />
            </Link>
            <form className=" input-group">
              <div className="flex space-x-4 w-full items-center rounded-lg p-3 bg-gray-100">
                <input
                  type="search"
                  className="border-none w-full bg-transparent focus:outline-none"
                  placeholder="Search and filter items by product name"
                  aria-label="Search"
                />
                <MDBIcon fas icon="search" className="pl-1" />
              </div>
            </form>
          </div>
        </div>

        {/* Name & Counter Holder */}
        <div className="grid grid-cols-2 space-x-4 items-center">
          {" "}
          <div>
            <div className="border-r-2 border-gray-300 md:w-2/5 w-full">
              <Link to="/main/cart">
                <i class="fas fa-shopping-cart fa-lg"></i>
                <span class="badge rounded-pill badge-notification bg-danger">
                  {itemCount}
                </span>
              </Link>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex space-x-3 items-center">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="rounded-full h-10 w-10"
                alt="Profile_img"
              />
              <a className="border-b-2 font-semibold border-blue-500">
                Hi {cus_name}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End of Name & Counter Holder */}
      <hr />
      {/* Categories Here */}
      {/* Toggler */}
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-500 md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          onClick={() => changeMobile()}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      {/* End Toggler */}

      {/* Mobile Navigation */}
      {mobile ? (
        <div className="mobile-view-container">
          <div className="bottom flex flex-col space-y-4 font-bold text-gray-500 overflow-scroll">
            {categories.map((item) => {
              return (
                <Link to="/SelectedCategory">
                  <a
                    className="hover:text-blue-500 hover:underline transition duration-500 ease-in-out"
                    onClick={() => LoadCatproducts(item.id)}
                  >
                    {item.name}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}

      {/* End Mobile Navigation */}
      <div className="categories-container">
        <div className="bottom md:flex hidden space-x-14 font-bold text-gray-500 overflow-scroll">
          <div className="bottom hidden md:flex space-x-14 font-bold text-gray-500 overflow-scroll">
            {categories.map((item) => {
              return (
                <Link to="/SelectedCategory">
                  <a
                    className="hover:text-blue-500 hover:underline transition duration-500 ease-in-out"
                    onClick={() => LoadCatproducts(item.id)}
                  >
                    {item.name}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        {/* Categories Ends Here */}

        {/* Mobile Navigation */}
        <div className="mobile-container bg-blue-500 hidden">
          <div className="bottom flex flex-col space-y-3 font-bold text-gray-500 overflow-scroll">
            {categories.map((item) => {
              return (
                <Link to="/SelectedCategory">
                  <a
                    className="hover:text-blue-500 hover:underline transition duration-500 ease-in-out"
                    onClick={() => LoadCatproducts(item.id)}
                  >
                    {item.name}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        {/* End of mobile Navigation */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemsCount(state),
    cus_name: state.userReducerSales.cus_name,
    categories: state.dashboardReducer.productCategories,
  };
};

const mapToDispatchToProps = (dispatch) => ({
  LoadCatproducts(payload) {
    dispatch({ type: LOAD_RELATED_ITEMS, payload });
  },
});
//nu

export default connect(mapStateToProps, mapToDispatchToProps)(Header);
