import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="footer__brand">
                <a href="" className="footer__logo">
                  <svg
                    width="118"
                    height="24"
                    viewBox="0 0 118 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.3029 1.90771C32.9929 2.52787 32.9929 3.12737 32.9929 3.74753V11.4996C32.9929 11.4996 37.148 6.10416 38.0989 4.82248C38.8224 3.87156 39.7113 2.52787 39.7113 1.90771H53.2723C52.3421 2.52787 51.3085 3.64417 50.4609 4.67778C49.7167 5.58736 45.4996 10.7347 45.4996 10.7347C45.4996 10.7347 51.7632 20.2646 52.5695 21.4843C53.0242 22.1458 53.5204 22.766 54.0992 23.3241H38.4917C38.4917 22.704 37.8922 21.4429 37.2307 20.4507C36.5692 19.4584 32.9929 14.0216 32.9929 14.0216V21.4843C32.9929 22.1045 32.9929 22.704 33.3029 23.3241H20.3001C20.6102 22.704 20.6102 22.1045 20.6102 21.4843V3.74753C20.6102 3.12737 20.6102 2.52787 20.3001 1.90771H33.3029ZM81.4486 1.90771H56.3525C56.6626 2.52787 56.6626 3.12737 56.6626 3.74753V21.4843C56.6626 22.1045 56.6626 22.704 56.3525 23.3241H81.4486V17.3912C80.8284 17.7013 80.2289 17.7013 79.6087 17.7013H69.0452V14.8899H79.1953V10.3626H69.0452V7.53055H79.6087C80.2289 7.53055 80.8284 7.53055 81.4486 7.81996V1.90771ZM116.219 21.4843C116.426 22.1665 116.777 22.7866 117.232 23.3241H103.63C103.692 22.704 103.464 22.1045 103.216 21.4843C103.216 21.4843 103.01 20.9882 102.72 20.2646L102.596 19.9545H94.7615L94.6374 20.2853C94.6374 20.2853 94.41 20.8848 94.2033 21.505C93.9966 22.1251 93.7692 22.7246 93.8519 23.3448H83.123C83.5571 22.8073 83.8879 22.1871 84.0946 21.505L90.5237 3.76821C90.7511 3.14804 90.9785 2.54855 90.8958 1.92838H109.025C108.86 2.54855 109.191 3.14804 109.418 3.76821C109.956 5.1119 115.764 20.2853 116.219 21.4843ZM100.88 15.4273L98.9786 10.466C98.8132 10.0112 98.6685 9.53575 98.5652 9.06029C98.4825 9.53575 98.3584 10.0112 98.1931 10.466C98.131 10.6727 97.3248 12.8433 96.3946 15.4273H100.88ZM13.8297 3.74753C13.8297 3.12737 13.8297 2.52787 14.1398 1.90771H0C0.310084 2.52787 0.310084 3.12737 0.310084 3.74753V21.4843C0.310084 22.1045 0.310084 22.704 0 23.3241H14.1398C13.8297 22.704 13.8297 22.1045 13.8297 21.4843V3.74753ZM111.878 3.60282C111.837 5.15324 113.056 6.4556 114.627 6.49693C116.178 6.53827 117.48 5.31862 117.522 3.74753C117.522 3.7062 117.522 3.64417 117.522 3.60282C117.542 2.07308 116.343 0.812076 114.814 0.791404C114.772 0.791404 114.751 0.791404 114.71 0.791404C113.201 0.729372 111.94 1.90771 111.899 3.41677C111.857 3.47881 111.857 3.54081 111.878 3.60282H111.878ZM116.943 3.60282C116.984 4.84316 115.992 5.89744 114.751 5.91811C113.511 5.95945 112.457 4.96719 112.436 3.72686C112.436 3.68553 112.436 3.64417 112.436 3.58216C112.395 2.38316 113.325 1.37022 114.524 1.32889C114.586 1.32889 114.627 1.32889 114.689 1.32889C115.909 1.30819 116.922 2.2798 116.943 3.49947C116.943 3.5408 116.943 3.58216 116.943 3.60282ZM116.075 5.29795H115.516L114.855 4.09896H114.131V5.29795H113.635V1.90771H114.896C115.496 1.92841 115.95 2.40384 115.95 3.00333C115.95 3.41677 115.723 3.78888 115.351 3.9956L116.075 5.29795ZM114.813 3.60282C115.144 3.62352 115.434 3.37544 115.434 3.04468C115.434 2.71392 115.206 2.42451 114.876 2.42451C114.855 2.42451 114.834 2.42451 114.813 2.42451H114.131V3.6235H114.813"
                      fill="#FFD600"
                    />
                  </svg>
                </a>
                <p className="ikea-main-text ikea-text-12 footer__text">
                  Founded by Ingvar Kamprad in 1943 as a tiny Swedish mail-order
                  catalogue business, today IKEA is a global home furnishing
                  brand that lives in the hearts of the many people.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="footer__nav">
                <div>
                  <div className="row">
                    <div className="col-12">
                      <h5 className="footer__caption ikea-bold-text ikea-text-16">
                        Information
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="footer__item footer__item_nav">
                        <ul className="footer__list ikea-main-text ikea-text-14">
                          <li className="footer__list-item">
                            <a href="" className="footer__link">
                              Contact us
                            </a>
                          </li>

                          <li className="footer__list-item">
                            <a href="" className="footer__link">
                              IKEA Planners
                            </a>
                          </li>

                          <li className="footer__list-item">
                            <a href="" className="footer__link">
                              Customer Service
                            </a>
                          </li>

                          <li className="footer__list-item">
                            <a href="" className="footer__link">
                              Guest purchase
                            </a>
                          </li>
                          <li className="footer__list-item">
                            <a href="" className="footer__link">
                              Gift Card
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="footer__item footer__item_nav">
                        <ul className="footer__list ikea-main-text ikea-text-14">
                          <li className="footer__list-item">
                            <a href="" className="footer__link">
                              IKEA Family
                            </a>
                          </li>

                          <li className="footer__list-item">
                            <a href="" className="footer__link">
                              Returns
                            </a>
                          </li>

                          <li className="footer__list-item">
                            <a href="" className="footer__link">
                              Payments
                            </a>
                          </li>

                          <li className="footer__list-item">
                            <a href="" className="footer__link">
                              FAQ
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footer__item footer__item_mail">
                  <div className="footer__social">
                    <span className="social-text ikea-main-text ikea-text-14">
                      Socials:
                    </span>
                    <div className="footer__icons social-icons social-icons_ml25">
                      <a href="" className="social-icons__link">
                        <svg
                          width="16"
                          height="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6.01 4.02V5.8H4.5V8h1.51v6.5h3.11V8h2.09s.2-1.05.29-2.2H9.13V4.3c0-.22.34-.52.68-.52h1.69V1.5H9.2C5.94 1.5 6 3.7 6 4.02z" />
                        </svg>
                      </a>
                      <a href="" className="social-icons__link">
                        <svg
                          width="16"
                          height="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6.01 4.02V5.8H4.5V8h1.51v6.5h3.11V8h2.09s.2-1.05.29-2.2H9.13V4.3c0-.22.34-.52.68-.52h1.69V1.5H9.2C5.94 1.5 6 3.7 6 4.02z" />
                        </svg>
                      </a>
                      <a href="" className="social-icons__link">
                        <svg
                          width="16"
                          height="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6.01 4.02V5.8H4.5V8h1.51v6.5h3.11V8h2.09s.2-1.05.29-2.2H9.13V4.3c0-.22.34-.52.68-.52h1.69V1.5H9.2C5.94 1.5 6 3.7 6 4.02z" />
                        </svg>
                      </a>
                      <a href="" className="social-icons__link">
                        <svg
                          width="16"
                          height="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6.01 4.02V5.8H4.5V8h1.51v6.5h3.11V8h2.09s.2-1.05.29-2.2H9.13V4.3c0-.22.34-.52.68-.52h1.69V1.5H9.2C5.94 1.5 6 3.7 6 4.02z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <h5 className="footer__caption ikea-bold-text ikea-text-16">
                    Subscribe to our newsletter
                  </h5>
                  <form action="" className="input-fild footer__fild">
                    <input type="text" className="input input_inp" />
                    <input type="text" className="btn btn_inp" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__line"></div>
          <div className="row justify-content-between footer__designer">
            <div className="col-12 col-lg-6">
              <span className="footer__btext footer__btext_copy">
                2019 © All rights reserved. PVLSE
              </span>
            </div>
            <div className="col-12 col-lg-6">
              <a href="" className="footer__btext footer__btext_lanp">
                Designed by Lanp.
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
