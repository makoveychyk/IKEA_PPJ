import React, { Component } from "react";
import ReactDOM from "react-dom";
// import { productData } from "../mock";
import Star from "../icons/Star";
import Check from "../icons/Check";
import Success from "../icons/Success";
import Wrong from "../icons/Wrong";
import Basket from "../icons/Basket";
import WishOutline from "../icons/WishOutline";
import { connect } from "react-redux";
import { fetchGoodById } from "../actions/index";
import { getGoodsById } from "../selectors";
import ScrollToTopOnMount from "./ScrollToTopOnMount";

class ExpandedCard extends Component {
  componentDidMount() {
    this.props.fetchGoodById(this.props.match.params.id);
  }
  // state = {
  //   isAvtive: true
  // };
  render() {
    this.props.good && console.log(this.props.good.id);
    const { good } = this.props;
    // const {
    //   img,
    //   tag,
    //   title,
    //   subtitle,
    //   rate,
    //   size,
    //   color,
    //   status,
    //   fullPrice,
    //   salePrice,
    //   category,
    //   material,
    //   votes,
    //   id
    // } = productData[0];
    // const { isAvtive } = this.state;
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
        <ScrollToTopOnMount></ScrollToTopOnMount>
        {good && (
          <section className="ikea-exp-card">
            <div className="container">
              <div className="ikea-exp-card__inner">
                <div className="ikea-exp-card__picture">
                  <img
                    src={`${good.img}.png`}
                    srcSet={`${good.img}@2x.png 2x, ${good.img}@3x.png 3x`}
                    alt=""
                    className="ikea-exp-card__img"
                  />
                </div>
                <div className="ikea-exp-card__content">
                  {good.tag !== "" && (
                    <span className="ikea-main-text ikea-text-12 ikea-card__sale ikea-exp-card__sale">
                      {good.tag}
                    </span>
                  )}
                  <h2 className="ikea-bold-text ikea-title-24 ikea-exp-card__title">
                    {good.title}
                  </h2>
                  <span className="ikea-main-text ikea-text-14 ikea-exp-card__subtitle">
                    {good.subtitle}
                  </span>
                  <div className="ikea-exp-card__rating">
                    <div className="ikea-exp-card__stars">
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

                    <span className="ikea-main-text ikea-text-12 ikea-exp-card__rate">
                      {good.rate}
                    </span>
                    <span className="ikea-main-text ikea-text-12 ikea-exp-card__vote">
                      {good.votes}
                    </span>
                  </div>
                  <div className="ikea-exp-card__size-editor">
                    {good.size.map((item, id) => {
                      return (
                        <>
                          <input
                            type="radio"
                            name="size"
                            id={id}
                            defaultChecked
                            className="ikea-exp-card__size-radio"
                          />
                          <label
                            htmlFor={id}
                            className="ikea-medium-text ikea-text-14 ikea-exp-card__size"
                          >
                            {item}
                          </label>
                        </>
                      );
                    })}
                  </div>

                  <div className="ikea-exp-card__color-editor">
                    <span className="ikea-medium-text ikea-text-14">Color</span>
                    <input
                      type="radio"
                      name="color"
                      id="one"
                      className="ikea-exp-card__color-radio"
                      checked
                    />
                    <label
                      htmlFor="one"
                      className="ikea-exp-card__color"
                      style={{ backgroundColor: good.color[0] }}
                    >
                      <span className="ikea-icon ikea-icon_md">
                        <Check />
                      </span>
                    </label>
                    <input
                      type="radio"
                      name="color"
                      id="two"
                      className="ikea-exp-card__color-radio"
                    />
                    <label
                      htmlFor="two"
                      className="ikea-exp-card__color"
                      style={{ backgroundColor: good.color[1] }}
                    >
                      <span className="ikea-icon ikea-icon_md">
                        <Check />
                      </span>
                    </label>
                  </div>
                  <div className="ikea-exp-card__info">
                    <span className="ikea-icon ikea-icon_sm">
                      {good.status !== false ? <Success /> : <Wrong />}
                    </span>
                    {good.status !== false ? (
                      <span className="ikea-medium-text ikea-text-12 ikea-exp-card__status">
                        Available for order
                      </span>
                    ) : (
                      <span className="ikea-medium-text ikea-text-12 ikea-exp-card__status ikea-exp-card__status_wrong">
                        Not available
                      </span>
                    )}
                  </div>
                  <div className="ikea-exp-card__price">
                    <span
                      className={`${good.salePrice === "" &&
                        "ikea-bold-text ikea-title-24"}  ikea-exp-card__full-price ${good.salePrice !==
                        "" &&
                        "ikea-exp-card__full-price_sale ikea-main-text ikea-text-14"}`}
                    >
                      {good.fullPrice}
                    </span>
                    {good.salePrice !== "" && (
                      <span className="ikea-bold-text ikea-title-24 ikea-exp-card__sale-price">
                        {good.salePrice}
                      </span>
                    )}
                  </div>
                  <div className="ikea-exp-card__add">
                    <button
                      className={`ikea-btn ikea-btn_md ikea-btn_yellow ikea-exp-card__btn ikea-medium-text ikea-text-14 ${good.status ===
                        false && "ikea-exp-card__btn_disabled"}`}
                    >
                      <span className="ikea-icon ikea-icon_md ikea-exp-card__basket">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.80331 10.5348H13.6193C14.619 10.5348 15.4345 9.71928 15.4345 8.71963V5.01039C15.4345 5.0071 15.4345 5.00052 15.4345 4.99724C15.4345 4.98737 15.4345 4.98079 15.4345 4.97093C15.4345 4.96435 15.4345 4.95778 15.4312 4.9512C15.4312 4.94462 15.4279 4.93476 15.4279 4.92818C15.4279 4.9216 15.4246 4.91503 15.4246 4.90845C15.4213 4.90187 15.4213 4.8953 15.418 4.88543C15.4148 4.87886 15.4148 4.87228 15.4115 4.8657C15.4082 4.85913 15.4082 4.85255 15.4049 4.84597C15.4016 4.8394 15.3983 4.83282 15.395 4.82295C15.3917 4.81638 15.3884 4.8098 15.3852 4.80651C15.3819 4.79994 15.3786 4.79336 15.3753 4.78678C15.372 4.78021 15.3687 4.77692 15.3654 4.77034C15.3621 4.76376 15.3556 4.75719 15.3523 4.75061C15.349 4.74403 15.3457 4.74075 15.3391 4.73417C15.3358 4.72759 15.3293 4.7243 15.326 4.71773C15.3227 4.71115 15.3161 4.70786 15.3128 4.70129C15.3095 4.69471 15.3029 4.69142 15.2997 4.68813C15.2931 4.68156 15.2898 4.67827 15.2832 4.67169C15.2766 4.6684 15.2734 4.66183 15.2668 4.65854C15.2602 4.65525 15.2536 4.64867 15.247 4.64538C15.2405 4.6421 15.2372 4.63881 15.2306 4.63552C15.224 4.63223 15.2175 4.62894 15.2109 4.62237C15.2043 4.61908 15.1977 4.61579 15.1911 4.6125C15.1846 4.60921 15.178 4.60592 15.1714 4.60264C15.1648 4.59935 15.1583 4.59606 15.1517 4.59277C15.1451 4.58948 15.1385 4.58948 15.132 4.58619C15.1254 4.58291 15.1155 4.57962 15.1089 4.57962C15.1024 4.57962 15.0958 4.57633 15.0925 4.57633C15.0826 4.57304 15.0761 4.57304 15.0662 4.57304C15.0629 4.57304 15.0596 4.56975 15.053 4.56975L3.87928 3.02753V1.46886C3.87928 1.45241 3.87928 1.43597 3.876 1.42282C3.876 1.41953 3.876 1.41624 3.87271 1.40967C3.87271 1.3998 3.86942 1.38994 3.86942 1.38007C3.86613 1.37021 3.86613 1.36363 3.86284 1.35376C3.86284 1.34719 3.85955 1.3439 3.85955 1.33732C3.85627 1.32746 3.85298 1.31759 3.84969 1.30773C3.84969 1.30444 3.8464 1.29786 3.8464 1.29457C3.84311 1.28471 3.83982 1.27813 3.83325 1.26827C3.82996 1.26498 3.82996 1.2584 3.82667 1.25511C3.82338 1.24854 3.82009 1.24196 3.81352 1.23538C3.81023 1.22881 3.80694 1.22552 3.80365 1.21894C3.80036 1.21237 3.79708 1.20908 3.79379 1.2025C3.7905 1.19592 3.78392 1.18935 3.78063 1.18277C3.77735 1.17948 3.77406 1.17619 3.77077 1.17291C3.76419 1.16633 3.75762 1.15975 3.75104 1.15318C3.74775 1.14989 3.74446 1.1466 3.74117 1.14331C3.7346 1.13673 3.72802 1.13016 3.71816 1.12358C3.71487 1.12029 3.70829 1.117 3.705 1.11372C3.69843 1.10714 3.69185 1.10385 3.68527 1.09727C3.67541 1.0907 3.66554 1.08412 3.65897 1.08083C3.65568 1.07754 3.65239 1.07754 3.6491 1.07426C3.63595 1.06768 3.61951 1.0611 3.60635 1.05453L1.18285 0.035144C0.955958 -0.0602176 0.696179 0.045009 0.600818 0.271904C0.505456 0.498799 0.610683 0.758577 0.837578 0.853938L2.98815 1.76152V3.77398V4.09294V6.53946V8.7262V11.4884C2.98815 12.4091 3.6787 13.172 4.56983 13.2871C4.40871 13.5568 4.31334 13.8724 4.31334 14.2079C4.31334 15.1976 5.11899 16 6.10548 16C7.09198 16 7.89763 15.1943 7.89763 14.2079C7.89763 13.879 7.80884 13.5666 7.651 13.3036H11.643C11.4852 13.5699 11.3964 13.879 11.3964 14.2079C11.3964 15.1976 12.2021 16 13.1886 16C14.1751 16 14.9807 15.1943 14.9807 14.2079C14.9807 13.2214 14.1751 12.4157 13.1886 12.4157H4.80331C4.29033 12.4157 3.876 11.9981 3.876 11.4884V10.2849C4.14564 10.4427 4.46461 10.5348 4.80331 10.5348ZM7.01306 14.2046C7.01306 14.7044 6.60531 15.1089 6.10877 15.1089C5.61224 15.1089 5.20448 14.7011 5.20448 14.2046C5.20448 13.708 5.61224 13.3003 6.10877 13.3003C6.60531 13.3003 7.01306 13.7047 7.01306 14.2046ZM14.0961 14.2046C14.0961 14.7044 13.6884 15.1089 13.1918 15.1089C12.6953 15.1089 12.2875 14.7011 12.2875 14.2046C12.2875 13.708 12.6953 13.3003 13.1918 13.3003C13.6884 13.3003 14.0961 13.7047 14.0961 14.2046ZM13.6193 9.64694H4.80331C4.29033 9.64694 3.876 9.22932 3.876 8.71963V6.53289V4.08637V3.92195L14.5466 5.39184V8.71634C14.5466 9.23261 14.129 9.64694 13.6193 9.64694Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <span className="ikea-main-text ikea-text-14">
                        Shop now
                      </span>
                    </button>
                    <span className="ikea-icon ikea-icon_lg">
                      <WishOutline />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    good: getGoodsById(state, state.goodPage.id)
  };
};
const mapDispatchToProps = {
  fetchGoodById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpandedCard);
