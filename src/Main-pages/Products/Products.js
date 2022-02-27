import React from "react";
import { connect } from "react-redux";

const Products = ({ products }) => {
  return (
    <div className="px-28 space-y-7 mb-7">
      {" "}
      {/* Product Category and Product listings inside */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl  flex flex-col">
        <div className="Category-Name p-3 grid grid-cols-2 text-white">
          <div>
            <h5>Hot Sales</h5>
          </div>
        </div>
        {/* Products Listings */}
        <div className="bg-white p-5 rounded-b-2xl w-full ">
          {" "}
          <div className="flex overflow-auto gap-4">
            {" "}
            {/* Edit the plrodiuct Here */}
            {products.map((product) => {
              return (
                <div className="h-[24rem] w-1/4">
                  <div className="shadow-md p-3 w-full">
                    {" "}
                    <div className="grid grid-cols-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
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
                        <div className="rounded-full bg-[#ef892338] px-3">
                          {" "}
                          <span className="text-[#EF8923] font-semibold">
                            -25
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="w-full py-2 flex justify-center">
                      <img
                        src={product.imageId}
                        alt="product_img"
                        className="w-56 h-56 object-contain"
                      />
                    </div>
                    <div className="product_info flex flex-col">
                      <div>
                        <span className="product_name font-bold text-xl">
                          {product.productName}
                        </span>{" "}
                        <br />
                        <small className="text-gray-300 text-sm">
                          {product.productDescription.substring(0, 10) + "..."}
                        </small>
                      </div>
                      <div className="grid py-2 grid-cols-2">
                        <div>
                          {" "}
                          <h3 className="product_price text-gray-700">
                            {product.basePrice}
                          </h3>
                        </div>
                        <div className="flex pb-2 justify-end">
                          <button className="bg-blue-500 px-3 py-1 text-white font-semibold hover:bg-blue-700 transition duration-500 ease-in-out rounded-lg">
                            Buy Now
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
        <div className="Category-Name p-3 grid grid-cols-2 text-white">
          <div>
            <h5>Top Sales</h5>
          </div>
        </div>
        <div className="bg-white p-5 rounded-b-2xl w-full">
          {" "}
          <div className="flex overflow-auto space-x-4">
            {/* Image Here *4 */}
            {products.map((product) => {
              return (
                <div className="h-[24rem] w-1/4">
                  <div className="shadow-md p-3 w-full">
                    {" "}
                    <div className="grid grid-cols-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
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
                        <div className="rounded-full bg-[#ef892338] px-3">
                          {" "}
                          <span className="text-[#EF8923] font-semibold">
                            -25
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="w-full py-2 flex justify-center">
                      <img
                        src={product.imageId}
                        alt="product_img"
                        className="w-56 h-56 object-contain"
                      />
                    </div>
                    <div className="product_info flex flex-col">
                      <div>
                        <span className="product_name font-bold text-xl">
                          {product.productName}
                        </span>{" "}
                        <br />
                        <small className="text-gray-300 text-sm">
                          {product.productDescription.substring(0, 10) + "..."}
                        </small>
                      </div>
                      <div className="grid py-2 grid-cols-2">
                        <div>
                          {" "}
                          <h3 className="product_price text-gray-700">
                            {product.basePrice}
                          </h3>
                        </div>
                        <div className="flex pb-2 justify-end">
                          <button className="bg-blue-500 px-3 py-1 text-white font-semibold hover:bg-blue-700 transition duration-500 ease-in-out rounded-lg">
                            Buy Now
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
      </div>
      {/* Third Category */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl  flex flex-col">
        <div className="Category-Name p-3 grid grid-cols-2 text-white">
          <div>
            <h5>Amazing Products</h5>
          </div>
        </div>
        <div className="bg-white p-5 rounded-b-2xl w-full">
          {" "}
          <div className="flex overflow-auto space-x-4">
            {/* Image Here *4 */}
            {products.map((product) => {
              return (
                <div className="h-[24rem] w-1/4">
                  <div className="shadow-md p-3 w-full">
                    {" "}
                    <div className="grid grid-cols-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
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
                        <div className="rounded-full bg-[#ef892338] px-3">
                          {" "}
                          <span className="text-[#EF8923] font-semibold">
                            -25
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="w-full py-2 flex justify-center">
                      <img
                        src={product.imageId}
                        alt="product_img"
                        className="w-56 h-56 object-contain"
                      />
                    </div>
                    <div className="product_info flex flex-col">
                      <div>
                        <span className="product_name font-bold text-xl">
                          {product.productName}
                        </span>{" "}
                        <br />
                        <small className="text-gray-300 text-sm">
                          {product.productDescription.substring(0, 10) + "..."}
                        </small>
                      </div>
                      <div className="grid py-2 grid-cols-2">
                        <div>
                          {" "}
                          <h3 className="product_price text-gray-700">
                            {product.basePrice}
                          </h3>
                        </div>
                        <div className="flex pb-2 justify-end">
                          <button className="bg-blue-500 px-3 py-1 text-white font-semibold hover:bg-blue-700 transition duration-500 ease-in-out rounded-lg">
                            Buy Now
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
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    products: state.dashboardReducer.products,
  };
};

export default connect(mapStateToProps)(Products);
