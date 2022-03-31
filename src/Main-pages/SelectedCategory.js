import React from "react";
import { connect } from "react-redux";
import Header from "./header/Header";

const SelectedCategory = ({ items }) => {
  return (
    <>
      <Header />
      {items.map((item) => {
        console.log("product is on fire", item);
        return <h1>{item.name}hello</h1>;
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.dashboardReducer.relatedItems,
  };
};
export default connect(mapStateToProps)(SelectedCategory);
