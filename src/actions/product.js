import * as TYPE from "../contans/product";

export const getProduct = (offset, page) => ({
  type: TYPE.GET_PRODUCT,
  offset,
  page,
});
export const getProductSuccess = (data, total) => ({
  type: TYPE.GET_PRODUCT_SUCCESS,
  data: data,
  total: total,
});
export const getProductError = (errMess) => ({
  type: TYPE.GET_PRODUCT_ERROR,
  errMess,
});

// ===========================

export const getHomeProduct = (offset) => ({
  type: TYPE.GET_HOME_PRODUCT,
  offset,
});
export const getHomeProductSuccess = (data) => ({
  type: TYPE.GET_HOME_PRODUCT_SUCCESS,
  data: data,
});
export const getHomeProductError = (errMess) => ({
  type: TYPE.GET_HOME_PRODUCT_ERROR,
  errMess,
});

// ===========================

export const getHomePropose = (offset) => ({
  type: TYPE.GET_HOME_PROPOSE,
  offset,
});
export const getHomeProposeSuccess = (data) => ({
  type: TYPE.GET_HOME_PROPOSE_SUCCESS,
  data: data,
});
export const getHomeProposeError = (errMess) => ({
  type: TYPE.GET_HOME_PROPOSE_ERROR,
  errMess,
});

// ===========================

export const getProductFeature = (offset) => ({
  type: TYPE.GET_FEATURE,
  offset,
});
export const getProductFeatureSuccess = (data) => ({
  type: TYPE.GET_FEATURE_SUCCESS,
  data: data,
});
export const getProductFeatureError = (errMess) => ({
  type: TYPE.GET_FEATURE_ERROR,
  errMess,
});

// ===========================

export const getProductSuggest = (offset) => ({
  type: TYPE.GET_SUGGEST,
  offset,
});
export const getProductSuggestSuccess = (data) => ({
  type: TYPE.GET_SUGGEST_SUCCESS,
  data: data,
});
export const getProductSuggestError = (errMess) => ({
  type: TYPE.GET_SUGGEST_ERROR,
  errMess,
});

// ===========================

export const getProductDetail = (alias) => ({
  type: TYPE.GET_DETAIL,
  alias: alias,
});
export const getProductDetailSuccess = (data) => ({
  type: TYPE.GET_DETAIL_SUCCESS,
  data: data,
});
export const getProductDetailError = (errMess) => ({
  type: TYPE.GET_DETAIL_ERROR,
  errMess,
});

// ===========================

export const searchProduct = (name, offset) => ({
  type: TYPE.SEARCH_PRODUCT,
  name,
  offset,
});
export const searchProductSuccess = (data) => ({
  type: TYPE.SEARCH_PRODUCT_SUCCESS,
  data: data,
});
export const searchProductError = (errMess) => ({
  type: TYPE.SEARCH_PRODUCT_ERROR,
  errMess,
});
