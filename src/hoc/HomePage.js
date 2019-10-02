import React, { Component } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import NewProducts from "../components/NewProducts";
import Footer from "../components/Footer";
import SimpleSlider from "../components/SimpleSlider";

class HomePage extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <SimpleSlider></SimpleSlider>
        <NewProducts></NewProducts>
        <Footer></Footer>
      </>
    );
  }
}

export default HomePage;
