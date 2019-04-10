import React from "react";
import ToasterContent from "../ToasterContent";
import renderer from "react-test-renderer";

test("FlexView renders correctly", () => {
  const tree = renderer.create(<ToasterContent />).toJSON();
  expect(tree).toMatchSnapshot();
});
