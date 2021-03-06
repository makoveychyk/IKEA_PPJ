import React, { Component } from "react";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};
export default class Auth extends Component {
  state = {
    email: null,
    password: null,
    formErrors: {
      email: "",
      password: ""
    }
  };

  loginHandler = () => {};
  submitHandler = e => {
    e.preventDefault();
    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  render() {
    const { formErrors, email, password } = this.state;
    return (
      <div className="ikea-auth ">
        <div className="ikea-auth__container ">
          <button className="ikea-icon ikea-icon_lg ikea-popup__close">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99974 5.58599L11.9497 0.635986L13.3637 2.04999L8.41374 6.99999L13.3637 11.95L11.9497 13.364L6.99974 8.41399L2.04974 13.364L0.635742 11.95L5.58574 6.99999L0.635742 2.04999L2.04974 0.635986L6.99974 5.58599Z"
                fill="#3E444B"
              />
            </svg>
          </button>
          <div className="ikea-auth__inner">
            <h2 className="ikea-bold-text ikea-title-18 ikea-auth__title">
              SIGN IN
            </h2>
            <span className="ikea-main-text ikea-text-12 ikea-auth__subtitle">
              IKEA™ Family Card
            </span>
            <form
              action=""
              className="ikea-auth__form"
              onSubmit={this.submitHandler}
              noValidate
            >
              <div className="ikea-auth__field">
                <label
                  htmlFor="email"
                  className="ikea-main-text ikea-text-12 ikea-auth__label"
                >
                  Username or E-mail
                </label>
                <div
                  className={`ikea-auth__email ${
                    formErrors.email.length > 0 && email.length > 0
                      ? "ikea-auth__email_error"
                      : formErrors.email.length == 0 && email != null
                      ? "ikea-auth__email_success"
                      : ""
                  }`}
                >
                  <span className="ikea-icon ikea-icon_sm ikea-auth__icon">
                    <svg
                      width="10"
                      height="13"
                      viewBox="0 0 10 13"
                      fill="#BFC1C3"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.9987 7.58398C3.06495 7.58398 1.4987 6.01773 1.4987 4.08398C1.4987 2.15023 3.06495 0.583984 4.9987 0.583984C6.93245 0.583984 8.4987 2.15023 8.4987 4.08398C8.4987 6.01773 6.93245 7.58398 4.9987 7.58398ZM0.332031 12.834C0.332031 10.2567 2.42137 8.16732 4.9987 8.16732C7.57603 8.16732 9.66536 10.2567 9.66536 12.834H8.4987C8.4987 10.901 6.93169 9.33398 4.9987 9.33398C3.0657 9.33398 1.4987 10.901 1.4987 12.834H0.332031ZM7.33203 4.08398C7.33203 5.37315 6.28786 6.41732 4.9987 6.41732C3.70953 6.41732 2.66536 5.37315 2.66536 4.08398C2.66536 2.79482 3.70953 1.75065 4.9987 1.75065C6.28786 1.75065 7.33203 2.79482 7.33203 4.08398Z"
                      />
                    </svg>
                  </span>
                  <input
                    type="email"
                    className="ikea-main-text ikea-text-14 ikea-auth__input"
                    placeholder="Enter your email"
                    onChange={this.handleChange}
                    name="email"
                    noValidate
                  />
                  {formErrors.email.length > 0 && email.length > 0 ? (
                    <span className="ikea-icon ikea-icon_sm ikea-auth__status">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.8335 5.99992C11.8335 2.77817 9.22191 0.166584 6.00016 0.166585C2.77841 0.166585 0.166827 2.77817 0.166828 5.99992C0.166828 9.22167 2.77841 11.8333 6.00016 11.8333C9.22191 11.8333 11.8335 9.22167 11.8335 5.99992ZM1.33358 5.99994C1.33358 3.42261 3.42291 1.33327 6.00024 1.33327C8.57757 1.33327 10.6669 3.42261 10.6669 5.99994C10.6669 8.57727 8.57757 10.6666 6.00024 10.6666C3.42292 10.6666 1.33358 8.57727 1.33358 5.99994ZM5.41691 8.91661L5.41691 7.74994L6.58358 7.74994L6.58358 8.91661L5.41691 8.91661ZM5.41691 3.08327L5.41691 6.58327L6.58358 6.58327L6.58358 3.08327L5.41691 3.08327Z"
                          fill="#E65C5C"
                        />
                      </svg>
                    </span>
                  ) : formErrors.email.length == 0 && email != null ? (
                    <span className="ikea-icon ikea-icon_sm ikea-auth__status">
                      <svg
                        width="10"
                        height="9"
                        viewBox="0 0 10 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 3.61399L3.8 6.69092L9 1.69092"
                          stroke="#FFD600"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </span>
                  ) : null}
                </div>
                <label
                  htmlFor="pass"
                  className="ikea-main-text ikea-text-12 ikea-auth__label"
                >
                  Password
                </label>
                <div
                  className={`ikea-auth__pass ${
                    formErrors.password.length > 0 && password.length > 0
                      ? "ikea-auth__pass_error"
                      : formErrors.password.length == 0 && password != null
                      ? "ikea-auth__pass_success"
                      : ""
                  }`}
                >
                  <span className="ikea-icon ikea-icon_sm ikea-auth__icon">
                    <svg
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="#BFC1C3"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.5 4.08301V4.66634H1.33333C1.01117 4.66634 0.75 4.92751 0.75 5.24967V12.2497C0.75 12.5718 1.01117 12.833 1.33333 12.833H10.6667C10.9888 12.833 11.25 12.5718 11.25 12.2497V5.24967C11.25 4.92751 10.9888 4.66634 10.6667 4.66634H9.5V4.08301C9.5 2.15001 7.933 0.583008 6 0.583008C4.067 0.583008 2.5 2.15001 2.5 4.08301ZM1.91667 11.6667V5.83333H10.0833V11.6667H1.91667ZM5.41677 9.17703C4.95948 8.91301 4.73653 8.37476 4.87319 7.86471C5.00986 7.35466 5.47207 7 6.00011 7C6.52815 7 6.99035 7.35466 7.12702 7.86471C7.26369 8.37476 7.04074 8.91301 6.58344 9.17703V10.5H5.41677V9.17703ZM8.33333 4.08333V4.66667H3.66667V4.08333C3.66667 2.79467 4.71134 1.75 6 1.75C7.28866 1.75 8.33333 2.79467 8.33333 4.08333Z"
                      />
                    </svg>
                  </span>
                  <input
                    type="password"
                    className="ikea-main-text ikea-text-14 ikea-auth__input"
                    placeholder="Enter your password"
                    onChange={this.handleChange}
                    name="password"
                    noValidate
                  />
                  {formErrors.password.length > 0 && password.length > 0 ? (
                    <span className="ikea-icon ikea-icon_sm ikea-auth__status">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.8335 5.99992C11.8335 2.77817 9.22191 0.166584 6.00016 0.166585C2.77841 0.166585 0.166827 2.77817 0.166828 5.99992C0.166828 9.22167 2.77841 11.8333 6.00016 11.8333C9.22191 11.8333 11.8335 9.22167 11.8335 5.99992ZM1.33358 5.99994C1.33358 3.42261 3.42291 1.33327 6.00024 1.33327C8.57757 1.33327 10.6669 3.42261 10.6669 5.99994C10.6669 8.57727 8.57757 10.6666 6.00024 10.6666C3.42292 10.6666 1.33358 8.57727 1.33358 5.99994ZM5.41691 8.91661L5.41691 7.74994L6.58358 7.74994L6.58358 8.91661L5.41691 8.91661ZM5.41691 3.08327L5.41691 6.58327L6.58358 6.58327L6.58358 3.08327L5.41691 3.08327Z"
                          fill="#E65C5C"
                        />
                      </svg>
                    </span>
                  ) : formErrors.password.length == 0 && password != null ? (
                    <span className="ikea-icon ikea-icon_sm ikea-auth__status">
                      <svg
                        width="10"
                        height="9"
                        viewBox="0 0 10 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 3.61399L3.8 6.69092L9 1.69092"
                          stroke="#FFD600"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </span>
                  ) : null}
                </div>
                {formErrors.email.length > 0 && email.length > 0 ? (
                  <span className="ikea-main-text ikea-text-12 ikea-auth__error">
                    Wrong email. Please try again.
                  </span>
                ) : formErrors.password.length > 0 && password.length > 0 ? (
                  <span className="ikea-main-text ikea-text-12 ikea-auth__error">
                    Wrong password. Please try again.
                  </span>
                ) : (
                  <span className="ikea-main-text ikea-text-12 ikea-auth__subtitle">
                    Forgot password?
                  </span>
                )}

                {/* <span className="ikea-main-text ikea-text-12 ikea-auth__subtitle">
                  Forgot password?
                </span> */}

                <label className="ikea-auth__toogle-field">
                  <input type="checkbox" className="ikea-auth__toogle-real" />
                  <span className="ikea-auth__toogle" />
                  <span className="ikea-main-text ikea-text-12 ikea-auth__toogle-text">
                    Remember me
                  </span>
                </label>
              </div>

              <button
                type="success"
                className="ikea-bold-text ikea-text-14 ikea-btn ikea-btn_sm ikea-btn_yellow ikea-auth__submit"
                onClick={this.loginHandler}
              >
                Sign in
              </button>
            </form>
            <div className="ikea-auth__btn-group">
              <button className="ikea-btn ikea-btn_md ikea-auth__btn">
                <span className="ikea-icon ikea-icon_lg">
                  <img
                    src="./img/google.png"
                    srcSet="./img/google@2x.png 2x, google@3x.png 3x"
                    alt=""
                  />
                </span>

                <span className="ikea-bold-text ikea-text-12 ikea-auth__title">
                  Sign in with Google
                </span>
              </button>
              <button className="ikea-btn ikea-btn_md ikea-auth__btn">
                <span className="ikea-icon ikea-icon_lg">
                  <svg
                    width="10"
                    height="20"
                    viewBox="0 0 10 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.4908 19.9971V10.8762H9.43911L9.88051 7.32169H6.4908V5.05222C6.4908 4.02312 6.76604 3.32174 8.18733 3.32174L10 3.32087V0.141741C9.68636 0.0985807 8.61042 0.00183105 7.35864 0.00183105C4.74517 0.00183105 2.95593 1.65826 2.95593 4.70037V7.32179H0V10.8763H2.95584V19.9972L6.4908 19.9971Z"
                      fill="#3C5A9A"
                    />
                  </svg>
                </span>
                <span className="ikea-bold-text ikea-text-12 ikea-auth__title">
                  Sign in with Google
                </span>
              </button>
            </div>
          </div>
          <div className=" ikea-auth__footer">
            <span className=" ikea-auth__subtitle ikea-main-text ikea-text-14">
              Don’t have an Account?
            </span>
            <button className="ikea-main-text ikea-text-14 ikea-auth__footer-btn">
              Sign Up for free
            </button>
          </div>
        </div>
      </div>
    );
  }
}
