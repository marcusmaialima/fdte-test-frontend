import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import MapPage from 'pages/Map'
import HomePage from 'pages/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/map">
          <MapPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
