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
import { Switch, BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route path="/card" component={ExpandedCard}></Route>
      </Switch>
    );
  }
}

export default App;
