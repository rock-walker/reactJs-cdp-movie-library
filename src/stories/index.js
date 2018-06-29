import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Provider } from 'react-redux';

import { Button, Welcome } from '@storybook/react/demo';
import SearchButton from '../searchButton/SearchButton';
import SortBy from '../sortBy/sortBy.jsx';
import styles from '../sortBy/sortBy.css';
import configureStore from '../modules/configureStore';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

const store = configureStore()

storiesOf('SearchButton', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('default state', () => <SearchButton onClick={action('clicked')}>Search</SearchButton>)


storiesOf('Sort by element', module)
    .add('default state', () => <SortBy/>)