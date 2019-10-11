import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as R from "ramda";
import { getTotalBasketCount } from "../selectors";
import Basket from "../icons/Basket";

const HeaderBasket = ({ totalBasketCount }) => {
  return (
    <button
      className="ikea-icon ikea-icon_xl ikea-user-tools__btn"
      // onClick={() => this.setState({ isNotEmpty: !isNotEmpty })}
    >
      <Basket />
      <span
        className={`ikea-user-tools__basket ikea-main-text ikea-text-12 ${totalBasketCount !==
          0 && "ikea-user-tools__basket_visible"}`}
      >
        {totalBasketCount}
      </span>
    </button>
  );
};

const mapStateToProps = state => {
  return {
    totalBasketCount: getTotalBasketCount(state)
  };
};

export default connect(
  mapStateToProps,
  null
)(HeaderBasket);
