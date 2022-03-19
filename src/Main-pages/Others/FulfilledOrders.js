import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { connect } from "react-redux";
const FulfilledOrders = ({ orderDetails, orderValue }) => {
  var getAmount = (order) => {
    var total_amount = 0;
    for (var i = 0; i < order.length; i++) {
      total_amount += order[i].amount * order[i].quantity;
    }
    return total_amount
  }
  return (
    <div>
      <Header />{" "}
      <div className="flex space-x-5 px-28 my-10">

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
          {
            orderDetails.map((orderDetails) => {
              return <div className="shadow-md my-2 border-gray-200 border-2 p-3 bg-white rounded-lg grid grid-cols-2">
                <div className="flex space-x-2 items-center">
                  <div className="img">
                    <img
                      src={orderDetails.imageId}
                      alt="order_img"
                      className="w-32"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-blue-500">{orderDetails.productName}</h5>{" "}
                  </div>


                </div>


                <div className="flex items-center justify-around font-semibold">
                  <p>&#8358;{orderDetails.amount}</p>
                  <p>{orderDetails.quantity}</p>
                  <p>&#8358;{orderDetails.amount * orderDetails.quantity}</p>
                </div>
              </div>
            })
          }


          <hr className="border border-gray-200" />
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <h5>
                Order No <span className="text-blue-500">{orderValue.transactionReference}</span>
              </h5>
              <span className="font-semibold">{orderDetails.length} item(s)</span>
              <span className="font-semibold">
                placed on <span className="text-blue-500">{orderValue.dateCreated}</span>
              </span>
              {
                orderValue.deliveryMethod === "0" ? <h5 className="text-blue-500">Home delivery</h5> : <h5 className="text-blue-500">Pick Up at Store</h5>

              }

              {
                orderValue.deliveryMethod === "0" ? <h5 className="text-blue-500">{orderValue.address}</h5> : ""

              }
              
              <span className="font-semibold">
                Total: <span className="text-blue-500">&#8358;{getAmount(orderDetails)}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  console.log(state)
  return {
    orderDetails: state.orderReducer.orderDetails,
    orderValue: state.orderReducer.orderValue
  };
};

const mapDispatchToProps = (dispatch) => ({
  SetOrderDetails(payload) {
    dispatch({ type: "LOAD_ORDER_DETAILS", payload });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FulfilledOrders);
