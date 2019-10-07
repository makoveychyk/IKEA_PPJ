import React, { Component } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import NewProducts from "../components/NewProducts";
import Footer from "../components/Footer";
import SimpleSlider from "../components/SimpleSlider";
import MostPopular from "../components/MostPopular";
import { productData } from "../mock";
import FullCard from "../components/FullCard";

class HomePage extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <SimpleSlider></SimpleSlider>
        <NewProducts></NewProducts>
        <MostPopular></MostPopular>
        <FullCard />
        <Footer></Footer>
      </>
    );
  }
}

export default HomePage;
