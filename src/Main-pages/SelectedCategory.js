import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./header/Header";

const SelectedCategory = ({ items }) => {
  console.log(items, "this are your items ===");
  console.log(items?.[0].basePrice);
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="md:w-[80%] w-[90%] gap-4 md:my-10 flex">
          {/* Filter By Side */}
          <div className="bg-white rounded-2xl w-[30%] h-72 p-3 flex flex-col">
            <div className="w-full flex justify-between">
              <h6 className="uppercase">price(#)</h6>
              <h6 className="text-blue-500 uppercase">apply</h6>
            </div>
            <hr />
            <div className="flex flex-col">
              <hr className="text-2xl border-2 border-blue-500" />
              <div className="grid grid-cols-2 gap-5 justify-around">
                <div className="flex items-center gap-3">
                  <div className="border-2 border-gray-300 rounded-lg">
                    <input
                      type="number"
                      className="w-full h-full font-semibold text-gray-600 p-2"
                      placeholder="100"
                    />
                  </div>
                  <span className="font-semibold">-</span>{" "}
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold">+</span>{" "}
                  <div className="border-2 border-gray-300 rounded-lg">
                    <input
                      type="number"
                      className="w-full h-full font-semibold text-gray-600 p-2"
                      placeholder="5000"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex flex-col">
              <h6 className="uppercase">brand</h6>
              <div className="flex border-2 rounded-lg border-gray-300 w-full p-2 gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>{" "}
                <input
                  type="text"
                  placeholder="Search Product"
                  className="font-semibold w-full focus:outline-none"
                />
              </div>
            </div>
          </div>
          {/* End Filter By Side */}

          {/* Categorized Column with products */}
          <div className="rounded-2xl flex flex-col w-[70%]">
            <div className="bg-gradient-to-r from-blue-700 flex items-center px-7  to-blue-400 rounded-t-2xl text-white h-16">
              <h4 className="font-medium">{items[0].categoryName}</h4>
            </div>
            {/* Main Products Container*/}
            {/* Main Top before products below */}
            <div className="flex bg-white rounded-b-2xl">
              {items?.map((item) => {
                return (
                  <>
                    <div className="p-3">
                      <div className="p-3 flex gap-4 overflow-x-scroll">
                        {/* Product Here */}
                        <div className="md:h-[24rem]">
                          <div className="shadow-md p-3 md:w-[15rem] w-24 h-full">
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
                                  src={item.imageId}
                                  alt="product_img"
                                  className="md:w-[12rem] md:h-[12rem] w-[6rem] h-[6rem] object-contain"
                                  // onClick={() => SetProduct(product)}
                                />
                              </Link>
                            </div>
                            <div className="product_info flex flex-col">
                              <div>
                                <span className="product_name font-bold md:text-xl text-small">
                                  {item.prodcuctName}
                                  {/* Product Name */}
                                </span>{" "}
                                <br />
                                <small className="text-gray-300 text-sm hidden md:flex">
                                  {/* {product.productDescription.substring(0, 20) + "..."} */}
                                  {item.productDescription}
                                </small>
                                {/* Description to show up on small screens */}
                                <small className="text-gray-300 text-sm md:hidden">
                                  {/* {product.productDescription.substring(0, 10) + "..."} */}
                                  {item.prodcuctDescription}
                                </small>
                                {/* End of Description to show on small screens */}
                              </div>
                              <div className="md:grid md:py-2  md:grid-cols-2 flex flex-col">
                                <div>
                                  {" "}
                                  <h3 className="product_price text-gray-700 md:font-semibold md:text-lg text-sm">
                                    &#8358;{item.basePrice}
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
                      </div>
                    </div>
                    ;
                  </>
                );
              })}
            </div>
            ;{/* End of Products Container */}
          </div>
          {/* End Categorized with Products */}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.dashboardReducer.relatedItems,
  };
};
export default connect(mapStateToProps)(SelectedCategory);
