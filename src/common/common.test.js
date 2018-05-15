import React from 'react';
import {mount, configure} from 'enzyme';
import ErrorBoundary from '../common/ErrorBoundary';
import SearchBar from '../searchBar/SearchBar';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });


function DefectiveChild() {
    throw new Error('failed to display');
    return <div>Failed</div>;
}

describe('Error boundary', () => {
    test('catch error', () => {
        //const spy = expect.spyOn(ErrorBoundary.prototype, 'componentDidCatch');
        const component = renderer.create(<ErrorBoundary><DefectiveChild/></ErrorBoundary>);
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot();
        //expect(ErrorBoundary.prototype.componentDidCatch).toHaveBeenCalled();
    })

    test('display component correctly', () => {
        const component = renderer.create(<ErrorBoundary><SearchBar/></ErrorBoundary>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})