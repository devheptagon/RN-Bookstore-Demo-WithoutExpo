import React from 'react';
import { ProductInfo } from '../ProductInfo';
import renderer from 'react-test-renderer';

test('ProductInfo renders correctly', () => {
  const dataItem = {
    "id": "GqTwl7-WZtUC",
    "volumeInfo": {
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=GqTwl7-WZtUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=GqTwl7-WZtUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
    },
  }

  const tree = renderer.create(<ProductInfo dataItem={dataItem} />).toJSON();
  expect(tree).toMatchSnapshot();
});