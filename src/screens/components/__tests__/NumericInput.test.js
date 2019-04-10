import React from "react";
import NumericInput from "../NumericInput";
import renderer from "react-test-renderer";

test("NumericInput renders correctly", () => {
  const tree = renderer.create(<NumericInput />).toJSON();
  expect(tree).toMatchSnapshot();
});
