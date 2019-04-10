import React from "react";
import { BasketListItem } from "../BasketListItem";
import renderer from "react-test-renderer";

test("BasketListItem renders correctly", () => {
  const tree = renderer.create(<BasketListItem dataItem={{}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
