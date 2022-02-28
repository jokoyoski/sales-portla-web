import React,{useEffect} from "react";
import { connect } from "react-redux";
import Header from "./header/Header";
import RelatedItems from "./Products/RelatedItems";
import { store } from "../redux-store/store";
import {LOAD_RELATED_ITEMS} from '../redux-store/constants/constants'
const Selected = ({ Selected, LoadRelatedItems, items }) => {
  console.log('This are the main related items', items)
  if (Selected == undefined) {
    history.push("/");
  }
  console.log("Here is the Selected Product", Selected);

   useEffect(() => {
    LoadRelatedItems(Selected.categoryId);
  }, []);
  return (
    <div>
      <Header />

      <div className="body px-28 mt-5">
        <div className="flex space-x-3">
          <div className="rounded-2xl w-[70%] bg-white p-5 space-y-10 flex flex-col">
            <div className="grid grid-cols-2 h-64">
              <div className="p-1 image_container">
                <img
                  src={Selected.imageId}
                  alt="selected_img"
                  className="object-fit-contain h-64"
                />
              </div>
              <div className="p-1">
                <div className="flex space-x-3">
                  {" "}
                  <h2 className="uppercase font-medium text-gray-500">
                    {Selected.productName}
                  </h2>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="orange"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>{" "}
                <p>{Selected.productDescription.substring(0, 10)}</p>
                <hr className="border-gray-200" />
                <div className="flex space-x-2 items-center">
                  <h4 className="text-black">&#8358;{Selected.basePrice}</h4>{" "}
                  <h5 className="line-through text-gray-300 font-medium">
                    {Selected.basePrice}
                  </h5>
                  <div className="rounded-full mb-3 bg-[#ef892338] px-3">
                    {" "}
                    <span className="text-[#EF8923] font-semibold">
                      -25
                    </span>{" "}
                  </div>
                </div>
                <hr className="border-gray-200" />
                <div className="flex flex-space-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill=""
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clip-rule="evenodd"
                    />
                  </svg>{" "}
                  <span>5</span>{" "}
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
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>{" "}
                  <span>5 item(s) added</span>
                </div>
                <hr className="border-gray-200" />
                <button className="px-3 py-2 rounded-lg flex space-x-2 bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="text-white font-semibold">Add to Cart</span>
                </button>
              </div>
            </div>
            <div className="description flex flex-col">
              <h4 className="underline text-blue-500">Description</h4>
              <div className="bg-gray-100 text-gray-400 font-medium rounded-xl p-3">
                <p>{Selected.productDescription}</p>
              </div>
            </div>
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
            </div>
          </div>
        </div>
        {/* Related Products */}
        <div className="py-5">
          <RelatedItems items={items}/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Selected: state.productDetailsReducer.productDetails,
    items: state.dashboardReducer.relatedItems
  };
};

const mapDispatchToProps = (dispatch) => ({
  LoadRelatedItems(payload){
    dispatch({type:LOAD_RELATED_ITEMS, payload})
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Selected);
