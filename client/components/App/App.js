import React from 'react'

import {
  Route,
  Switch
} from 'react-router-dom'

import { ThemeProvider } from 'glamorous'
import { themeVariables } from 'client/consts/themes'

import MainLayout from 'client/components/Layouts/Main'

import Home from 'client/views/Home'
import Login from 'client/views/Login'
import PageNotFound from 'client/views/PageNotFound'

const App = (props) => {
  return (
    <ThemeProvider theme={themeVariables}>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route component={PageNotFound} />
        </Switch>
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
