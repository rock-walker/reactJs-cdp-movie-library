import React from 'react';
import renderer from 'react-test-renderer';
import AppFooter from '../appFooter/AppFooter';

test('Display footer', () => {
  const component = renderer.create(<AppFooter/>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
