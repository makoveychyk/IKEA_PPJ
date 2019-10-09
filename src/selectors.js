import * as R from "ramda";

export const getGoodsById = (state, id) => R.prop(id, state.goods);

export const getGoods = state => {
  const goods = R.map(id => getGoodsById(state, id), state.goodsPage.ids);
  return goods;
};