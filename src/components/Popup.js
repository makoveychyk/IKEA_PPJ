import React, { Component } from "react";

export default class Popup extends Component {
  render() {
    return (
      <div className="ikea-popup">
        <div className="ikea-popup__container">
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
          <h5 className="ikea-main-text ikea-text-14 ikea-popup__title">
            Are you sure you want to log out?
          </h5>
          <div className="ikea-popup__btn-group">
            <button className="ikea-main-text ikea-text-14 ikea-popup__btn">
              Cancel
            </button>
            <button className="ikea-btn ikea-btn_sm ikea-bold-text ikea-text-14 ikea-btn_yellow ">
              Log out
            </button>
          </div>
        </div>
      </div>
    );
  }
}
