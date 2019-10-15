import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Banner from "../components/Banner";
import NewProducts from "../components/NewProducts";
import Footer from "../components/Footer";
import SimpleSlider from "../components/SimpleSlider";
import MostPopular from "../components/MostPopular";
import { productData } from "../mock";
import ExpandedCard from "../components/ExpandedCard";
import MainPage from "../components/MainPage";
import { Switch, BrowserRouter, Route } from "react-router";
import Popup from "../components/Popup";
import Auth from "../components/Auth";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Popup />
        <Auth />
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route path="/card/:id" component={ExpandedCard}></Route>
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
