import React from "react";
import { Focusable } from "../Focusable";
import renderer from "react-test-renderer";
import { wrapWithMockReduxAndNavigator } from "../../../utils/testHelper";

test("Focusable renders correctly", () => {
  const component = wrapWithMockReduxAndNavigator(Focusable);
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
