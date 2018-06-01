import React, {Component} from 'react';
import '../searchFilter/searchFilter.css';
import VisibleSearchButton from '../containers/VisibleSearchButton';

class SearchFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchByTitle: true
        };

        this.toggleSearchFilter = this.toggleSearchFilter.bind(this);
    }

    toggleSearchFilter(saveToStore) {
        this.setState(prevState => ({
            searchByTitle: !prevState.searchByTitle
        }))

        let filter = !this.state.searchByTitle ? 'title' : 'genres'
        saveToStore(filter)
    }

    render() {
        const { onFilterClick } = this.props
        const { searchByTitle } = this.state
        return React.createElement(
            'div', {className: 'searchby'},

                React.createElement(
                    'span', {className: 'title'}, 'search by'
                ),
                
                React.createElement(
                    'label', {className: 'sTitle'},
                    React.createElement(
                        'input', {type: 'radio', name: 'toggle', checked: searchByTitle, onClick: () => this.toggleSearchFilter(onFilterClick)} ,
                    ),
                    React.createElement(
                        'span', null, 'title'
                    )
                ),

                React.createElement(
                    'label', {className: 'sGenre'},
                    React.createElement(
                        'input', {type: 'radio', name: 'toggle', checked: !searchByTitle, onClick: () => this.toggleSearchFilter(onFilterClick)} ,
                    ),
                    React.createElement(
                        'span', null, 'genres'
                    )
                ),

                <VisibleSearchButton />
        )
    }
}

export default SearchFilter;