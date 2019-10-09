import { productData } from "./mock";
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