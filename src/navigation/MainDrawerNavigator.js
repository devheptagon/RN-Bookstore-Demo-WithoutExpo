import React from "react";
import { createDrawerNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import MainTabNavigator from "./MainTabNavigator";
import AccountScreen from "../screens/AccountScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AddressScreen from "../screens/AddressScreen";
import { Pages, IconNames } from "../constants/Enums";

export default createDrawerNavigator({
  MainTabNavigator: {
    screen: MainTabNavigator,
    navigationOptions: {
      drawerLabel: Pages.Home,
      drawerIcon: ({ tintColor }) => <Icon name={IconNames.Home} size={30} />
    }
  },
  AccountScreen: {
    screen: AccountScreen,
    navigationOptions: {
      drawerLabel: Pages.Account,
      drawerIcon: ({ tintColor }) => <Icon name={IconNames.Account} size={30} />
    }
  },
  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: {
      drawerLabel: Pages.Settings,
      drawerIcon: ({ tintColor }) => (
        <Icon name={IconNames.Settings} size={30} />
      )
    }
  },
  AddressScreen: {
    screen: AddressScreen,
    navigationOptions: {
      drawerLabel: Pages.Address,
      drawerIcon: ({ tintColor }) => <Icon name={IconNames.Address} size={30} />
    }
  }
});
