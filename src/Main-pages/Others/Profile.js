import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";

const Profile = () => {
  return (
    <div>
      <Header />{" "}
      <div className="flex space-x-5 px-28 my-10">
        <div className="side_nav h-full w-[30%] p-4 bg-white rounded-2xl flex flex-col">
          <div className="flex px-3 py-2 items-center text-white rounded-lg space-x-2 w-full bg-gradient-to-r from-blue-500 to-blue-700">
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
            <div className="flex text-gray-500 items-center rounded-lg transition duration-500 ease-in-out py-2 px-3 hover:bg-blue-200 space-x-2">
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
          <div className="grid grid-cols-2">
            <div>
              <div className="img_container border-4 relative border-blue-200 rounded-full w-[12.5rem] p-2">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="profile_img"
                  className="w-44 h-44 object-cover rounded-full"
                />
                <div className="bg-blue-300 border-2 rounded-full p-1 bottom-10 right-0 absolute border-white text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="dodgerblue"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Sided */}
            <div className="">
              <div className="flex space-x-3 items-center">
                <div className="bg-blue-200 rounded-full p-3 text-center">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="blue"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </div>
                <h5 className="underline text-blue-700">Edit Profile</h5>
              </div>
            </div>
            {/* End Here */}
          </div>
          <div className="input_grids grid grid-cols-2 gap-4">
            <div>
              {" "}
              <div className="all_inputs flex mt-5 flex-col space-y-3">
                <div>
                  <label
                    htmlFor="#firstName"
                    className="font-semibold text-gray-600"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="p-3 text-gray-700 rounded-lg w-full bg-gray-200"
                    placeholder="David Makanga"
                  />
                </div>
                <div>
                  <label
                    htmlFor="#number"
                    className="font-semibold text-gray-600"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="number"
                    className="p-3 text-gray-700 rounded-lg w-full bg-gray-200"
                    placeholder="+234 704 029 7958"
                  />
                </div>
                <div>
                  <label
                    htmlFor="#dateOfBirth"
                    className="font-semibold text-gray-600"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="text"
                    id="dateOfBirth"
                    className="p-3 text-gray-700 rounded-lg w-full bg-gray-200"
                    placeholder="DD/MM/YYYY"
                  />
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div className="all_inputs flex mt-5 flex-col space-y-3">
                <div>
                  <label
                    htmlFor="#mail"
                    className="font-semibold text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="mail"
                    className="p-3 text-gray-700 rounded-lg w-full bg-gray-200"
                    placeholder="jookoyoski@gmail.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="#gender"
                    className="font-semibold text-gray-600"
                  >
                    Gender
                  </label>
                  <input
                    type="number"
                    id="gender"
                    className="p-3 text-gray-700 rounded-lg w-full bg-gray-200"
                    placeholder="Male"
                  />
                </div>
                <div>
                  <label
                    htmlFor="#userName"
                    className="font-semibold text-gray-600"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="userName"
                    className="p-3 text-gray-700 rounded-lg w-full bg-gray-200"
                    placeholder="@joko"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="address">
            <hr className="border-2 border-gray-200" />
            <div className="flex space-x-5">
              <h6>Addresses(2)</h6>{" "}
              <h6 className="text-blue-500">Add New Address</h6>
            </div>
            <div className="grid grid-cols-2">
              <div className="rounded-xl w-full border-gray-100 p-2">
                {" "}
                <div className="p-3 w-full border-2 rounded-lg border-gray-200">
                  <div className="grid grid-cols-2">
                    <h6 className="text-gray-700">David Makanga</h6>
                    <div className="flex justify-end">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="green"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>{" "}
                  </div>{" "}
                  <hr />
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi suscipit eveniet maiores a ipsam corporis!
                  </h6>
                  <h6 className="text-gray-600">+234 704 342 4672</h6>
                  <hr className="m-0 p-0" />
                  <div className="grid mt-3 grid-cols-2 m-0 p-0">
                    <div>
                      <p>Default Address</p>
                    </div>
                    <div className="flex space-x-2">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="grey"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="red"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>{" "}
              </div>
              {/* Second Column */}
              <div className="rounded-xl w-full border-gray-100 p-2">
                {" "}
                <div className="p-3 w-full border-2 rounded-lg border-gray-200">
                  <div className="grid grid-cols-2">
                    <h6 className="text-gray-700">David Makanga</h6>
                    <div className="flex justify-end">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="green"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>{" "}
                  </div>{" "}
                  <hr />
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi suscipit eveniet maiores a ipsam corporis!
                  </h6>
                  <h6 className="text-gray-600">+234 704 342 4672</h6>
                  <hr className="m-0 p-0" />
                  <div className="grid mt-3 grid-cols-2 m-0 p-0">
                    <div>
                      <p>Default Address</p>
                    </div>
                    <div className="flex space-x-2">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="grey"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="red"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
