import React, { Component } from "react";
import ItemCatalog from "../components/ItemCatalog";

export default class MostPopular extends Component {
  render() {
    return (
      <section className="ikea-most-popular">
        <div className="container">
          <div className="ikea-most-popular__inner">
            <h2 className="ikea-bold-text ikea-title-24 ikea-most-popular__title">
              Most popular items in Categories
            </h2>
            <ItemCatalog />
          </div>
        </div>
      </section>
    );
  }
}
