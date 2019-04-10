import React from "react";
import { FormattedCurrency } from "react-native-globalize";
import { createStackNavigator, createAppContainer } from "react-navigation";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import AppConfig from "../config/appConfig";

export const formatMoney = amount => {
  return <FormattedCurrency value={amount} />;
};

export const getRandomInt = (min, max) => {
  const rnd = Math.floor(Math.random() * Math.floor(max));
  return rnd < min ? min : rnd;
};

export const buildQueryUrl = (keyword, page) => {
  const { apiBaseUrl, pageSize } = AppConfig;
  return `${apiBaseUrl}?q=intitle:${keyword}&startIndex=${(page - 1) *
    pageSize}&maxResults=${pageSize}`;
};

export const buildDTOList = data => {
  let result = [];
  data.map(d => {
    const { volumeInfo, saleInfo, id } = d;
    const {
      imageLinks,
      title,
      subtitle,
      authors,
      publishedDate,
      averageRating,
      description,
      industryIdentifiers
    } = volumeInfo;
    const { listPrice } = saleInfo;
    const isbn =
      industryIdentifiers &&
      industryIdentifiers.length &&
      industryIdentifiers[0];
    result.push({
      id,
      volumeInfo: {
        imageLinks,
        title,
        subtitle,
        authors,
        publishedDate,
        averageRating
      },
      saleInfo: { listPrice },
      description,
      isbn
    });
  });
  return result;
};

export const flattenArray = style => {
  let result = {};
  style.forEach(element => {
    result = { ...result, ...element };
  });
  return result;
};

export const delay = duration =>
  new Promise(resolve => setTimeout(resolve, duration));

export const calculateBasketItemCount = basket => {
  return basket ? basket.reduce((acc, item) => acc + item.count, 0) : 0;
};
