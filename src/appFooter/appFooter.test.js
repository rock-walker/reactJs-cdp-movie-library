import React from 'react';
import AppFooter from '../appFooter/AppFooter';
import renderer from 'react-test-renderer';

test('Display footer', () => {
    const component = renderer.create(<AppFooter/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});