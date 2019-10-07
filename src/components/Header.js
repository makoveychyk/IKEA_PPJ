import React, { Component } from "react";
import ReactDOM from "react-dom";
import Menu from "./Menu";
import Burger from "../icons/Burger";
import Close from "../icons/Close";
import Logo from "../icons/Logo";
import MobileLogo from "../icons/MobileLogo";
import Login from "../icons/Login";
import Search from "../icons/Search";
import Basket from "../icons/Basket";

export default class Header extends Component {
  static defaultProps = {
    nav: [{ title: "New" }, { title: "Rooms" }, { title: "Best Price" }]
  };
  state = {
    isOpen: false,
    isActive: false,
    isLogged: false,
    isNotEmpty: false
  };

  handler = someValue => {
    this.setState({
      isLogged: someValue
    });
  };

  render() {
    const { nav } = this.props;
    const { isActive, isLogged, isOpen, isNotEmpty } = this.state;
    const renderNavItems = data => {
      return data.map(({ title }, id) => (
        <li className="ikea-nav__item" key={id}>
          <a href="#" className="ikea-nav__link">
            {title}
          </a>
        </li>
      ));
    };

    return (
      <>
        <header className="ikea-header ikea-medium-text ikea-text-14">
          <div className="ikea-header__inner">
            <div className="container ikea-header__content">
              <nav className="ikea-nav">
                <button
                  className="ikea-icon ikea-icon_lg ikea-nav__burger"
                  onClick={() => this.setState({ isOpen: !isOpen })}
                >
                  {this.state.isOpen === false ? <Burger /> : <Close />}
                </button>
                <a href="/" className="ikea-logo ikea-logo-desk">
                  <Logo />
                </a>
                <a href="/" className="ikea-logo ikea-logo-mobile">
                  <MobileLogo />
                </a>
                <ul className="ikea-nav__list">
                  <li className="ikea-nav__item">
                    <a
                      href="#"
                      className={`ikea-nav__link ${isActive === true &&
                        "ikea-nav__link_active"}`}
                      onClick={() =>
                        this.setState({
                          isOpen: !isOpen,
                          isActive: !isActive
                        })
                      }
                    >
                      Catalog
                    </a>
                  </li>
                  {renderNavItems(nav)}
                </ul>
              </nav>
              <div className="ikea-user-tools">
                <button
                  className="ikea-user-tools__btn ikea-user-tools__btn-log ikea-medium-text ikea-text-14"
                  onClick={() => this.setState({ isLogged: true })}
                >
                  {isLogged === false ? (
                    "Log In"
                  ) : (
                    <span className="ikea-icon ikea-icon_lg ">
                      <Login />
                    </span>
                  )}
                </button>
                <button className="ikea-icon ikea-icon_lg ikea-user-tools__btn">
                  <Search />
                </button>
                <button
                  className="ikea-icon ikea-icon_xl ikea-user-tools__btn"
                  onClick={() => this.setState({ isNotEmpty: !isNotEmpty })}
                >
                  <Basket />
                  <span
                    className={`ikea-user-tools__basket ikea-main-text ikea-text-12 ${isNotEmpty ===
                      true && "ikea-user-tools__basket_visible"}`}
                  >
                    5
                  </span>
                </button>
              </div>
            </div>
          </div>
          <Menu data={this.state} handler={this.handler}></Menu>
        </header>
      </>
    );
  }
}
