import React, { Component } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import Profile from "../icons/Profile";
import Favourite from "../icons/Favourite";
import Out from "../icons/Out";

export default class Menu extends Component {
  static defaultProps = {
    category: [
      { title: "Products" },
      { title: "Populas products" },
      { title: "New at IKEA" },
      { title: "Rooms" },
      { title: "Cookware" },
      { title: "Product under $10" }
    ]
  };
  render() {
    const { category } = this.props;
    const { isOpen, isLogged } = this.props.data;
    const renderCategoryItems = data => {
      return data.map(({ title }, id) => (
        <a href="#" className="ikea-menu__link ikea-menu__text" key={id}>
          {title}
        </a>
      ));
    };
    const menuClassName = classNames({
      "ikea-menu": true,
      "ikea-menu_open": isOpen === true
    });

    return (
      <div className={menuClassName}>
        {isLogged === false ? (
          <button
            className="ikea-menu__login"
            onClick={() => this.props.handler(true)}
          >
            <span className="ikea-icon ikea-icon_md ikea-menu__icon ">
              <Profile />
            </span>
            <span className="ikea-menu__text ikea-menu__text_login">
              Log In
            </span>
          </button>
        ) : (
          <div className="ikea-profile">
            <button className="ikea-profile__btn">
              <span className="ikea-icon ikea-icon_md ikea-menu__icon ">
                <Profile />
              </span>
              <span className="ikea-menu__text ikea-menu__text_login">
                {" "}
                View profile
              </span>
            </button>
            <button className="ikea-profile__btn">
              <span className="ikea-icon ikea-icon_md ikea-menu__icon">
                <Favourite />
              </span>
              <span className="ikea-menu__text ikea-menu__text_login">
                {" "}
                Wish list
              </span>
            </button>
            <button
              className="ikea-profile__btn"
              onClick={() => this.props.handler(false)}
            >
              <span className="ikea-icon ikea-icon_md ikea-menu__icon">
                <Out />
              </span>
              <span className="ikea-menu__text ikea-menu__text_log-out">
                {" "}
                Log out
              </span>
            </button>
          </div>
        )}
        <div className="ikea-line"></div>
        <div className="ikea-menu__category">
          {renderCategoryItems(category)}
        </div>
        <div className="ikea-line"></div>
        <div className="ikea-menu__sale">
          <a
            href="#"
            className="ikea-menu__link ikea-menu__text ikea-menu__text_accent"
          >
            Last ones
          </a>
          <a
            href="#"
            className="ikea-menu__link ikea-menu__text ikea-menu__text_accent"
          >
            Sale
          </a>
        </div>
      </div>
    );
  }
}
