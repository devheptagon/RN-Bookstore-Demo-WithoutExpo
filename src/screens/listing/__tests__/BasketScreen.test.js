import React from "react";
import { BasketScreen } from "../BasketScreen";
import renderer from "react-test-renderer";
import { wrapWithMockReduxAndNavigator } from "../../../utils/testHelper";

test("BasketScreen renders correctly", () => {
  const component = wrapWithMockReduxAndNavigator(BasketScreen);
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
