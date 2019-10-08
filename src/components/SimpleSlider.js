import React, { Component } from "react";
import Slider from "react-slick";
import Banner from "./Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { className } from "postcss-selector-parser";
import { banner } from "../mock";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      accessibility: true,
      autoplaySpeed: 4000,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const { bannerData } = this.props;
    return (
      <div className="ikea-slider">
        <Slider
          {...settings}
          nextArrow={
            <button>
              {" "}
              <svg
                width="12"
                height="18"
                viewBox="0 0 12 18"
                fill="#E5E3E2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.55639 9.00026L0.956391 2.40026L2.84172 0.514929L11.3271 9.00026L2.84172 17.4856L0.95639 15.6003L7.55639 9.00026Z" />
              </svg>
            </button>
          }
          prevArrow={
            <button>
              {" "}
              <svg
                width="12"
                height="18"
                viewBox="0 0 12 18"
                fill="#E5E3E2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.43918 8.99949L11.0392 15.5995L9.15385 17.4848L0.668517 8.99949L9.15385 0.51416L11.0392 2.39949L4.43918 8.99949Z" />
              </svg>
            </button>
          }
        >
          {bannerData}
          {/* {banner.map((item, index) => (
            <div key={index}>
              <Banner data={item}></Banner>
            </div>
          ))} */}
        </Slider>
      </div>
    );
  }
}
