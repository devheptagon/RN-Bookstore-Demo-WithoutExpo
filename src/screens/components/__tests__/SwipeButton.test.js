import React from "react";
import SwipeButton from "../SwipeButton";
import renderer from "react-test-renderer";

test("SwipeButton renders correctly", () => {
  const tree = renderer.create(<SwipeButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
