import React from 'react'

import {
  Route,
  Switch
} from 'react-router-dom'

import { ThemeProvider } from 'glamorous'
import themeVariables from 'client/consts/themes'

import MainLayout from 'client/components/Layouts/Main'

import Home from 'client/views/Home'
import Login from 'client/views/Login'
import About from 'client/views/About'
import Blog from 'client/views/Blog'
import Contact from 'client/views/Contact'
import Faq from 'client/views/Faq'
import Features from 'client/views/Features'
import Status from 'client/views/Status'
import Chat from 'client/views/Chat'
import PageNotFound from 'client/views/PageNotFound'

const App = (props) => {
  return (
    <ThemeProvider theme={themeVariables}>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/about' component={About} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/faq' component={Faq} />
          <Route exact path='/features' component={Features} />
          <Route exact path='/status' component={Status} />
          <Route exact path='/chat' component={Chat} />
          <Route component={PageNotFound} />
        </Switch>
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
