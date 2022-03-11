import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";

const UnFulfilledOrders = () => {
  return (
    <div>
      <Header />{" "}
      <div className="flex space-x-5 px-28 my-10">
        <div className="side_nav h-full w-[30%] p-4 bg-white rounded-2xl flex flex-col">
          <Link to="/profile">
            <div className="flex text-gray-500 px-3 py-2 items-center rounded-lg space-x-2 w-full hover:bg-blue-200 transition duration-500 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                />
              </svg>
              <h5 className="mt-2">My Profile</h5>
            </div>
          </Link>

          <div className="flex text-white items-center rounded-lg transition duration-500 ease-in-out py-2 px-3 bg-gradient-to-r from-blue-500 to-blue-700 space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <h5 className="mt-2">Orders</h5>
          </div>

          <hr className="border border-gray-200 m-0 p-0" />
          <Link to="/savedItems">
            <div className="flex text-gray-500 items-center rounded transition duration-500 ease-in-out py-2 px-3 hover:bg-blue-200 space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
              <h5 className="mt-2">Saved items</h5>
            </div>
          </Link>
          <hr className="border border-gray-200 m-0 p-0" />

          <Link to="/changePassword">
            <div className="flex text-gray-500 items-center rounded-lg py-2 px-3 transition duration-500 ease-in-out hover:bg-blue-200 space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <h5 className="mt-2">Change Password</h5>
            </div>
          </Link>

          <hr className="border border-gray-200 m-0 p-0" />
          <Link to="/logOut">
            <div className="flex text-gray-500 transition duration-500 ease-in-out hover:bg-red-200 items-center space-x-2 rounded-lg py-2 px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <h5 className="mt-2">Log-out</h5>
            </div>
          </Link>
        </div>
        <div className="main_act_page p-3 w-[70%] bg-white rounded-2xl">
          <Link to="/AllOrders">
            <div className="flex space-x-2 items-center hover:underline transition duration-500 ease-in-out">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className="font-semibold">Back to Orders</span>
            </div>
          </Link>
          <hr className="border border-gray-200" />
          <p className="font-semibold">Items in Order</p>
          {/* Order Headings */}
          <div className="grid grid-cols-2 uppercase text-blue-500">
            <div className="">
              <h5>Items</h5>
            </div>
            <div className="flex space-x-2 justify-around">
              <h5>Unit Price</h5>
              <h5>Quantity</h5>
              <h5>Total</h5>
            </div>
          </div>
          {/* End of order Details Headings */}
          {/* Order Details Individual Products */}
          <div className="shadow-md my-2 border-gray-200 border-2 p-3 bg-white rounded-lg grid grid-cols-2">
            <div className="flex space-x-2 items-center">
              <div className="img">
                <img
                  src="https://images.heb.com/is/image/HEBGrocery/001285816"
                  alt="order_img"
                  className="w-32"
                />
              </div>
              <div className="flex flex-col">
                <h5 className="text-blue-500">Dettol Soap</h5>{" "}
                <span>Antisceptic Dettol soap</span>
              </div>
            </div>
            <div className="flex items-center justify-around font-semibold">
              <p>&#8358;300</p>
              <p>5</p>
              <p>&#8358;1500</p>
            </div>
          </div>
          {/* Order - 2 */}
          <div className="shadow-md my-2 border-gray-200 border-2 p-3 bg-white rounded-lg grid grid-cols-2">
            <div className="flex space-x-2 items-center">
              <div className="img">
                <img
                  src="https://images.heb.com/is/image/HEBGrocery/001285816"
                  alt="order_img"
                  className="w-32"
                />
              </div>
              <div className="flex flex-col">
                <h5 className="text-blue-500">Dettol Soap</h5>{" "}
                <span>Antisceptic Dettol soap</span>
              </div>
            </div>
            <div className="flex items-center justify-around font-semibold">
              <p>&#8358;300</p>
              <p>5</p>
              <p>&#8358;1500</p>
            </div>
          </div>
          {/* Order -3  */}
          <div className="shadow-md my-2 border-gray-200 border-2 p-3 bg-white rounded-lg grid grid-cols-2">
            <div className="flex space-x-2 items-center">
              <div className="img">
                <img
                  src="https://images.heb.com/is/image/HEBGrocery/001285816"
                  alt="order_img"
                  className="w-32"
                />
              </div>
              <div className="flex flex-col">
                <h5 className="text-blue-500">Dettol Soap</h5>{" "}
                <span>Antisceptic Dettol soap</span>
              </div>
            </div>
            <div className="flex items-center justify-around font-semibold">
              <p>&#8358;300</p>
              <p>5</p>
              <p>&#8358;1500</p>
            </div>
          </div>
          {/* End of Individual Order details */}
          {/* Round Off of Products */}
          <hr className="border border-gray-200" />
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <h5>
                Order No <span className="text-blue-500">3457GGHBDH3</span>
              </h5>
              <span className="font-semibold">3 item(s)</span>
              <span className="font-semibold">
                placed on <span className="text-blue-500">21-03-2020</span>
              </span>
              <span className="font-semibold">
                Total: <span className="text-blue-500">&#8358;4000</span>
              </span>
            </div>
            <div className="flex space-x-3 justify-end items-center">
              <div className="bg-red-300 text-red-800 font-semibold rounded-lg px-2">
                UnFulfilled Order
              </div>
              <div className="border-2 border-blue-500 hover:bg-blue-500 transition hover:text-white duration-500 ease-in-out text-blue-500 font-semibold rounded-lg px-2">
                Fulfill Order
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnFulfilledOrders;
