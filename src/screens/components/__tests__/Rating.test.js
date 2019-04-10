import React from "react";
import Rating from "../Rating";
import renderer from "react-test-renderer";

test("Rating renders correctly", () => {
  const tree = renderer.create(<Rating />).toJSON();
  expect(tree).toMatchSnapshot();
});
