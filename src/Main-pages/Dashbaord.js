import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CarouselPage from "./Cart";
import Modal from "../components/Modal";
import Modalcheckout from "../components/Modalcheckout";
import Header from "./header/Header";
import SecondPromote from "./SidedPromote";
import Footer from "./Footer";
import Products from "./Products/Products";
import { GET_SELECTED_PRODUCT } from "../redux-store/constants/constants";

export function Dashboard({
  products,
  productCategories,
  LoadProducts,
  SetProduct,
  itemCount,
  cartRecords,
}) {
  const [showBasic, setShowBasic] = useState(false);

  useEffect(() => {
    LoadProducts();
  }, []);
  return (
    <div>
      <header className="w-full">
        <div>
          <Header />
        </div>

        {/* Promotion Slides */}
        <div className="flex px-28 space-x-3">
          <CarouselPage />
          <SecondPromote />
        </div>
      </header>

      {/* Products Listings */}
      <Modal />
      <Modalcheckout />

      {/* Products */}
      <div>
        <Products products={products} />
      </div>
      {/*Footer  */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  console.log("Here is your state", state);
  return {
    products: state.dashboardReducer.products,
    productCategories: state.dashboardReducer.categories,
    productDetails: state.productDetailsReducer.productDetails,
    itemCount: state.cartReducerSales.itemCount,
    cartRecords: state.cartReducerSales.cartRecords,
  };
}
const mapDispatchToProps = (dispatch) => ({
  LoadProducts(payload) {
    dispatch({ type: "LOAD_PRODUCT", payload });
  }, 
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
