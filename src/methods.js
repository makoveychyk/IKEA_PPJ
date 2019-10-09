import { productData } from "./mock";
import * as R from "ramda";

export const fetchGoods = async () => {
  return new Promise((resolve, reject) => {
    resolve(productData);
  });
};
export const loadMoreGoods = async ({ offset }) => {
  return new Promise((resolve, reject) => {
    resolve(productData);
  });
};
export const fetchGoodById = async (id) => {
  return new Promise((resolve, reject) => {
    const good = R.find(R.propEq('id', id), productData)
    resolve(good);
  });
};