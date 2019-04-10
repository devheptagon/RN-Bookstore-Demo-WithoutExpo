import React from "react";
import AccountScreen from "../AccountScreen";
import renderer from "react-test-renderer";
import { wrapWithMockReduxAndNavigator } from "../../utils/testHelper";

test("AccountScreen renders correctly", () => {
  const component = wrapWithMockReduxAndNavigator(AccountScreen);
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
