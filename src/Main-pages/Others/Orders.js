import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";

const Orders = () => {
  return (
    <div>
      <Header />{" "}
      <div className="flex space-x-5 px-28 my-10">
        <div className="side_nav h-full w-[30%] p-4 bg-white rounded-2xl flex flex-col">
          <div className="flex px-3 py-2 items-center text-white rounded-lg space-x-2 w-full ">
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

          <Link to="/orders">
            <div className="flex text-gray-500 items-center rounded-lg transition duration-500 ease-in-out py-2 px-3 bg-gradient-to-r from-blue-500 to-blue-700 space-x-2">
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
          </Link>

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
          <h5>Account Overview</h5>
          <hr className="border border-gray-200" />

          {/* Tabbed Container */}
          <ul
            class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
            id="tabs-tab3"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <a
                href="#tabs-home3"
                class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    "
                id="tabs-home-tab3"
                data-bs-toggle="pill"
                data-bs-target="#tabs-home3"
                role="tab"
                aria-controls="tabs-home3"
                aria-selected="true"
              >
                Home
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                href="#tabs-profile3"
                class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
                id="tabs-profile-tab3"
                data-bs-toggle="pill"
                data-bs-target="#tabs-profile3"
                role="tab"
                aria-controls="tabs-profile3"
                aria-selected="false"
              >
                Profile
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                href="#tabs-messages3"
                class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
                id="tabs-messages-tab3"
                data-bs-toggle="pill"
                data-bs-target="#tabs-messages3"
                role="tab"
                aria-controls="tabs-messages3"
                aria-selected="false"
              >
                Messages
              </a>
            </li>
          </ul>
          <div class="tab-content" id="tabs-tabContent3">
            <div
              class="tab-pane fade show active"
              id="tabs-home3"
              role="tabpanel"
              aria-labelledby="tabs-home-tab3"
            >
              Tab 1 content button version
            </div>
            <div
              class="tab-pane fade"
              id="tabs-profile3"
              role="tabpanel"
              aria-labelledby="tabs-profile-tab3"
            >
              Tab 2 content button version
            </div>
            <div
              class="tab-pane fade"
              id="tabs-messages3"
              role="tabpanel"
              aria-labelledby="tabs-profile-tab3"
            >
              Tab 3 content button version
            </div>
          </div>
          {/* End of Tabbed Container */}
        </div>
      </div>
    </div>
  );
};

export default Orders;
