import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Prodcuts.scss";

const Products = ({ products, SetProduct }) => {
  return (
    <div className="md:px-28 sm:px-5 xm:px-3 space-y-7 my-7">
      {" "}
      {/* Product Category and Product listings inside */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl  flex flex-col">
        <div className="Category-Name md:p-3 p-2 grid grid-cols-2 text-white">
          <div>
            <h5 className="md:text-lg  font-semibold text-sm">Hot Sales</h5>
          </div>
        </div>
        {/* Products Listings */}
        <div className="bg-white md:p-5 rounded-b-2xl w-full ">
          {" "}
          <div className="flex overflow-auto product-container gap-4">
            {" "}
            {/* Edit the plrodiuct Here */}
            {products.map((product) => {
              return (
                <div className="md:h-[24rem]">
                  <div className="shadow-md p-3 md:w-[15rem] w-60">
                    {" "}
                    <div className="md:grid md:grid-cols-2  flex justify-around items-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="md:h-6 md:w-6 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#EF8923"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </span>
                      <div className="flex justify-end">
                        <div className="rounded-full bg-[#ef892338]  px-2">
                          {" "}
                          <small className="text-[#EF8923] md:font-semibold md:text-lg text-sm">
                            -25
                          </small>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:py-2 flex justify-center">
                      <Link to="/selected">
                        <img
                          src={product.imageId}
                          alt="product_img"
                          className="md:w-[12rem] md:h-[12rem] w-[6rem] h-[6rem] object-contain"
                          onClick={() => SetProduct(product)}
                        />
                      </Link>
                    </div>
                    <div className="product_info flex flex-col">
                      <div>
                        <span className="product_name font-bold md:text-xl text-small">
                          {product.productName}
                        </span>{" "}
                        <br />
                        <small className="text-gray-300 text-sm hidden md:flex">
                          {product.productDescription.substring(0, 20) + "..."}
                        </small>
                        {/* Description to show up on small screens */}
                        <small className="text-gray-300 text-sm md:hidden">
                          {product.productDescription.substring(0, 10) + "..."}
                        </small>
                        {/* End of Description to show on small screens */}
                      </div>
                      <div className="md:grid md:py-2  md:grid-cols-2 flex flex-col">
                        <div>
                          {" "}
                          <h3 className="product_price text-gray-700 md:font-semibold md:text-lg text-sm">
                            &#8358;{product.basePrice}
                          </h3>
                        </div>
                        <div className="flex pb-2 justify-end">
                          <button className="bg-blue-500 md:px-2 px-1 py-1 text-white md:font-medium md:text-lg text-sm hover:bg-blue-700 transition duration-500 ease-in-out rounded-lg">
                            <small>Buy Now</small>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Sales Category */}
      </div>
      {/* Second Category */}
      <div className="bg-gradient-to-r from-blue-700 to-orange-500 rounded-2xl  flex flex-col">
        <div className="Category-Name md:p-3 p-2 grid grid-cols-2 text-white">
          <div>
            <h5 className="md:text-lg  font-semibold text-sm">
              Trending Sales
            </h5>
          </div>
        </div>
        {/* Products Listings */}
        <div className="bg-white md:p-5 rounded-b-2xl w-full ">
          {" "}
          <div className="flex overflow-auto product-container gap-4">
            {" "}
            {/* Edit the plrodiuct Here */}
            {products.map((product) => {
              return (
                <div className="md:h-[24rem]">
                  <div className="shadow-md p-3 md:w-[15rem] w-60">
                    {" "}
                    <div className="md:grid md:grid-cols-2  flex justify-around items-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="md:h-6 md:w-6 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#EF8923"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </span>
                      <div className="flex justify-end">
                        <div className="rounded-full bg-[#ef892338]  px-2">
                          {" "}
                          <small className="text-[#EF8923] md:font-semibold md:text-lg text-sm">
                            -25
                          </small>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:py-2 flex justify-center">
                      <Link to="/selected">
                        <img
                          src={product.imageId}
                          alt="product_img"
                          className="md:w-[12rem] md:h-[12rem] w-[6rem] h-[6rem] object-contain"
                          onClick={() => SetProduct(product)}
                        />
                      </Link>
                    </div>
                    <div className="product_info flex flex-col">
                      <div>
                        <span className="product_name font-bold md:text-xl text-small">
                          {product.productName}
                        </span>{" "}
                        <br />
                        <small className="text-gray-300 text-sm hidden md:flex">
                          {product.productDescription.substring(0, 20) + "..."}
                        </small>
                        {/* Description to show up on small screens */}
                        <small className="text-gray-300 text-sm md:hidden">
                          {product.productDescription.substring(0, 10) + "..."}
                        </small>
                        {/* End of Description to show on small screens */}
                      </div>
                      <div className="md:grid md:py-2  md:grid-cols-2 flex flex-col">
                        <div>
                          {" "}
                          <h3 className="product_price text-gray-700 md:font-semibold md:text-lg text-sm">
                            &#8358;{product.basePrice}
                          </h3>
                        </div>
                        <div className="flex pb-2 justify-end">
                          <button className="bg-blue-500 md:px-2 px-1 py-1 text-white md:font-medium md:text-lg text-sm hover:bg-blue-700 transition duration-500 ease-in-out rounded-lg">
                            <small>Buy Now</small>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Amazing Deals Sales Category */}
      </div>
      {/* Third Category */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-400 rounded-2xl  flex flex-col">
        <div className="Category-Name md:p-3 p-2 grid grid-cols-2 text-white">
          <div>
            <h5 className="md:text-lg  font-semibold text-sm">Amazind Deals</h5>
          </div>
        </div>
        {/* Products Listings */}
        <div className="bg-white md:p-5 rounded-b-2xl w-full ">
          {" "}
          <div className="flex overflow-auto product-container gap-4">
            {" "}
            {/* Edit the plrodiuct Here */}
            {products.map((product) => {
              return (
                <div className="md:h-[24rem]">
                  <div className="shadow-md p-3 md:w-[15rem] w-60">
                    {" "}
                    <div className="md:grid md:grid-cols-2  flex justify-around items-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="md:h-6 md:w-6 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#EF8923"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </span>
                      <div className="flex justify-end">
                        <div className="rounded-full bg-[#ef892338]  px-2">
                          {" "}
                          <small className="text-[#EF8923] md:font-semibold md:text-lg text-sm">
                            -25
                          </small>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:py-2 flex justify-center">
                      <Link to="/selected">
                        <img
                          src={product.imageId}
                          alt="product_img"
                          className="md:w-[12rem] md:h-[12rem] w-[6rem] h-[6rem] object-contain"
                          onClick={() => SetProduct(product)}
                        />
                      </Link>
                    </div>
                    <div className="product_info flex flex-col">
                      <div>
                        <span className="product_name font-bold md:text-xl text-small">
                          {product.productName}
                        </span>{" "}
                        <br />
                        <small className="text-gray-300 text-sm hidden md:flex">
                          {product.productDescription.substring(0, 20) + "..."}
                        </small>
                        {/* Description to show up on small screens */}
                        <small className="text-gray-300 text-sm md:hidden">
                          {product.productDescription.substring(0, 10) + "..."}
                        </small>
                        {/* End of Description to show on small screens */}
                      </div>
                      <div className="md:grid md:py-2  md:grid-cols-2 flex flex-col">
                        <div>
                          {" "}
                          <h3 className="product_price text-gray-700 md:font-semibold md:text-lg text-sm">
                            &#8358;{product.basePrice}
                          </h3>
                        </div>
                        <div className="flex pb-2 justify-end">
                          <button className="bg-blue-500 md:px-2 px-1 py-1 text-white md:font-medium md:text-lg text-sm hover:bg-blue-700 transition duration-500 ease-in-out rounded-lg">
                            <small>Buy Now</small>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Sales Category */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.dashboardReducer.products,
  };
};

const mapDispatchToProps = (dispatch) => ({
  SetProduct(payload) {
    dispatch({ type: "SET_PRODUCT_DETAILS", payload });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
