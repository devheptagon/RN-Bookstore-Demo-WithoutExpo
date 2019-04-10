import React from "react";
import { ProductDetailScreen } from "../ProductDetailScreen";
import renderer from "react-test-renderer";
import { wrapWithMockReduxAndNavigator } from "../../../utils/testHelper";

test("ProductDetailScreen renders correctly", () => {
  const component = wrapWithMockReduxAndNavigator(ProductDetailScreen);
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
