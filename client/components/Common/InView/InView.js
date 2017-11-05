import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { isElemInView } from 'client/utils/domUtils'

class InView extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { children } = this.props

    return (
      <div>
        { children }
      </div>
    )
  }
}

export default InView
