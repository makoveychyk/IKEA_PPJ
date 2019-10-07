import React from "react";
import ReactDOM from "react-dom";

const Basket = props => {
  const { size } = props;
  let iconSize = 21;
  switch (size) {
    case "md":
      iconSize = 14;
      break;
    case "lg":
      break;
  }
  return (
    <svg
      width={iconSize}
      height={iconSize}
      fill="#3E444B"
      viewBox="0 0 21 21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 14V2H0V0h3a1 1 0 0 1 1 1v12h12.438l2-8H6V3h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H3a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10-2a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
    </svg>
  );
};

export default Basket;
