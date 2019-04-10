import React from "react";
import NextButton from "../NextButton";
import renderer from "react-test-renderer";

test("NextButton renders correctly", () => {
  const tree = renderer.create(<NextButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
