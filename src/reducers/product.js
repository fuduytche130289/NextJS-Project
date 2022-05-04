import * as TYPE from "../contans/product";
import { HYDRATE } from "next-redux-wrapper";
import cloneDeep from "lodash/cloneDeep";

const initialState = {
  product: {
    loading: false,
    data: [],
    total: 0,
    errMess: null,
  },
  productFeature: {
    loading: false,
    data: [],
    errMess: null,
  },
  productSuggest: {
    loading: false,
    data: [],
    errMess: null,
  },
  homeProduct: {
    loading: false,
    data: [],
    errMess: null,
  },
  homePropose: {
    loading: false,
    data: [],
    errMess: null,
  },
  productDetail: {
    loading: false,
    data: {},
    errMess: null,
  },
  productSearch: {
    val: "",
    loading: false,
    data: [],
    errMess: null,
  },
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...cloneDeep(action.payload.product) };

    case TYPE.GET_PRODUCT:
      return {
        ...state,
        product: {
          ...state.product,
          loading: true,
        },
      };
    case TYPE.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: {
          ...state.product,
          loading: false,
          data: action.data,
          total: action.total,
        },
      };
    case TYPE.GET_PRODUCT_ERROR:
      return {
        ...state,
        product: {
          ...state.product,
          loading: false,
          errMess: action.errMess,
        },
      };

    case TYPE.GET_HOME_PRODUCT:
      return {
        ...state,
        homeProduct: {
          ...state.homeProduct,
          loading: true,
        },
      };
    case TYPE.GET_HOME_PRODUCT_SUCCESS:
      return {
        ...state,
        homeProduct: {
          ...state.homeProduct,
          loading: false,
          data: action.data,
        },
      };
    case TYPE.GET_HOME_PRODUCT_ERROR:
      return {
        ...state,
        homeProduct: {
          ...state.homeProduct,
          loading: false,
          errMess: action.errMess,
        },
      };
    case TYPE.GET_DETAIL:
      return {
        ...state,
        productDetail: {
          ...state.productDetail,
          loading: true,
        },
      };
    case TYPE.GET_DETAIL_SUCCESS:
      return {
        ...state,
        productDetail: {
          ...state.productDetail,
          loading: false,
          data: action.data,
        },
      };
    case TYPE.GET_DETAIL_ERROR:
      return {
        ...state,
        productDetail: {
          ...state.productDetail,
          loading: false,
          errMess: action.errMess,
        },
      };
    case TYPE.GET_HOME_PROPOSE:
      return {
        ...state,
        homePropose: {
          ...state.homePropose,
          loading: true,
        },
      };
    case TYPE.GET_HOME_PROPOSE_SUCCESS:
      return {
        ...state,
        homePropose: {
          ...state.homePropose,
          loading: false,
          data: action.data,
        },
      };
    case TYPE.GET_HOME_PROPOSE_ERROR:
      return {
        ...state,
        homePropose: {
          ...state.homePropose,
          loading: false,
          errMess: action.errMess,
        },
      };

    case TYPE.SEARCH_PRODUCT:
      return {
        ...state,
        productSearch: {
          ...state.productSearch,
          val: action.name,
          loading: true,
        },
      };
    case TYPE.SEARCH_PRODUCT_SUCCESS:
      return {
        ...state,
        productSearch: {
          ...state.productSearch,
          loading: false,
          data: action.data,
        },
      };
    case TYPE.SEARCH_PRODUCT_ERROR:
      return {
        ...initialState,
        productSearch: {
          ...initialState.productSearch,
          loading: false,
          errMess: action.errMess,
        },
      };

    case TYPE.GET_SUGGEST:
      return {
        ...state,
        productSuggest: {
          ...state.productSuggest,
          val: action.name,
          loading: true,
        },
      };
    case TYPE.GET_SUGGEST_SUCCESS:
      return {
        ...state,
        productSuggest: {
          ...state.productSuggest,
          loading: false,
          data: action.data,
        },
      };
    case TYPE.GET_SUGGEST_ERROR:
      return {
        ...initialState,
        productSuggest: {
          ...initialState.productSuggest,
          loading: false,
          errMess: action.errMess,
        },
      };

    case TYPE.GET_FEATURE:
      return {
        ...state,
        productFeature: {
          ...state.productFeature,
          val: action.name,
          loading: true,
        },
      };
    case TYPE.GET_FEATURE_SUCCESS:
      return {
        ...state,
        productFeature: {
          ...state.productFeature,
          loading: false,
          data: action.data,
        },
      };
    case TYPE.GET_FEATURE_ERROR:
      return {
        ...initialState,
        productFeature: {
          ...initialState.productFeature,
          loading: false,
          errMess: action.errMess,
        },
      };

    default:
      return state;
  }
};

export default productReducer;
