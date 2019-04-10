import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";
import { Text, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
import { setFilter } from "../../services/repos/productRepo";
import FlexView from "../components/FlexView";
import BasketStatusIcon from "../basket/components/BasketStatusIcon";
import BackButton from "../components/BackButton";
import {
  Pages,
  FlexAlign,
  FlexDirections,
  IconNames
} from "../../constants/Enums";
import { calculateBasketItemCount } from "../../utils/helper";
import Theme from "../../constants/Theme";
import Texts from "../../constants/Texts";

export class HeaderBar extends React.Component {
  state = {
    search: ""
  };

  updateSearch = search => {
    this.setState({ search });

    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => setFilter(search), 1000);
  };

  componentWillUnmount() {
    if (this.timer) clearTimeout(this.timer);
  }

  renderTitleContent = () => {
    const { pageTitle } = this.props;
    switch (pageTitle) {
      case "":
      case Pages.Home:
        return null;
      case Pages.ProductDetail:
      case Pages.Basket:
      case Pages.Address:
        return <BackButton navigator={this.props.mainNavigator} />;
      default:
        return <Text style={styles.TitleText}>{pageTitle}</Text>;
    }
  };

  render() {
    const { mainNavigator, basket, pageTitle } = this.props;
    const searchBarVisibility =
      pageTitle === Pages.Home || pageTitle === "" ? "flex" : "none";
    const titleVisibility =
      pageTitle === Pages.Home || pageTitle === "" ? "none" : "flex";
    return (
      <FlexView
        flex={0}
        flexDirection={FlexDirections.Row}
        alignItems={FlexAlign.Center}
        justifyContent={FlexAlign.SpaceBetween}
        style={styles.Wrapper}
      >
        <SearchBar
          placeholder={Texts.SearchText}
          onChangeText={this.updateSearch}
          value={this.state.search}
          containerStyle={[
            styles.SearchBarContainer,
            { display: searchBarVisibility }
          ]}
        />
        <FlexView
          alignItems={FlexAlign.FlexStart}
          style={[styles.TitleContainer, { display: titleVisibility }]}
        >
          {this.renderTitleContent()}
        </FlexView>
        <BasketStatusIcon
          itemCount={calculateBasketItemCount(basket)}
          onPress={() => mainNavigator.navigate(Pages.Basket)}
        />
        <Icon
          name={IconNames.HamburgerMenu}
          size={25}
          style={styles.HamburgerMenu}
          onPress={() => mainNavigator.toggleDrawer()}
        />
      </FlexView>
    );
  }
}

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: Theme.HeaderBar.BackgroundColor,
    borderColor: Theme.HeaderBar.BorderColor,
    borderBottomWidth: Theme.General.Border.Width
  },
  HamburgerMenu: {
    color: Theme.HeaderBar.IconColor,
    marginLeft: 15,
    marginTop: 5,
    marginRight: 15
  },
  TitleContainer: {
    padding: 12,
    color: Theme.HeaderBar.TextColor
  },
  TitleText: {
    fontSize: Theme.General.Text.FontXBig,
    fontWeight: Theme.General.Text.FontBold,
    color: Theme.HeaderBar.TextColor
  },
  SearchBarContainer: {
    flex: 1,
    backgroundColor: Theme.HeaderBar.SearchBoxBackgroundColor,
    borderWidth: 0,
    shadowColor: Theme.HeaderBar.SearchBoxShadowColor,
    borderBottomColor: Theme.HeaderBar.SearchBoxBackgroundColor,
    borderTopColor: Theme.HeaderBar.SearchBoxBackgroundColor,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 0
  }
});

HeaderBar.propTypes = {
  mainNavigator: PropTypes.object,
  basket: PropTypes.array,
  pageTitle: PropTypes.string
};

const mapStateToProps = state => {
  const {
    appReducer: { mainNavigator, pageTitle, basket }
  } = state;
  return {
    mainNavigator,
    pageTitle,
    basket
  };
};

export default connect(mapStateToProps)(HeaderBar);
