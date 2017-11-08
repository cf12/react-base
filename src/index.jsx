import React from 'react'
import { render } from 'react-dom'

import './index.html'

import Home from './scenes/Home/index.jsx'

class App extends React.Component {
  render () {
    return <Home />
  }
}

render(<App />, document.getElementById('app'))
