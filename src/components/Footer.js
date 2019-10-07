import React, { Component } from "react";
import ReactDOM from "react-dom";
import Logo from "../icons/Logo";
import Youtube from "../icons/Youtube";
import Twitter from "../icons/Twitter";
import Insta from "../icons/Insta";
import Facebook from "../icons/Facebook";
import Send from "../icons/Send";
import Catalog from "../icons/Catalog";
import Find from "../icons/Find";
import { footerMenuData } from "../mock";

export default class Footer extends Component {
  render() {
    return (
      <footer className="ikea-footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="ikea-footer__brand">
                <a href="" className="ikea-footer__logo">
                  <Logo />
                </a>
                <p className="ikea-main-text ikea-text-12 ikea-footer__text">
                  Founded by Ingvar Kamprad in 1943 as a tiny Swedish mail-order
                  catalogue business, today IKEA is a global home furnishing
                  brand that lives in the hearts of the many people.
                </p>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="ikea-footer__menu">
                <div className="ikea-footer__nav">
                  <h5 className="ikea-footer__caption ikea-bold-text ikea-text-16">
                    Information
                  </h5>
                  <div className="ikea-footer__list-group">
                    <ul className="ikea-footer__list ikea-main-text ikea-text-14">
                      {footerMenuData.slice(0, 5).map(({ title }, index) => {
                        return (
                          <li className="ikea-footer__item" key={index}>
                            <a href="" className="ikea-footer__link">
                              {title}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                    <ul className="ikea-footer__list ikea-main-text ikea-text-14">
                      {footerMenuData
                        .slice(5, footerMenuData.length)
                        .map(({ title }, index) => {
                          return (
                            <li className="ikea-footer__item" key={index}>
                              <a href="" className="ikea-footer__link">
                                {title}
                              </a>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
                <div className="ikea-footer__tools">
                  <div className="ikea-footer__social">
                    <span className="ikea-footer__caption ikea-bold-text ikea-text-16">
                      Socials
                    </span>
                    <div className="ikea-footer__icons">
                      <a href="" className="ikea-footer__social-link">
                        <span className="ikea-icon ikea-icon_lg">
                          <Youtube />
                        </span>
                      </a>
                      <a href="" className="ikea-footer__social-link">
                        <span className="ikea-icon ikea-icon_lg">
                          <Twitter />
                        </span>
                      </a>
                      <a href="" className="ikea-footer__social-link">
                        <span className="ikea-icon ikea-icon_lg">
                          <Insta />
                        </span>
                      </a>
                      <a href="" className="ikea-footer__social-link">
                        <span className="ikea-icon ikea-icon_lg">
                          <Facebook />
                        </span>
                      </a>
                    </div>
                  </div>
                  <h5 className="ikea-footer__caption ikea-bold-text ikea-text-16">
                    Stay In Touch
                  </h5>
                  <label action="" className="ikea-footer__fild">
                    <span className="ikea-icon ikea-icon_lg ikea-footer__mail-icon">
                      <Send />
                    </span>
                    <input
                      type="text"
                      className="ikea-footer__input ikea-main-text ikea-text-14"
                      placeholder="Enter your email, please"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="ikea-footer__line"></div>
          <div className="row justify-content-between ikea-footer__bottom-info">
            <span className="ikea-main-text ikea-text-12 ikea-footer__designed">
              © Inter IKEA Systems B.V. 1999-2019
            </span>

            <ul className="ikea-footer__submenu ikea-main-text ikea-text-12">
              <li className="ikea-footer__submenu-item">
                <a href="" className="ikea-footer__submenu-link">
                  <span className="ikea-icon ikea-icon_md ikea-footer__submenu-icon">
                    <Catalog />
                  </span>
                  IKEA Catalogue
                </a>
              </li>
              <li className="ikea-footer__submenu-item">
                <a href="" className="ikea-footer__submenu-link">
                  <span className="ikea-icon ikea-icon_md ikea-footer__submenu-icon">
                    <Find />
                  </span>
                  Find a location
                </a>
              </li>
              <li className="ikea-footer__submenu-item">
                <a href="" className="ikea-footer__submenu-link">
                  United States
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
