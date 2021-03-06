import React from "react";
import Header from "./header/Header";
import RelatedItems from "./Products/RelatedItems";
import { connect } from "react-redux";
import "../styles/cart.scss";
import {
  selectCartItems, selectCartTotal
} from "../redux-store/reducers/cart-reducer/cart.selector";
import { selectCartItemsCount } from "../redux-store/reducers/cart-reducer/cart.selector";
import { ClearItemFromCart, AddItem, RemoveItem } from '../redux-store/reducers/cart-reducer/cart.action';

const MainCart = ({ cartItems, total, clearItem,cus_name }) => {
  return (
    <div>
      <Header />{" "}
      <div className="px-28 ">
        {" "}
        <div className="my-10 flex space-x-5">
          <div className="flex w-[70%] bg-white rounded-2xl flex-col">
            <div className="grid grid-cols-2 p-3 font-black text-white rounded-t-2xl bg-gradient-to-r h-14 from-blue-600 to-orange-700">
              <div className="flex items-center ">
                <h5 className="uppercase">items</h5>
              </div>
              <div className="flex space-x-5 justify-end items-center">
                <h5 className="uppercase">quantity</h5>
                <h5 className="uppercase">unit price</h5>
                <h5 className="uppercase">subtotal</h5>
              </div>
            </div>

            <tbody>
              {cartItems.map((product) => {
                return (
                  <div className="table_content p-3 flex flex-col">
                    <div className="flex ">
                      <div className="flex space-x-4">
                        <div className="cart_img p-2">
                          <img
                            src={product.imageId}
                            alt="cart_img"
                            className="h-56"
                          />
                        </div>
                        <div className="flex flex-col">
                          {" "}
                          <div className="">
                            {" "}
                            <div className="rounded-full w-14 bg-[#ef892338] px-3">
                              {" "}
                              <span className="text-[#EF8923] font-semibold">
                                -25
                              </span>{" "}
                            </div>
                          </div>
                          <h2>{product.productName}</h2>
                          <p>{product.productDescription}</p>
                          <p>{product.quantityToAdd}</p>
                          <div className="flex text-red-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <span style={{ cursor: 'pointer' }} onClick={() =>

                              clearItem(product)
                            } className="font-semibold">Remove Item</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-x-5 flex table-cont">

                        <div className="price">
                          {" "}
                          <div>
                            <h4 className="font-semibold">{product.basePrice}</h4>
                          </div>{" "}
                        </div>
                        <div className="total text-orange-500">
                          {" "}
                          <div>
                            {" "}
                            <h4 className="font-semibold">{product.basePrice * product.quantityToAdd}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="border border-gray-200" />
                  </div>
                );
              })}
            </tbody>
            <h5><strong>N {total}</strong></h5>
          </div>
          <div className="w-[30%] h-full bg-white rounded-2xl  p-4 delivery_info flex flex-col">
            <div className="flex space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
              <h5 className="uppercase">delivery & Return</h5>
            </div>
            <hr className="border border-gray-200" />
            <div className="flex flex-col">
              <h5>1-7 Days Products Available at Pickup location</h5>
              <hr className="border border-gray-200" />
              <h5>7 Days Return Policy</h5>
              <hr className="border border-gray-200" />
              <h5 className="uppercase flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Warranty</span>
              </h5>
              <div>

                {
                  cus_name === 'Anonymous' ? (<a href="/user/login" class="button">Proceed To Check Out</a>) : (<a href="/order" class="button">Proceed To Check Out</a>)
                }


              </div>
              <div style={{ marginTop: '30px' }}>
                <a href="#" class="button">Continue Shopping</a>
              </div>

            </div>
          </div>
          {/* Related Items */}
        </div>
        <RelatedItems />
      </div>
    </div>
  );
};

const mapToDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(ClearItemFromCart(item)), //setting the values
  addItem: (item) => dispatch(AddItem(item)),
  removeItem: (item) => dispatch(RemoveItem(item)),
});

function mapStateToProps(state) {
  return {
    cartItems: selectCartItems(state), // from the selector we pass in the state
    total: selectCartTotal(state),
    itemCount: selectCartItemsCount(state),
    cus_name: state.userReducerSales.cus_name
  };
}

export default connect(mapStateToProps, mapToDispatchToProps)(MainCart);

