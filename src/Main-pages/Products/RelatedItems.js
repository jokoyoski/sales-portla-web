import React from "react";
import "./Prodcuts.scss";

const RelatedItems = ({ items }) => {
  if (items == undefined) {
    return "";
  } else {
    return (
      <div>
        {" "}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl  flex flex-col">
          <div className="Category-Name p-3 grid grid-cols-2 text-white">
            <div>
              <h5>Related Items</h5>
            </div>
            <div className="flex justify-end">
              <h5 className="hover:underline transition duration-500 ease-in-out cursor-pointer">
                See all
              </h5>
            </div>
          </div>
          <div className="bg-white overflow-auto p-5 rounded-b-2xl w-full">
            {" "}
            <div className="flex space-x-4">
              {" "}
              {/* Related Item */}
              {items.map((item) => {
                return (
                  <div className="h-[24rem] product-container">
                    {/* Starting div here */}
                    <div className="shadow-md w-[15rem] p-3">
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
                          {/* Onclick of the Love icon Change the fill state to the Color */}
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
                          src={item.imageId}
                          alt="product_img"
                          className="w-56 h-56 object-contain"
                        />
                      </div>
                      <div className="product_info">
                        <div>
                          <span className="product_name font-bold text-xl">
                            {item.productName}
                          </span>{" "}
                          <br />
                          <small className="text-gray-300 text-sm">
                            {item.productDescription.substring(0, 10)}
                          </small>
                        </div>
                        <div className="grid py-2 grid-cols-2">
                          <div>
                            {" "}
                            <h3 className="product_price text-gray-700">
                              &#8358;{item.basePrice}
                            </h3>
                          </div>
                          <div className="flex pb-2 justify-end">
                            <button className="bg-blue-500 px-2 py-1 text-white font-medium hover:bg-blue-700 transition duration-500 ease-in-out rounded-lg">
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Ending div here */}
                  </div>
                );
              })}
              {/* Related Item Ends Here */}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default RelatedItems;
