import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from '../searchBar/SearchBar';

configure({ adapter: new Adapter() });

describe('SearchBar component', () => {
  test('text input', () => {
    const searchBar = shallow(<SearchBar />);

    expect(searchBar.state().searchText).toBe('');

    const ev = { target: { value: 'test123' } };
    const input = searchBar.find('input');
    input.simulate('change', ev);

    expect(searchBar.state().searchText).toBe('test123');
  });
});
