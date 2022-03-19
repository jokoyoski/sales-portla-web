import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { connect } from "react-redux";
const Orders = ({ orders, SetOrders, SetOrderDetails, SetOrderValue }) => {
  useEffect(() => {
    var payload = {
      isFulfied: true
    }
    SetOrders(payload);
  }, []);
  return (
    <div>
      <Header />{" "}
      <div className="flex space-x-5 px-28 my-10">
       
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
      text-lg
      leading-tight
      border-x-0 border-t-0 border-b-2 border-transparent font-semibold
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
                onClick={() => {
                  var payload = {
                    isFulfied: true
                  }
                  SetOrders(payload)
                }}
              >
                Fulfilled Orders
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                href="#tabs-profile3"
                class="
      nav-link
      w-full
      block
      text-lg
      leading-tight
      border-x-0 border-t-0 border-b-2 border-transparent font-semibold
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
                onClick={() => {
                  var payload = {
                    isFulfied: false
                  }
                  SetOrders(payload)
                }}
              >
                UnFulfilled Orders
              </a>
            </li>
          </ul>
          <div class="tab-content" id="tabs-tabContent3">
            <div
              class="tab-pane fade show active bg-white"
              id="tabs-home3"
              role="tabpanel"
              aria-labelledby="tabs-home-tab3"
            >
              {
                orders.map((order) => {
                  return <div className="shadow-md my-2 border-gray-200 border-2 p-3 bg-white rounded-lg grid grid-cols-2">
                    <div className="flex flex-col">
                      <div className="flex space-x-2">
                        <div className="bg-gray-300 rounded-lg h-8 w-8 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="white"
                          >
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                          </svg>
                        </div>
                        <div className="flex flex-col">

                          <span>{order.transactionReference}</span>
                        </div>
                      </div>
                      <div className="bg-green-300 my-3 rounded-lg w-1/4 px-2 py-1 text-green-800 font-semibold">
                        Fulfilled
                      </div>
                      <div className="font-semibold">
                        {order.address}
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      {" "}
                      <Link to="./FulfilledOrders">
                        <span className="underline text-blue-500">
                          See More Details
                        </span>
                      </Link>{" "}
                    </div>
                  </div>

                })
              }

            </div>
            <div
              class="tab-pane fade"
              id="tabs-profile3"
              role="tabpanel"
              aria-labelledby="tabs-profile-tab3"
            >
              {
                orders.map((order) => {
                  return <div className="shadow-md my-2 border-gray-200 border-2 p-3 bg-white rounded-lg grid grid-cols-2">
                    <div className="flex flex-col">
                      <div className="flex space-x-2">
                        <div className="bg-gray-300 rounded-lg h-8 w-8 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="white"
                          >
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                          </svg>
                        </div>
                        <div className="flex flex-col">

                          <span>{order.transactionReference}</span>
                        </div>
                      </div>
                      <div className="bg-red-300 my-3 rounded-lg w-1/4 px-2 py-1 text-green-800 font-semibold">
                        UnFulfilled
                      </div>
                      <div className="font-semibold">
                        {order.address}
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      {" "}

                      <span style={{ cursor: 'pointer' }} onClick={() => {
                        var payload = {
                          transactionReference: order.transactionReference
                        }
                        SetOrderValue(order)
                        SetOrderDetails(payload)
                      }} className="underline text-blue-500">
                        See More Details
                      </span>
                    </div>
                  </div>

                })
              }

            </div>
          </div>
          {/* End of Tabbed Container */}
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {

  return {
    orders: state.orderReducer.orders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  SetOrders(payload) {
    dispatch({ type: "LOAD_ORDERS", payload });
  },
  SetOrderDetails(payload) {
    dispatch({ type: "LOAD_ORDER_DETAILS", payload });
  },
  SetOrderValue(payload) {
    dispatch({ type: "SET_ORDER_VALUE", payload });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
