import React, { Component } from "react";
import ItemCard from "../components/ItemCard";

import { connect } from "react-redux";

import { fetchGoods, loadMoreGoods, addGoodToBasket } from "../actions/index";
import { getGoods } from "../selectors";

class ItemCatalog extends Component {
  componentDidMount() {
    this.props.fetchGoods();
  }
  render() {
    const { goods, loadMoreGoods, addGoodToBasket } = this.props;

    return (
      <section className="ikea-catalog">
        {goods.map((item, index) => (
          <ItemCard
            data={item}
            key={index}
            handler={addGoodToBasket}
          ></ItemCard>
        ))}
        <button className="ikea-catalog__load-more" onClick={loadMoreGoods}>
          <span className="ikea-icon ikea-icon_md">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.00001 0.333386C5.39933 0.331153 3.85171 0.907159 2.64201 1.95539L3.30668 3.15205C4.84862 1.67192 7.12528 1.2553 9.09146 2.09347C11.0576 2.93164 12.3335 4.86268 12.3333 7.00005H10.3333L12.46 10.8267C13.22 9.74405 13.6667 8.42405 13.6667 7.00005C13.6667 3.31805 10.682 0.333386 7.00001 0.333386ZM7 13.6667C8.60067 13.669 10.1483 13.0929 11.358 12.0447L10.6933 10.8481C9.15139 12.3282 6.87472 12.7448 4.90855 11.9066C2.94237 11.0685 1.66649 9.13743 1.66667 7.00005H3.66667L1.54 3.17339C0.78 4.25605 0.333333 5.57605 0.333333 7.00005C0.333333 10.6821 3.318 13.6667 7 13.6667Z"
                fill="#53595E"
              />
            </svg>
          </span>
          <span className="ikea-bold-text ikea-text-14 ikea-catalog__load-text">
            Load More
          </span>
        </button>
      </section>
    );
  }
}
const mapStateToProps = state => ({
  goods: getGoods(state)
});
const mapDispatchToProps = {
  fetchGoods,
  loadMoreGoods,
  addGoodToBasket
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCatalog);
