import React, { Component } from "react";
import ReactDOM from "react-dom";
import { productData } from "../mock";
import Star from "../icons/Star";

export default class FullCard extends Component {
  render() {
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
      votes
    } = productData[1];
    // const renderStars = () => {
    //   for (const index = 0; index < 5; index++) {
    //     return (
    //       <span className="ikea-icon ikea-icon_md">
    //         <Star />
    //       </span>
    //     );
    //   }
    // };
    return (
      <>
        <section className="ikea-full-card">
          <div className="container">
            <div className="ikea-full-card__inner">
              <div className="ikea-full-card__picture">
                <img
                  src={`${img}.png`}
                  srcSet={`${img}@2x.png 2x, ${img}@3x.png 3x`}
                  alt=""
                  className="ikea-full-card__img"
                />
              </div>
              <div className="ikea-full-card__content">
                {tag !== "" && (
                  <span className="ikea-main-text ikea-text-12 ikea-card__sale ikea-full-card__sale">
                    {tag}
                  </span>
                )}
                <h2 className="ikea-bold-text ikea-title-24 ikea-full-card__title">
                  {title}
                </h2>
                <span className="ikea-main-text ikea-text-14 ikea-full-card__subtitle">
                  {subtitle}
                </span>
                <div className="ikea-full-card__rating">
                  <div className="ikea-full-card__stars">
                    {/* {renderStars()} */}
                    <span className="ikea-icon ikea-icon_md">
                      <Star />
                    </span>
                    <span className="ikea-icon ikea-icon_md">
                      <Star />
                    </span>
                    <span className="ikea-icon ikea-icon_md">
                      <Star />
                    </span>
                    <span className="ikea-icon ikea-icon_md">
                      <Star />
                    </span>
                    <span className="ikea-icon ikea-icon_md">
                      <Star />
                    </span>
                    <span className="ikea-icon ikea-icon_md">
                      <Star />
                    </span>
                  </div>
                  <span className="ikea-main-text ikea-text-12 ikea-full-card__rate">
                    {rate}
                  </span>
                  <span className="ikea-main-text ikea-text-12 ikea-full-card__vote">
                    {votes}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
