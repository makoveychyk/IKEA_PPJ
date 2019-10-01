import React, { Component } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import NewProducts from "../components/NewProducts";

class HomePage extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Banner></Banner>
        <NewProducts></NewProducts>
      </>
    );
  }
}

export default HomePage;
