import React, { Component } from "react";
import classNames from "classnames";
import Cart from "../icons/cart";

export default class Header extends Component {
  static defaultProps = {
    nav: [{ title: "New" }, { title: "Rooms" }, { title: "Best Price" }],
    category: [
      { title: "Products" },
      { title: "Populas products" },
      { title: "New at IKEA" },
      { title: "Rooms" },
      { title: "Cookware" },
      { title: "Product under $10" }
    ]
  };
  state = {
    isOpen: false,
    isActive: false,
    isLogged: false,
    isNotEmpty: false
  };

  render() {
    const { nav, category } = this.props;
    const { isActive, isLogged, isOpen, isNotEmpty } = this.state;
    const menuClassName = classNames({
      "ikea-menu": true,
      "ikea-menu_open": isOpen === true
    });
    const renderNavItems = data => {
      return data.map(({ title }, id) => (
        <li className="ikea-nav__item" key={id}>
          <a href="#" className="ikea-nav__link">
            {title}
          </a>
        </li>
      ));
    };
    const renderCategoryItems = data => {
      return data.map(({ title }, id) => (
        <a href="#" className="ikea-menu__link ikea-menu__text" key={id}>
          {title}
        </a>
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
                  {this.state.isOpen === false ? (
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 0H18V2H0V0ZM0 7.00001H12V9.00001H0V7.00001ZM18 14H0V16H18V14Z"
                        fill="#282F36"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99974 5.58599L11.9497 0.635986L13.3637 2.04999L8.41374 6.99999L13.3637 11.95L11.9497 13.364L6.99974 8.41399L2.04974 13.364L0.635742 11.95L5.58574 6.99999L0.635742 2.04999L2.04974 0.635986L6.99974 5.58599Z"
                        fill="#282F36"
                      />
                    </svg>
                  )}
                </button>
                <a href="/" className="ikea-logo ikea-logo-desk">
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
                <a href="#" className="ikea-logo ikea-logo-mobile">
                  <svg
                    width="75"
                    height="15"
                    viewBox="0 0 75 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.1671 0.974893C20.97 1.36767 20.97 1.74734 20.97 2.14012V7.04977C20.97 7.04977 23.611 3.63265 24.2154 2.82092C24.6753 2.21867 25.2403 1.36767 25.2403 0.974893H33.8595C33.2683 1.36767 32.6113 2.07465 32.0726 2.72927C31.5996 3.30534 28.9192 6.56535 28.9192 6.56535C28.9192 6.56535 32.9004 12.6009 33.4128 13.3734C33.7019 13.7924 34.0172 14.1851 34.3851 14.5386H24.465C24.465 14.1458 24.084 13.3472 23.6636 12.7188C23.2431 12.0903 20.97 8.64704 20.97 8.64704V13.3734C20.97 13.7662 20.97 14.1458 21.1671 14.5386H12.9026C13.0997 14.1458 13.0997 13.7662 13.0997 13.3734V2.14012C13.0997 1.74734 13.0997 1.36767 12.9026 0.974893H21.1671ZM51.7682 0.974893H35.8173C36.0143 1.36767 36.0143 1.74734 36.0143 2.14012V13.3734C36.0143 13.7662 36.0143 14.1458 35.8173 14.5386H51.7682V10.7811C51.374 10.9775 50.9929 10.9775 50.5988 10.9775H43.8847V9.19692H50.336V6.32968H43.8847V4.53602H50.5988C50.9929 4.53602 51.374 4.53602 51.7682 4.71932V0.974893ZM73.8682 13.3734C73.9995 13.8054 74.2229 14.1982 74.512 14.5386H65.8664C65.9059 14.1458 65.7613 13.7662 65.6037 13.3734C65.6037 13.3734 65.4723 13.0592 65.2883 12.6009L65.2095 12.4046H60.2298L60.1509 12.614C60.1509 12.614 60.0064 12.9937 59.875 13.3865C59.7436 13.7793 59.5991 14.1589 59.6516 14.5517H52.8324C53.1083 14.2113 53.3186 13.8185 53.45 13.3865L57.5362 2.15321C57.6808 1.76044 57.8253 1.38076 57.7727 0.987986H69.2958C69.1906 1.38076 69.4009 1.76044 69.5454 2.15321C69.887 3.00421 73.5791 12.614 73.8682 13.3734ZM64.1189 9.53732L62.9101 6.39515C62.805 6.10711 62.713 5.80599 62.6474 5.50486C62.5948 5.80599 62.516 6.10711 62.4108 6.39515C62.3714 6.52607 61.859 7.90077 61.2677 9.53732H64.1189ZM8.79007 2.14012C8.79007 1.74734 8.79007 1.36767 8.98716 0.974893H0C0.197087 1.36767 0.197087 1.74734 0.197087 2.14012V13.3734C0.197087 13.7662 0.197087 14.1458 0 14.5386H8.98716C8.79007 14.1458 8.79007 13.7662 8.79007 13.3734V2.14012ZM71.1089 2.04847C71.0827 3.0304 71.8579 3.85522 72.8565 3.8814C73.8419 3.90758 74.6696 3.13514 74.6959 2.14012C74.6959 2.11394 74.6959 2.07465 74.6959 2.04847C74.7091 1.07963 73.947 0.280994 72.9747 0.267901C72.9484 0.267901 72.9353 0.267901 72.909 0.267901C71.9499 0.228614 71.1484 0.974893 71.1221 1.93064C71.0958 1.96992 71.0958 2.00919 71.1089 2.04847H71.1089ZM74.328 2.04847C74.3543 2.83401 73.7236 3.50172 72.9353 3.51482C72.1469 3.54099 71.4768 2.91257 71.4637 2.12702C71.4637 2.10085 71.4637 2.07465 71.4637 2.03538C71.4374 1.27602 72.0287 0.634488 72.7907 0.608306C72.8302 0.608306 72.8564 0.608306 72.8959 0.608306C73.6711 0.595197 74.3149 1.21056 74.328 1.98301C74.328 2.00918 74.328 2.03538 74.328 2.04847ZM73.7762 3.12204H73.4214L73.001 2.36269H72.5411V3.12204H72.2258V0.974893H73.0272C73.4083 0.988003 73.6973 1.28911 73.6973 1.66879C73.6973 1.93064 73.5528 2.1663 73.3163 2.29723L73.7762 3.12204ZM72.9747 2.04847C73.1849 2.06158 73.3689 1.90445 73.3689 1.69497C73.3689 1.4855 73.2243 1.3022 73.0141 1.3022C73.0009 1.3022 72.9878 1.3022 72.9747 1.3022H72.5411V2.06156H72.9747"
                      fill="#FFD600"
                    />
                  </svg>
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
                  {/* {nav.map(item => (
                    <li className="ikea-nav__item">
                      <a href="#" className="ikea-nav__link">
                        {item.title}
                      </a>
                    </li>
                  ))} */}
                  {/* <li className="ikea-nav__item">
                    <a href="#" className="ikea-nav__link">
                      New
                    </a>
                  </li>
                  <li className="ikea-nav__item">
                    <a href="#" className="ikea-nav__link">
                      Rooms
                    </a>
                  </li>
                  <li className="ikea-nav__item">
                    <a href="#" className="ikea-nav__link">
                      Best Price
                    </a>
                  </li> */}
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
                      <svg
                        width="16"
                        height="21"
                        viewBox="0 0 16 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8 12C5.85641 12 3.87564 10.8564 2.80385 9C1.73205 7.14359 1.73205 4.85641 2.80385 3C3.87564 1.14359 5.85641 0 8 0C11.3137 0 14 2.68629 14 6C14 9.31371 11.3137 12 8 12ZM16 21H14V19C14 17.3431 12.6569 16 11 16H5C3.34315 16 2 17.3431 2 19V21H0V19C0 16.2386 2.23858 14 5 14H11C13.7614 14 16 16.2386 16 19V21ZM12 6C12 8.20914 10.2091 10 8 10C5.79086 10 4 8.20914 4 6C4 3.79086 5.79086 2 8 2C10.2091 2 12 3.79086 12 6Z"
                          fill="#3E444B"
                        />
                      </svg>
                    </span>
                  )}
                </button>
                <button className="ikea-icon ikea-icon_lg ikea-user-tools__btn">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 20 20"
                    fill="#3E444B"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.314 18.899L16.031 14.617C17.3082 13.0237 18.0029 11.042 18 9C18 4.032 13.968 0 9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C11.042 18.0029 13.0237 17.3082 14.617 16.031L18.899 20.314L20.314 18.899ZM16 9C16.0029 10.8204 15.2941 12.5699 14.025 13.875L13.875 14.025C12.5699 15.2941 10.8204 16.0029 9 16C5.132 16 2 12.867 2 9C2 5.132 5.132 2 9 2C12.867 2 16 5.132 16 9Z"
                    />
                  </svg>
                </button>
                <button
                  className="ikea-icon ikea-icon_xl ikea-user-tools__btn"
                  onClick={() => this.setState({ isNotEmpty: !isNotEmpty })}
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 14V2H0V0H3C3.55228 0 4 0.447715 4 1V13H16.438L18.438 5H6V3H19.72C20.028 3.00001 20.3188 3.14196 20.5083 3.38479C20.6978 3.62761 20.7648 3.94422 20.69 4.243L18.19 14.243C18.0785 14.6879 17.6787 15 17.22 15H3C2.44772 15 2 14.5523 2 14ZM4 21C2.89543 21 2 20.1046 2 19C2 17.8954 2.89543 17 4 17C5.10457 17 6 17.8954 6 19C6 20.1046 5.10457 21 4 21ZM14 19C14 20.1046 14.8954 21 16 21C17.1046 21 18 20.1046 18 19C18 17.8954 17.1046 17 16 17C14.8954 17 14 17.8954 14 19Z"
                      fill="#3E444B"
                    />
                  </svg>
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
          <div className={menuClassName}>
            {isLogged === false ? (
              <button
                className="ikea-menu__login"
                onClick={() => this.setState({ isLogged: true })}
              >
                <span className="ikea-menu__icon">
                  <svg
                    width="12"
                    height="15"
                    viewBox="0 0 12 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.53625 6.66666C3.25078 7.90426 4.57128 8.66666 6.00035 8.66666C8.20949 8.66666 10.0003 6.8758 10.0003 4.66666C10.0003 2.45752 8.20949 0.666656 6.00035 0.666656C4.57128 0.666656 3.25078 1.42905 2.53625 2.66666C1.82171 3.90426 1.82171 5.42905 2.53625 6.66666ZM0.666992 14.6667H11.3337V13.3333C11.3337 11.4924 9.84127 9.99999 8.00033 9.99999H4.00033C2.15938 9.99999 0.666992 11.4924 0.666992 13.3333V14.6667Z"
                      fill="#696E73"
                    />
                  </svg>
                </span>
                <span className="ikea-menu__text ikea-menu__text_login">
                  Log In
                </span>
              </button>
            ) : (
              <div className="ikea-profile">
                <button className="ikea-profile__btn">
                  <span className="ikea-menu__icon">
                    <svg
                      width="12"
                      height="15"
                      viewBox="0 0 12 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.53625 6.66666C3.25078 7.90426 4.57128 8.66666 6.00035 8.66666C8.20949 8.66666 10.0003 6.8758 10.0003 4.66666C10.0003 2.45752 8.20949 0.666656 6.00035 0.666656C4.57128 0.666656 3.25078 1.42905 2.53625 2.66666C1.82171 3.90426 1.82171 5.42905 2.53625 6.66666ZM0.666992 14.6667H11.3337V13.3333C11.3337 11.4924 9.84127 9.99999 8.00033 9.99999H4.00033C2.15938 9.99999 0.666992 11.4924 0.666992 13.3333V14.6667Z"
                        fill="#7E8286"
                      />
                    </svg>
                  </span>
                  <span className="ikea-menu__text ikea-menu__text_login">
                    {" "}
                    View profile
                  </span>
                </button>
                <button className="ikea-profile__btn">
                  <span className="ikea-menu__icon">
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.1198 7.52933L14.1285 7.53866L8.00048 13.6667L1.87248 7.53866L1.88115 7.52933C0.405076 5.80848 0.50499 3.24072 2.11032 1.63977C3.71564 0.0388142 6.28366 -0.0540961 8.00048 1.42666C9.7173 -0.0540961 12.2853 0.0388142 13.8906 1.63977C15.496 3.24072 15.5959 5.80848 14.1198 7.52933Z"
                        fill="#7E8286"
                      />
                    </svg>
                  </span>
                  <span className="ikea-menu__text ikea-menu__text_login">
                    {" "}
                    Wish list
                  </span>
                </button>
                <button
                  className="ikea-profile__btn"
                  onClick={() => this.setState({ isLogged: false })}
                >
                  <span className="ikea-menu__icon">
                    <svg
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.6663 0.333344H1.33301C0.964818 0.333344 0.666341 0.63182 0.666341 1.00001V6.99975L0.666016 7.00002L0.666341 7.00028V13C0.666341 13.3682 0.964818 13.6667 1.33301 13.6667H10.6663C11.0345 13.6667 11.333 13.3682 11.333 13V1.00001C11.333 0.63182 11.0345 0.333344 10.6663 0.333344ZM0.666341 7.00028L3.99935 9.66668V7.66668H7.99935V6.33335H3.99935V4.33335L0.666341 6.99975V7.00028Z"
                        fill="#BFC1C3"
                      />
                    </svg>
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
              {/* {category.map(item => (
                <a href="#" className="ikea-menu__link ikea-menu__text">
                  {item.title}
                </a>
              ))} */}
              {/* <a href="#" className="ikea-menu__link ikea-menu__text">
                Categories
              </a>
              <a href="#" className="ikea-menu__link ikea-menu__text">
                Populas products
              </a>
              <a href="#" className="ikea-menu__link ikea-menu__text">
                New at IKEA
              </a>
              <a href="#" className="ikea-menu__link ikea-menu__text">
                Rooms
              </a>
              <a href="#" className="ikea-menu__link ikea-menu__text">
                Cookware
              </a>
              <a href="#" className="ikea-menu__link ikea-menu__text">
                Product under $10
              </a>
              <a href="#" className="ikea-menu__link ikea-menu__text">
                Product under $10
              </a>
              <a href="#" className="ikea-menu__link ikea-menu__text">
                Product under $10
              </a>
              <a href="#" className="ikea-menu__link ikea-menu__text">
                Product under $10
              </a>
              <a href="#" className="ikea-menu__link ikea-menu__text">
                Product under $10
              </a>
              <a href="#" className="ikea-menu__link ikea-menu__text">
                Product under $10
              </a>
              <a href="#" className="ikea-menu__link ikea-menu__text">
                Product under $10
              </a>
              <a href="#" className="ikea-menu__link ikea-menu__text">
                Product under $10
              </a>
              <a href="#" className="ikea-menu__link ikea-menu__text">
                Product under $10
              </a>
              <a href="#" className="ikea-menu__link ikea-menu__text">
                Product under $10
              </a> */}
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
              <button className="ikea-btn ikea-btn_sm ikea-btn_blue ikea-main-text ikea-text-14">
                Click
              </button>
            </div>
            {/* <div className="ikea-menu__other">
              <div className="ikea-menu__catalog">
                <img src="img/addvert.jpg" alt="" />
                <div className="ikea-menu__catalog-inner">
                  <div className="ikea-menu__catalog-content">
                    <h3>IKEA New Catalog 2020</h3>
                    <span className="ikea-menu__subcaption">
                      New trends and facilities
                    </span>
                  </div>
                  <span className="ikea-menu__arrow">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.172 7.00066L6.808 1.63666L8.222 0.222659L16 8.00066L8.222 15.7787L6.808 14.3647L12.172 9.00066H0V7.00066H12.172Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="ikea-menu__catalog">
                <img src="img/addvert2.jpg" alt="" />
                <div className="ikea-menu__catalog-inner">
                  <div className="ikea-menu__catalog-content">
                    <h3>New Bedroom ideas</h3>
                    <span className="ikea-menu__subcaption">
                      More comfortable and fair
                    </span>
                  </div>
                  <span className="ikea-menu__arrow">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.172 7.00066L6.808 1.63666L8.222 0.222659L16 8.00066L8.222 15.7787L6.808 14.3647L12.172 9.00066H0V7.00066H12.172Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </header>
        <div className="par"></div>
      </>
    );
  }
}