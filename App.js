// App.js

import React, { useState } from 'react'
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

export default class App extends React.Component {

  render() {
    return (
      <Provider store={Store}>
        <Navigation style={{ fontFamily: 'Roboto'}}/>
      </Provider>
    )
  }
}
