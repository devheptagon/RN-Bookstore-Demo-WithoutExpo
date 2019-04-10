import React from 'react';
import {ProductMetaInfo} from '../ProductMetaInfo';
import renderer from 'react-test-renderer';
import { FormattedProvider } from 'react-native-globalize';
import Config from '../../../../config/appConfig'

test('ProductMetaInfo renders correctly', () => {
  const dataItem = {      
    "id": "GqTwl7-WZtUC",    
    "volumeInfo": {
     "title": "Google Hacks",
     "authors": [
      "Tara Calishain"
     ],     
     "publishedDate": "2003",
     "description": "Explains how to take advantage of Google's user interface, discussing how to filter results, use Google's special services, integrate Google applications into a Web site or Weblog, write information retrieval programs, and play games.",
     "industryIdentifiers": [
      {
       "type": "ISBN_10",
       "identifier": "0596004478"
      }
     ],     
     "averageRating": 4.0,     
     "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=GqTwl7-WZtUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=GqTwl7-WZtUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
     },     
    },
      "saleInfo": {
     "listPrice": {
      "amount": 18.99,
      "currencyCode": "GBP"
     }
   }
  }
  const component = <FormattedProvider locale={Config.locale} currency={Config.currency}>
    <ProductMetaInfo dataItem={dataItem} />
  </FormattedProvider>
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});