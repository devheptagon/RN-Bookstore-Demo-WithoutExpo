import {
  SET_LOADING_TYPE,
  SET_MAIN_NAVIGATOR_TYPE,
  SET_PAGE_TITLE_TYPE,
  SET_REFRESHING_TYPE,
  SET_FILTER_TYPE,
  SET_PAGE_TYPE,
  SET_PRODUCTS_TYPE,
  UPDATE_BASKET_TYPE
} from "./actionTypes";

export const setLoadingAction = isLoading => ({
  type: SET_LOADING_TYPE,
  payload: { isLoading }
});

export const setRefreshingAction = isRefreshing => ({
  type: SET_REFRESHING_TYPE,
  payload: { isRefreshing }
});

export const setMainNavigatorAction = navigator => ({
  type: SET_MAIN_NAVIGATOR_TYPE,
  payload: { mainNavigator: navigator }
});

export const setFilterAction = filter => ({
  type: SET_FILTER_TYPE,
  payload: { filter }
});

export const setPageAction = page => ({
  type: SET_PAGE_TYPE,
  payload: { page }
});

export const setProductsAction = products => ({
  type: SET_PRODUCTS_TYPE,
  payload: { products }
});

export const setPageTitleAction = pageTitle => ({
  type: SET_PAGE_TITLE_TYPE,
  payload: { pageTitle }
});

export const updateBasketAction = basket => ({
  type: UPDATE_BASKET_TYPE,
  payload: { basket }
});
