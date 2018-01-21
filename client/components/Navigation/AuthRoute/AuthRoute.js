import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

const instancePropTypes = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.instanceOf(Component)
])

const mapStateToProps = ({ login: { isLoggedIn } }) => ({
  isLoggedIn
})

@connect(mapStateToProps, null)
export default class AuthRoute extends Component {
  static propTypes = {
    component: instancePropTypes,
    redirect: instancePropTypes,
    redirectPath: PropTypes.string
  }

  static defaultProps = {
    redirectPath: '/'
  }

  renderRoute = ({ Component, ...rest }) => (
    <Component {...rest} />
  )

  renderRedirect = ({ RedirectComponent, redirectPath, ...rest }) => (
    RedirectComponent
    ? (
      <RedirectComponent {...rest} />
    ) : (
      <Redirect to={{
        pathname: redirectPath,
        state: {
          from: rest.location
        }
      }} />
    )
  )

  render () {
    const {
      component: Component,
      redirect: RedirectComponent,
      redirectPath,
      isLoggedIn,
      ...rest
    } = this.props

    return (
      <Route {...rest} render={(props) => {
        if (isLoggedIn) {
          return this.renderRoute({
            Component,
            ...props
          })
        } else {
          return this.renderRedirect({
            RedirectComponent,
            redirectPath,
            ...props
          })
        }
      }} />
    )
  }
}
