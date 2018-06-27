import { configure } from '@storybook/react';
import 'babel-polyfill';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
