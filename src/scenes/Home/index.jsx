import React from 'react'

import './index.scss'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <p>Hello World!</p>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
