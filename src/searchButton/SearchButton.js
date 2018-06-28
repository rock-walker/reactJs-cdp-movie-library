import React from 'react';
import { call, put } from 'redux-saga/effects';
import {
  fetchPostsIfNeeded,
  setSearchFilter,
} from '../actions';

import jss from 'jss';
import injectSheet from 'react-jss';


const style = {
      button: {
      padding: '10px 70px',
      float: 'right',
      'background-color': '#f55263',
      color: 'white',
      'font-weight': 'bold',
      'font-size': '16px'
    }
  }

class SearchButton extends React.PureComponent {
  constructor(classes) {
    super();
  }

  componentWillMount(nextProps) {
    const { match } = this.props;
    const fullQuery = match.params[0];
    if (fullQuery && fullQuery.match('\/search\/(.+)')) {
      setSearchFilter('title');
      fetchPostsIfNeeded();
    }
  }

  render() {
    const { query, history, classes } = this.props;

    return (
            <div>
               <input type="button" value="SEARCH" className={classes.button} onClick={ () => {
                 history.push(`/search/${query}`);
                 fetchPostsIfNeeded();
               }}/>
            </div>
    );
  }
}

export default injectSheet(style)(SearchButton);
