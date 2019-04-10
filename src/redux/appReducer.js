import {
  SET_LOADING_TYPE,
  SET_PRODUCTS_TYPE,
  SET_PAGE_TYPE,
  SET_PAGE_TITLE_TYPE,
  SET_REFRESHING_TYPE,
  SET_MAIN_NAVIGATOR_TYPE,
  SET_FILTER_TYPE,
  UPDATE_BASKET_TYPE
} from "./actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isRefreshing: false,
  mainNavigator: null,
  filter: "",
  page: 1,
  pageTitle: "",
  basket: []
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS_TYPE:
      return {
        ...state,
        products:
          action.payload.products === null
            ? []
            : [...state.products, ...action.payload.products]
      };
    case SET_LOADING_TYPE:
      return { ...state, isLoading: action.payload.isLoading };
    case SET_REFRESHING_TYPE:
      return { ...state, isRefreshing: action.payload.isRefreshing };
    case SET_MAIN_NAVIGATOR_TYPE:
      return { ...state, mainNavigator: action.payload.mainNavigator };
    case SET_FILTER_TYPE:
      return { ...state, filter: action.payload.filter };
    case SET_PAGE_TYPE:
      return { ...state, page: action.payload.page };
    case SET_PAGE_TITLE_TYPE:
      return { ...state, pageTitle: action.payload.pageTitle };
    case UPDATE_BASKET_TYPE:
      return { ...state, basket: action.payload.basket };
    default:
      return state;
  }
}
