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
import HeaderBasket from "./HeaderBasket";
import { Link } from "react-router-dom";

export default class Header extends Component {
  static defaultProps = {
    nav: [{ title: "New" }, { title: "Rooms" }, { title: "Best Price" }]
  };
  state = {
    isOpen: false,
    isActive: false,
    isLogged: false,
    isNotEmpty: false,
    visibleProfil: false,
    visibleLogOut: false
  };

  handler = someValue => {
    this.setState({
      isLogged: someValue
    });
  };

  render() {
    const { nav } = this.props;
    const {
      isActive,
      isLogged,
      isOpen,
      isNotEmpty,
      visibleProfil,
      visibleLogOut
    } = this.state;
    const renderNavItems = data => {
      return data.map(({ title }, id) => (
        <li className="ikea-nav__item" key={id}>
          <Link href="#" className="ikea-nav__link">
            {title}
          </Link>
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
                    <Link
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
                    </Link>
                  </li>
                  {renderNavItems(nav)}
                </ul>
              </nav>
              <div className="ikea-user-tools">
                <div
                  className={`ikea-user-tools__profile ${visibleProfil ==
                    true && "ikea-user-tools__profile_visible"}`}
                >
                  <div className="ikea-user-tools__about">
                    <div className="ikea-user-tools__picture">
                      <img
                        src="./img/image.jpg"
                        srcSet={`./img/image@2x.jpg 2x, ./img/image@3x.jpg 3x`}
                        alt=""
                      />
                    </div>
                    <div className="ikea-user-tools__info">
                      <h5 className="ikea-bold-text ikea-text-14 ikea-user-tools__profile-title">
                        Hello, Wincent
                      </h5>
                      <button
                        className="ikea-main-text ikea-text-12 ikea-user-tools__out"
                        onClick={() =>
                          this.setState({
                            visibleProfil: false,
                            visibleLogOut: true
                          })
                        }
                      >
                        Log out
                      </button>
                    </div>
                  </div>
                  <ul className="ikea-user-tools__profile-nav ikea-main-text ikea-text-12">
                    <li className="ikea-user-tools__item">
                      <span className="ikea-icon ikea-icon_sm">
                        <svg
                          width="10"
                          height="13"
                          viewBox="0 0 10 13"
                          fill="#53595E"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.99967 7.5835C3.74924 7.5835 2.5938 6.9164 1.96859 5.8335C1.34337 4.75059 1.34337 3.4164 1.96859 2.3335C2.5938 1.25059 3.74924 0.583496 4.99967 0.583496C6.93267 0.583496 8.49967 2.1505 8.49967 4.0835C8.49967 6.01649 6.93267 7.5835 4.99967 7.5835ZM9.66634 12.8335H8.49967V11.6668C8.49967 10.7003 7.71617 9.91683 6.74967 9.91683H3.24967C2.28318 9.91683 1.49967 10.7003 1.49967 11.6668V12.8335H0.333008V11.6668C0.333008 10.056 1.63884 8.75016 3.24967 8.75016H6.74967C8.36051 8.75016 9.66634 10.056 9.66634 11.6668V12.8335ZM7.33301 4.0835C7.33301 5.37216 6.28834 6.41683 4.99967 6.41683C3.71101 6.41683 2.66634 5.37216 2.66634 4.0835C2.66634 2.79483 3.71101 1.75016 4.99967 1.75016C6.28834 1.75016 7.33301 2.79483 7.33301 4.0835Z"
                          />
                        </svg>
                      </span>
                      <a href="" className="ikea-user-tools__link">
                        View my Profile
                      </a>
                    </li>
                    <li className="ikea-user-tools__item">
                      <span className="ikea-icon ikea-icon_sm">
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="#53595E"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.63809 6.47133L7.00009 11.8333L12.3545 6.46316C13.6461 4.95741 13.5586 2.71063 12.154 1.30979C10.7493 -0.0910414 8.50231 -0.172338 7.00009 1.12333C5.49628 -0.172395 3.24765 -0.0889519 1.844 1.31466C0.432922 2.72633 0.366422 4.97333 1.63809 6.47133ZM11.3303 2.13544C12.3027 3.10514 12.3634 4.66049 11.4694 5.70299L11.4029 5.77999L6.99995 10.1836L2.59695 5.77999L2.53045 5.70299C1.63648 4.66049 1.69715 3.10514 2.6696 2.13544C3.64205 1.16575 5.19757 1.10949 6.23753 2.00641L6.99995 2.66441L7.76236 2.00641C8.80232 1.10949 10.3578 1.16575 11.3303 2.13544Z"
                          />
                        </svg>
                      </span>
                      <a href="" className="ikea-user-tools__link">
                        View my Wish list
                      </a>
                    </li>
                    <li className="ikea-user-tools__item">
                      <span className="ikea-icon ikea-icon_sm">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="#53595E"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.749837 0.75H11.2498C11.572 0.75 11.8332 1.01117 11.8332 1.33333V10.6667C11.8332 10.9888 11.572 11.25 11.2498 11.25H0.749837C0.427671 11.25 0.166504 10.9888 0.166504 10.6667V1.33333C0.166504 1.01117 0.427671 0.75 0.749837 0.75ZM10.6667 7.16667H8.674C8.21018 8.23015 7.16023 8.9177 6 8.9177C4.83977 8.9177 3.78982 8.23015 3.326 7.16667H1.33333V10.0833H10.6667V7.16667ZM10.6667 1.91667V6H7.75C7.75 6.9665 6.9665 7.75 6 7.75C5.0335 7.75 4.25 6.9665 4.25 6H1.33333V1.91667H10.6667Z"
                          />
                        </svg>
                      </span>
                      <a href="" className="ikea-user-tools__link">
                        My orders
                      </a>
                    </li>
                  </ul>

                  <div className="ikea-line"></div>
                </div>
                <button
                  className="ikea-user-tools__btn ikea-user-tools__btn-log ikea-medium-text ikea-text-14"
                  onClick={() => this.setState({ isLogged: true })}
                >
                  {isLogged === false ? (
                    "Log In"
                  ) : (
                    <span
                      className="ikea-icon ikea-icon_lg ikea-user-tools__login"
                      onClick={() =>
                        this.setState({ visibleProfil: !visibleProfil })
                      }
                    >
                      <Login />
                    </span>
                  )}
                </button>
                <button className="ikea-icon ikea-icon_lg ikea-user-tools__btn">
                  <Search />
                </button>
                {/* <button
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
                </button> */}
                <HeaderBasket />
              </div>
            </div>
          </div>
          <Menu data={this.state} handler={this.handler}></Menu>
        </header>
      </>
    );
  }
}
