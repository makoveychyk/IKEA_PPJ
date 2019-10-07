import React, { Component } from "react";
import ItemCard from "../components/ItemCard";
import { productData } from "../mock";

export default class ItemCatalog extends Component {
  render() {
    return (
      <section className="ikea-catalog">
        {productData.map((item, index) => (
          <ItemCard data={item} key={index}></ItemCard>
        ))}
      </section>
    );
  }
}
