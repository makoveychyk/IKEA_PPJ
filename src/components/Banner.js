import React, { Component } from "react";
import ReactDOM from "react-dom";
import { banner } from "../mock";

export default class Banner extends Component {
  render() {
    const { position, img, title, subtitle, period, size } = this.props.data;
    return (
      <section className="ikea-banner">
        <div
          className={`ikea-banner__inner ${
            size === "small"
              ? "ikea-banner__inner_sm"
              : size === "medium"
              ? "ikea-banner__inner_md"
              : ""
          }`}
        >
          {position === "left" ? (
            <img src={img} alt="" className="ikea-banner__img" />
          ) : (
            ""
          )}
          <div
            className={`ikea-banner__content ${position === "right" &&
              "ikea-banner__content_margin"}`}
          >
            <h1 className="ikea-title-text ikea-title-30 ikea-banner__title">
              {title}
            </h1>
            <span className="ikea-main-text ikea-title-18 ikea-banner__subtitle">
              {subtitle}
            </span>
            <span className="ikea-main-text ikea-text-14 ikea-banner__period">
              {period}
            </span>
            <button className="ikea-btn ikea-btn_sm ikea-btn_blue ikea-banner__btn">
              <span className="ikea-main-text ikea-text-14">Shop now</span>
              <span className="ikea-icon ikea-icon_md ">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.78117 5.33385L5.20517 1.75785L6.14784 0.815186L11.3332 6.00052L6.14784 11.1859L5.20517 10.2432L8.78117 6.66719H0.666504V5.33385H8.78117Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </div>
          {position === "right" ? (
            <img src={img} alt="" className="ikea-banner__img" />
          ) : (
            ""
          )}
        </div>
      </section>
    );
  }
}
