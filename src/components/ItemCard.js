import React, { Component } from "react";
import ReactDOM from "react-dom";
// import { productData } from "../mock";
import Basket from "../icons/Basket";
import Arrow from "../icons/Arrow";
import { Link } from "react-router-dom";

export default class ItemCard extends Component {
  // state = {
  //   isAdd: false
  // };
  render() {
    // const { isAdd } = this.state;
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
      material,
      votes,
      id
    } = this.props.data;
    return (
      <Link to={`/card/${id}`} className="ikea-card">
        <div className="ikea-card__inner">
          <div className="ikea-card__picture">
            <img
              className="ikea-card__img"
              src={`./${img}.png`}
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
            <div className="ikea-card__price">
              <span
                className={`${salePrice === "" &&
                  "ikea-bold-text"} ikea-text-16 ikea-card__full-price ${salePrice !==
                  "" && "ikea-card__full-price_sale ikea-main-text"}`}
              >
                {fullPrice}
              </span>
              {salePrice !== "" && (
                <span className="ikea-bold-text ikea-text-16 ikea-card__sale-price">
                  {salePrice}
                </span>
              )}
            </div>

            <button
              // onMouseEnter={() => this.setState({ isAdd: true })}
              className="ikea-card__btn"
            >
              <span className="ikea-bold-text ikea-text-14 ikea-card__btn-text">
                Add to cart
              </span>
              <span className="ikea-card__arrow">
                <Arrow size="md" />
              </span>
              <span className="ikea-icon ikea-icon_md ikea-card__basket">
                <Basket size="md" />
              </span>
            </button>
          </div>
          {tag !== "" && (
            <span className="ikea-main-text ikea-text-12 ikea-card__sale">
              {tag}
            </span>
          )}
        </div>
      </Link>
    );
  }
}
