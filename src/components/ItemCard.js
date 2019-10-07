import React, { Component } from "react";
import ReactDOM from "react-dom";
import { productData } from "../mock";
import Basket from "../icons/Basket";
import Arrow from "../icons/Arrow";

export default class ItemCard extends Component {
  state = {
    isAdd: false
  };
  render() {
    // console.log({ ...productData });
    const { isAdd } = this.state;
    const {
      img,
      tag,
      title,
      subtitle,
      rate,
      size,
      color,
      status,
      fullPrice,
      salePrice,
      category,
      material
    } = this.props.data;
    return (
      <div className="ikea-card">
        <div className="ikea-card__inner">
          <div className="ikea-card__picture">
            <img
              className="ikea-card__img"
              src={`${img}.png`}
              srcSet={`${img}@2x.png 2x, ${img}@3x.png 3x`}
              alt=""
            />
          </div>

          <div className="ikea-card__content">
            <h2 className="ikea-bold-text ikea-text-16 ikea-card__title">
              {title}
            </h2>
            <span className="ikea-main-text ikea-text-14 ikea-card__subtitle">
              {subtitle}
            </span>
          </div>
          {}
          <div className="ikea-card__tool">
            <span className="ikea-bold-text ikea-text-16 ikea-card__price">
              {fullPrice}
            </span>
            {isAdd === false ? (
              <button
                className="ikea-icon ikea-icon_md ikea-card__basket"
                // onMouseEnter={() => this.setState({ isAdd: true })}
              >
                <Basket size="md" />
              </button>
            ) : (
              <button
                onMouseLeave={() => this.setState({ isAdd: false })}
                className="ikea-bold-text ikea-text-14 ikea-card__btn"
              >
                <span>Add to cart</span>
                <span className="ikea-icon ikea-icon_md ikea-card__arrow">
                  <Arrow />
                </span>
              </button>
            )}
          </div>
          {tag !== "" && (
            <span className="ikea-main-text ikea-text-12 ikea-card__sale">
              {tag}
            </span>
          )}
        </div>
      </div>
    );
  }
}
