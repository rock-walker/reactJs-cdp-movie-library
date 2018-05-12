import React from 'react';
import App from '../app/App';
import renderer from 'react-test-renderer';

it('render app', () => {
    const tree = renderer.create(
            <App/>
        ).toJSON();
    expect(tree).toMatchSnapshot();
});