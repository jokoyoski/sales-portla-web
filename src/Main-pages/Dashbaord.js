import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CarouselPage from "./Cart";
import Modal from "../components/Modal";
import Modalcheckout from "../components/Modalcheckout";
import Header from "./header/Header";
import SecondPromote from "./SidedPromote";
import Footer from "./Footer";
import Products from "./Products/Products";
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
        <Products />
      </div>
      {/*Footer  */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    products: state.dashboardReducer.products,
    productDetails: state.productDetailsReducer.productDetails,
    itemCount: state.cartReducer.itemCount,
    cartRecords: state.cartReducer.cartRecords,
  };
}
const mapDispatchToProps = (dispatch) => ({
  LoadProducts(payload) {
    dispatch({ type: "LOAD_PRODUCT", payload });
  },
  SetProduct(payload) {
    dispatch({ type: "SET_PRODUCT_DETAILS", payload });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
