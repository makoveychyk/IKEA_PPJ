import React, { Component } from "react";
import ItemCard from "../components/ItemCard";

import { connect } from "react-redux";

import { fetchGoods } from "../actions/index";
import { getGoods } from "../selectors";

class Slide extends Component {
  componentDidMount() {
    this.props.fetchGoods();
  }
  render() {
    const { goods, loadMoreGoods } = this.props;
    return (
      <div className="ikea-banner">
        {goods.splice(0, 4).map((item, index) => (
          <ItemCard data={item} key={index}></ItemCard>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  goods: getGoods(state)
});
const mapDispatchToProps = {
  fetchGoods
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slide);
