import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./header/Header";


const SelectedCategory = ({ items }) => {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="md:w-[80%] w-[90%] gap-4 md:my-10 flex">
          {/* Filter By Side */}
          <div className="bg-white rounded-2xl w-[30%]">Price</div>
          {/* End Filter By Side */}

          {/* Categorized Column with products */}
          <div className="rounded-2xl flex flex-col w-[70%]">
            <div className="bg-gradient-to-r from-blue-700 to-blue-400 rounded-t-2xl text-white p-3">
              <h3 className="font-semibold">Soap</h3>
            </div>
            {/* Main Products Container*/}
            {/* Main Top before products below */}
            <div className="flex flex-col">
              <div className="bg-white p-3 flex overflow-x-scroll">
                <div className="md:h-[24rem]">
                  <div className="shadow-md p-3 md:w-[15rem] w-24">
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
                          src="https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/0/1023642-1.jpg"
                          alt="product_img"
                          className="md:w-[12rem] md:h-[12rem] w-[6rem] h-[6rem] object-contain"
                          // onClick={() => SetProduct(product)}
                        />
                      </Link>
                    </div>
                    <div className="product_info flex flex-col">
                      <div>
                        <span className="product_name font-bold md:text-xl text-small">
                          Dettol Soap
                          {/* Product Name */}
                        </span>{" "}
                        <br />
                        <small className="text-gray-300 text-sm hidden md:flex">
                          {/* {product.productDescription.substring(0, 20) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* Description to show up on small screens */}
                        <small className="text-gray-300 text-sm md:hidden">
                          {/* {product.productDescription.substring(0, 10) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* End of Description to show on small screens */}
                      </div>
                      <div className="md:grid md:py-2  md:grid-cols-2 flex flex-col">
                        <div>
                          {" "}
                          <h3 className="product_price text-gray-700 md:font-semibold md:text-lg text-sm">
                            &#8358;350
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
                {/* Product -2  */}
                <div className="md:h-[24rem]">
                  <div className="shadow-md p-3 md:w-[15rem] w-24">
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
                          src="https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/0/1023642-1.jpg"
                          alt="product_img"
                          className="md:w-[12rem] md:h-[12rem] w-[6rem] h-[6rem] object-contain"
                          // onClick={() => SetProduct(product)}
                        />
                      </Link>
                    </div>
                    <div className="product_info flex flex-col">
                      <div>
                        <span className="product_name font-bold md:text-xl text-small">
                          Dettol Soap
                          {/* Product Name */}
                        </span>{" "}
                        <br />
                        <small className="text-gray-300 text-sm hidden md:flex">
                          {/* {product.productDescription.substring(0, 20) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* Description to show up on small screens */}
                        <small className="text-gray-300 text-sm md:hidden">
                          {/* {product.productDescription.substring(0, 10) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* End of Description to show on small screens */}
                      </div>
                      <div className="md:grid md:py-2  md:grid-cols-2 flex flex-col">
                        <div>
                          {" "}
                          <h3 className="product_price text-gray-700 md:font-semibold md:text-lg text-sm">
                            &#8358;350
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
                {/* Product - 3 */}
                <div className="md:h-[24rem]">
                  <div className="shadow-md p-3 md:w-[15rem] w-24">
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
                          src="https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/0/1023642-1.jpg"
                          alt="product_img"
                          className="md:w-[12rem] md:h-[12rem] w-[6rem] h-[6rem] object-contain"
                          // onClick={() => SetProduct(product)}
                        />
                      </Link>
                    </div>
                    <div className="product_info flex flex-col">
                      <div>
                        <span className="product_name font-bold md:text-xl text-small">
                          Dettol Soap
                          {/* Product Name */}
                        </span>{" "}
                        <br />
                        <small className="text-gray-300 text-sm hidden md:flex">
                          {/* {product.productDescription.substring(0, 20) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* Description to show up on small screens */}
                        <small className="text-gray-300 text-sm md:hidden">
                          {/* {product.productDescription.substring(0, 10) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* End of Description to show on small screens */}
                      </div>
                      <div className="md:grid md:py-2  md:grid-cols-2 flex flex-col">
                        <div>
                          {" "}
                          <h3 className="product_price text-gray-700 md:font-semibold md:text-lg text-sm">
                            &#8358;350
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
                {/* Product - 4 */}
                <div className="md:h-[24rem]">
                  <div className="shadow-md p-3 md:w-[15rem] w-24">
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
                          src="https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/0/1023642-1.jpg"
                          alt="product_img"
                          className="md:w-[12rem] md:h-[12rem] w-[6rem] h-[6rem] object-contain"
                          // onClick={() => SetProduct(product)}
                        />
                      </Link>
                    </div>
                    <div className="product_info flex flex-col">
                      <div>
                        <span className="product_name font-bold md:text-xl text-small">
                          Dettol Soap
                          {/* Product Name */}
                        </span>{" "}
                        <br />
                        <small className="text-gray-300 text-sm hidden md:flex">
                          {/* {product.productDescription.substring(0, 20) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* Description to show up on small screens */}
                        <small className="text-gray-300 text-sm md:hidden">
                          {/* {product.productDescription.substring(0, 10) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* End of Description to show on small screens */}
                      </div>
                      <div className="md:grid md:py-2  md:grid-cols-2 flex flex-col">
                        <div>
                          {" "}
                          <h3 className="product_price text-gray-700 md:font-semibold md:text-lg text-sm">
                            &#8358;350
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
              {/* Second Row */}
              <div className="bg-white p-3 flex overflow-x-scroll">
                <div className="md:h-[24rem]">
                  <div className="shadow-md p-3 md:w-[15rem] w-24">
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
                          src="https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/0/1023642-1.jpg"
                          alt="product_img"
                          className="md:w-[12rem] md:h-[12rem] w-[6rem] h-[6rem] object-contain"
                          // onClick={() => SetProduct(product)}
                        />
                      </Link>
                    </div>
                    <div className="product_info flex flex-col">
                      <div>
                        <span className="product_name font-bold md:text-xl text-small">
                          Dettol Soap
                          {/* Product Name */}
                        </span>{" "}
                        <br />
                        <small className="text-gray-300 text-sm hidden md:flex">
                          {/* {product.productDescription.substring(0, 20) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* Description to show up on small screens */}
                        <small className="text-gray-300 text-sm md:hidden">
                          {/* {product.productDescription.substring(0, 10) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* End of Description to show on small screens */}
                      </div>
                      <div className="md:grid md:py-2  md:grid-cols-2 flex flex-col">
                        <div>
                          {" "}
                          <h3 className="product_price text-gray-700 md:font-semibold md:text-lg text-sm">
                            &#8358;350
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
                {/* Product -2  */}
                <div className="md:h-[24rem]">
                  <div className="shadow-md p-3 md:w-[15rem] w-24">
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
                          src="https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/0/1023642-1.jpg"
                          alt="product_img"
                          className="md:w-[12rem] md:h-[12rem] w-[6rem] h-[6rem] object-contain"
                          // onClick={() => SetProduct(product)}
                        />
                      </Link>
                    </div>
                    <div className="product_info flex flex-col">
                      <div>
                        <span className="product_name font-bold md:text-xl text-small">
                          Dettol Soap
                          {/* Product Name */}
                        </span>{" "}
                        <br />
                        <small className="text-gray-300 text-sm hidden md:flex">
                          {/* {product.productDescription.substring(0, 20) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* Description to show up on small screens */}
                        <small className="text-gray-300 text-sm md:hidden">
                          {/* {product.productDescription.substring(0, 10) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* End of Description to show on small screens */}
                      </div>
                      <div className="md:grid md:py-2  md:grid-cols-2 flex flex-col">
                        <div>
                          {" "}
                          <h3 className="product_price text-gray-700 md:font-semibold md:text-lg text-sm">
                            &#8358;350
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
                {/* Product - 3 */}
                <div className="md:h-[24rem]">
                  <div className="shadow-md p-3 md:w-[15rem] w-24">
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
                          src="https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/0/1023642-1.jpg"
                          alt="product_img"
                          className="md:w-[12rem] md:h-[12rem] w-[6rem] h-[6rem] object-contain"
                          // onClick={() => SetProduct(product)}
                        />
                      </Link>
                    </div>
                    <div className="product_info flex flex-col">
                      <div>
                        <span className="product_name font-bold md:text-xl text-small">
                          Dettol Soap
                          {/* Product Name */}
                        </span>{" "}
                        <br />
                        <small className="text-gray-300 text-sm hidden md:flex">
                          {/* {product.productDescription.substring(0, 20) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* Description to show up on small screens */}
                        <small className="text-gray-300 text-sm md:hidden">
                          {/* {product.productDescription.substring(0, 10) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* End of Description to show on small screens */}
                      </div>
                      <div className="md:grid md:py-2  md:grid-cols-2 flex flex-col">
                        <div>
                          {" "}
                          <h3 className="product_price text-gray-700 md:font-semibold md:text-lg text-sm">
                            &#8358;350
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
                {/* Product - 4 */}
                <div className="md:h-[24rem]">
                  <div className="shadow-md p-3 md:w-[15rem] w-24">
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
                          src="https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/0/1023642-1.jpg"
                          alt="product_img"
                          className="md:w-[12rem] md:h-[12rem] w-[6rem] h-[6rem] object-contain"
                          // onClick={() => SetProduct(product)}
                        />
                      </Link>
                    </div>
                    <div className="product_info flex flex-col">
                      <div>
                        <span className="product_name font-bold md:text-xl text-small">
                          Dettol Soap
                          {/* Product Name */}
                        </span>{" "}
                        <br />
                        <small className="text-gray-300 text-sm hidden md:flex">
                          {/* {product.productDescription.substring(0, 20) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* Description to show up on small screens */}
                        <small className="text-gray-300 text-sm md:hidden">
                          {/* {product.productDescription.substring(0, 10) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* End of Description to show on small screens */}
                      </div>
                      <div className="md:grid md:py-2  md:grid-cols-2 flex flex-col">
                        <div>
                          {" "}
                          <h3 className="product_price text-gray-700 md:font-semibold md:text-lg text-sm">
                            &#8358;350
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
              {/* Third Row */}
              <div className="bg-white p-3 flex overflow-x-scroll">
                <div className="md:h-[24rem]">
                  <div className="shadow-md p-3 md:w-[15rem] w-24">
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
                          src="https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/0/1023642-1.jpg"
                          alt="product_img"
                          className="md:w-[12rem] md:h-[12rem] w-[6rem] h-[6rem] object-contain"
                          // onClick={() => SetProduct(product)}
                        />
                      </Link>
                    </div>
                    <div className="product_info flex flex-col">
                      <div>
                        <span className="product_name font-bold md:text-xl text-small">
                          Dettol Soap
                          {/* Product Name */}
                        </span>{" "}
                        <br />
                        <small className="text-gray-300 text-sm hidden md:flex">
                          {/* {product.productDescription.substring(0, 20) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* Description to show up on small screens */}
                        <small className="text-gray-300 text-sm md:hidden">
                          {/* {product.productDescription.substring(0, 10) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* End of Description to show on small screens */}
                      </div>
                      <div className="md:grid md:py-2  md:grid-cols-2 flex flex-col">
                        <div>
                          {" "}
                          <h3 className="product_price text-gray-700 md:font-semibold md:text-lg text-sm">
                            &#8358;350
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
                {/* Product -2  */}
                <div className="md:h-[24rem]">
                  <div className="shadow-md p-3 md:w-[15rem] w-24">
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
                          src="https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/0/1023642-1.jpg"
                          alt="product_img"
                          className="md:w-[12rem] md:h-[12rem] w-[6rem] h-[6rem] object-contain"
                          // onClick={() => SetProduct(product)}
                        />
                      </Link>
                    </div>
                    <div className="product_info flex flex-col">
                      <div>
                        <span className="product_name font-bold md:text-xl text-small">
                          Dettol Soap
                          {/* Product Name */}
                        </span>{" "}
                        <br />
                        <small className="text-gray-300 text-sm hidden md:flex">
                          {/* {product.productDescription.substring(0, 20) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* Description to show up on small screens */}
                        <small className="text-gray-300 text-sm md:hidden">
                          {/* {product.productDescription.substring(0, 10) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* End of Description to show on small screens */}
                      </div>
                      <div className="md:grid md:py-2  md:grid-cols-2 flex flex-col">
                        <div>
                          {" "}
                          <h3 className="product_price text-gray-700 md:font-semibold md:text-lg text-sm">
                            &#8358;350
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
                {/* Product - 3 */}
                <div className="md:h-[24rem]">
                  <div className="shadow-md p-3 md:w-[15rem] w-24">
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
                          src="https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/0/1023642-1.jpg"
                          alt="product_img"
                          className="md:w-[12rem] md:h-[12rem] w-[6rem] h-[6rem] object-contain"
                          // onClick={() => SetProduct(product)}
                        />
                      </Link>
                    </div>
                    <div className="product_info flex flex-col">
                      <div>
                        <span className="product_name font-bold md:text-xl text-small">
                          Dettol Soap
                          {/* Product Name */}
                        </span>{" "}
                        <br />
                        <small className="text-gray-300 text-sm hidden md:flex">
                          {/* {product.productDescription.substring(0, 20) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* Description to show up on small screens */}
                        <small className="text-gray-300 text-sm md:hidden">
                          {/* {product.productDescription.substring(0, 10) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* End of Description to show on small screens */}
                      </div>
                      <div className="md:grid md:py-2  md:grid-cols-2 flex flex-col">
                        <div>
                          {" "}
                          <h3 className="product_price text-gray-700 md:font-semibold md:text-lg text-sm">
                            &#8358;350
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
                {/* Product - 4 */}
                <div className="md:h-[24rem]">
                  <div className="shadow-md p-3 md:w-[15rem] w-24">
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
                          src="https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/0/1023642-1.jpg"
                          alt="product_img"
                          className="md:w-[12rem] md:h-[12rem] w-[6rem] h-[6rem] object-contain"
                          // onClick={() => SetProduct(product)}
                        />
                      </Link>
                    </div>
                    <div className="product_info flex flex-col">
                      <div>
                        <span className="product_name font-bold md:text-xl text-small">
                          Dettol Soap
                          {/* Product Name */}
                        </span>{" "}
                        <br />
                        <small className="text-gray-300 text-sm hidden md:flex">
                          {/* {product.productDescription.substring(0, 20) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* Description to show up on small screens */}
                        <small className="text-gray-300 text-sm md:hidden">
                          {/* {product.productDescription.substring(0, 10) + "..."} */}
                          Antiseptic cool Dettol
                        </small>
                        {/* End of Description to show on small screens */}
                      </div>
                      <div className="md:grid md:py-2  md:grid-cols-2 flex flex-col">
                        <div>
                          {" "}
                          <h3 className="product_price text-gray-700 md:font-semibold md:text-lg text-sm">
                            &#8358;350
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

            {/* End of Products Container */}
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
