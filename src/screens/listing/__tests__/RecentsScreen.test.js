import React from "react";
import { RecentsScreen } from "../RecentsScreen";
import renderer from "react-test-renderer";
import { wrapWithMockReduxAndNavigator } from "../../../utils/testHelper";

test("RecentsScreen renders correctly", () => {
  const component = wrapWithMockReduxAndNavigator(RecentsScreen);
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
