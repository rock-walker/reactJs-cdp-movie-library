import React from 'react';
import App from '../app/App';
import StatusBar from '../statusBar/StatusBar';
import ResultBody from '../resultBody/ResultBody'
import {mount, configure} from 'enzyme';  
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('App', () => {
    test('render app', () => {
        const tree = renderer.create(
                <App/>
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sort movies', () => {
        //unsorted array;
        const app = mount(<App />);
        expect(app.state().movies[0].title).toBe("Kill bill v.1");
        
        var statusBarChange = app.find(StatusBar).prop('OnSortingChange');
        var resultBody = app.find(ResultBody);

        //sort by rate
        statusBarChange(false);
        var title = resultBody.props().movies[0].title;
        expect(title).toBe("Pulp fiction");

        //sort by date
        statusBarChange(true);
        title = resultBody.props().movies[0].title;
        expect(title).toEqual("Kill bill v.1");
    });
});