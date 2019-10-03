import React, { Component } from "react";
import ReactDOM from "react-dom";
import Logo from "../icons/Logo";
import Youtube from "../icons/Youtube";
import Twitter from "../icons/Twitter";
import Insta from "../icons/Insta";
import Facebook from "../icons/Facebook";
import Send from "../icons/Send";

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
                      <li className="ikea-footer__item">
                        <a href="" className="ikea-footer__link">
                          Contact us
                        </a>
                      </li>

                      <li className="ikea-footer__item">
                        <a href="" className="ikea-footer__link">
                          IKEA Planners
                        </a>
                      </li>

                      <li className="ikea-footer__item">
                        <a href="" className="ikea-footer__link">
                          Customer Service
                        </a>
                      </li>

                      <li className="ikea-footer__item">
                        <a href="" className="ikea-footer__link">
                          Guest purchase
                        </a>
                      </li>
                      <li className="ikea-footer__item">
                        <a href="" className="ikea-footer__link">
                          Gift Card
                        </a>
                      </li>
                    </ul>
                    <ul className="ikea-footer__list ikea-main-text ikea-text-14">
                      <li className="ikea-footer__item">
                        <a href="" className="ikea-footer__link">
                          IKEA Family
                        </a>
                      </li>

                      <li className="ikea-footer__item">
                        <a href="" className="ikea-footer__link">
                          Returns
                        </a>
                      </li>

                      <li className="ikea-footer__item">
                        <a href="" className="ikea-footer__link">
                          Payments
                        </a>
                      </li>

                      <li className="ikea-footer__item">
                        <a href="" className="ikea-footer__link">
                          FAQ
                        </a>
                      </li>
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
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="#D4D5D7"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14 0.333333C13.26 0.1 12.4467 0 11.6667 0C10.3667 0 8.96669 0.266667 8.00002 1C7.03335 0.266667 5.63335 0 4.33335 0C3.03335 0 1.63335 0.266667 0.666687 1V10.7667C0.666687 10.9333 0.833354 11.1 1.00002 11.1C1.06669 11.1 1.10002 11.0667 1.16669 11.0667C2.06669 10.6333 3.36669 10.3333 4.33335 10.3333C5.63335 10.3333 7.03335 10.6 8.00002 11.3333C8.90002 10.7667 10.5334 10.3333 11.6667 10.3333C12.7667 10.3333 13.9 10.5333 14.8334 11.0333C14.9 11.0667 14.9334 11.0667 15 11.0667C15.1667 11.0667 15.3334 10.9 15.3334 10.7333V1C14.9334 0.7 14.5 0.5 14 0.333333ZM14 9.33333C13.2667 9.1 12.4667 9 11.6667 9C10.5334 9 8.90002 9.43333 8.00002 10V2.33333C8.90002 1.76667 10.5334 1.33333 11.6667 1.33333C12.4667 1.33333 13.2667 1.43333 14 1.66667V9.33333Z" />
                    </svg>
                  </span>
                  IKEA Catalogue
                </a>
              </li>
              <li className="ikea-footer__submenu-item">
                <a href="" className="ikea-footer__submenu-link">
                  <span className="ikea-icon ikea-icon_md ikea-footer__submenu-icon">
                    <svg
                      width="12"
                      height="15"
                      viewBox="0 0 12 15"
                      fill="#D4D5D7"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 14.8187L1.75733 10.576C-0.585791 8.23284 -0.585776 4.43386 1.75737 2.09072C4.10051 -0.25241 7.89949 -0.25241 10.2426 2.09072C12.5858 4.43386 12.5858 8.23284 10.2427 10.576L6 14.8187ZM9.3 9.63332C11.1223 7.81083 11.1222 4.85614 9.29978 3.03377C7.47734 1.2114 4.52266 1.2114 2.70022 3.03377C0.877791 4.85614 0.87769 7.81083 2.7 9.63332L6 12.9333L9.3 9.63332ZM4.66667 6.33333C4.66667 7.06971 5.26362 7.66666 6 7.66666C6.73638 7.66666 7.33333 7.06971 7.33333 6.33333C7.33333 5.59695 6.73638 4.99999 6 4.99999C5.26362 4.99999 4.66667 5.59695 4.66667 6.33333Z"
                      />
                    </svg>
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
