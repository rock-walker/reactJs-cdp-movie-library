import 'isomorphic-fetch'
import 'babel-polyfill'
import React from 'react'
import { hot } from 'react-hot-loader'

import Hello from './components/Hello'

const Root = () => {
    <div>
        <h1>Server Side Rendering</h1>
        <Hello name="World" />
    </div>
}

export default hot(module)(Root)