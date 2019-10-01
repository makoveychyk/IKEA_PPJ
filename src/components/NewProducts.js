import React, { Component } from "react";
import ReactDOM from "react-dom";
import { newProducts } from "../mock";
export default class NewProducts extends Component {
  render() {
    return (
      <section className="ikea-new-products">
        <div className="ikea-new-products__inner">
          <img
            src={newProducts.img}
            alt=""
            className="ikea-new-products__img"
          />
          <div className="ikea-new-products__content">
            <h1 className="ikea-title-text ikea-title-30 ikea-new-products__title">
              {newProducts.title}
            </h1>
            <p className="ikea-main-text ikea-text-14 ikea-new-products__text">
              {newProducts.text}
            </p>

            <button className="ikea-btn ikea-btn_sm ikea-btn_blue">
              <span className="ikea-main-text ikea-text-14">What’s new?</span>
            </button>
          </div>
        </div>
      </section>
    );
  }
}
