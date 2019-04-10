import React from "react";
import { ProductImage } from "../ProductImage";
import renderer from "react-test-renderer";

test("ProductImage renders correctly", () => {
  const tree = renderer.create(<ProductImage />).toJSON();
  expect(tree).toMatchSnapshot();
});
