import React, { Component } from "react";
import ReactDOM from "react-dom";
import Banner from "./Banner";
import NewProducts from "./NewProducts";
import SimpleSlider from "./SimpleSlider";
import ItemCard from "./ItemCard";
import MostPopular from "./MostPopular";
import { productData } from "../mock";
import { banner } from "../mock";
import Header from "./Header";
import Footer from "./Footer";

export default class MainPage extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <SimpleSlider
          bannerData={banner.map((item, index) => (
            <div key={index}>
              <Banner data={item}></Banner>
            </div>
          ))}
        ></SimpleSlider>
        <NewProducts></NewProducts>
        <MostPopular></MostPopular>
        <SimpleSlider
          bannerData={productData.splice(0, 4).map(item => (
            <ItemCard data={item}></ItemCard>
          ))}
        ></SimpleSlider>
        <Footer />
      </>
    );
  }
}
