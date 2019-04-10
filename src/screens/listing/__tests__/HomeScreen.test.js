import React from "react";
import { HomeScreen } from "../HomeScreen";
import renderer from "react-test-renderer";
import { wrapWithMockReduxAndNavigator } from "../../../utils/testHelper";

test("HomeScreen renders correctly", () => {
  const component = wrapWithMockReduxAndNavigator(HomeScreen);
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
