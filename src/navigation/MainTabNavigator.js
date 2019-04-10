import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import TabBarIcon from "../screens/components/TabBarIcon";
import HomeScreen from "../screens/listing/HomeScreen";
import FavouritesScreen from "../screens/listing/FavouritesScreen";
import RecentsScreen from "../screens/listing/RecentsScreen";
import ProductDetailScreen from "../screens/listing/ProductDetailScreen";
import BasketScreen from "../screens/listing/BasketScreen";
import AddressScreen from "../screens/AddressScreen";
import { Pages, IconNames } from "../constants/Enums";

const SearchStack = createStackNavigator({
  Home: HomeScreen,
  ProductDetail: ProductDetailScreen,
  Basket: BasketScreen,
  Address: AddressScreen
});
SearchStack.navigationOptions = {
  tabBarLabel: Pages.Home,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={IconNames.Home} />
  )
};

const FavouritesStack = createStackNavigator({
  Favourites: FavouritesScreen
});
FavouritesStack.navigationOptions = {
  tabBarLabel: Pages.Favourites,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={IconNames.FullHeart} />
  )
};

const RecentsStack = createStackNavigator({
  Recents: RecentsScreen
});
RecentsStack.navigationOptions = {
  tabBarLabel: Pages.Recents,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={IconNames.Recents} />
  )
};

export default createBottomTabNavigator(
  {
    SearchStack,
    FavouritesStack,
    RecentsStack
  },
  {
    lazy: true,
    initialRouteName: "SearchStack",
    backBehavior: "initialRoute"
  }
);
