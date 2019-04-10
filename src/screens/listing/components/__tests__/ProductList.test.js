import React from "react";
import { ProductList } from "../ProductList";
import renderer from "react-test-renderer";

test("ProductList renders correctly", () => {
  const tree = renderer.create(<ProductList />).toJSON();
  expect(tree).toMatchSnapshot();
});
