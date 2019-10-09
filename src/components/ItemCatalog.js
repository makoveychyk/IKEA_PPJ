import React, { Component } from "react";
import ItemCard from "../components/ItemCard";

import { connect } from "react-redux";

import { fetchGoods } from "../actions/index";
import { getGoods } from "../selectors";

class ItemCatalog extends Component {
  componentDidMount() {
    this.props.fetchGoods();
  }
  render() {
    return (
      <section className="ikea-catalog">
        {this.props.goods.map((item, index) => (
          <ItemCard data={item} key={index}></ItemCard>
        ))}
      </section>
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
)(ItemCatalog);
