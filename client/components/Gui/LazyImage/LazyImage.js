import React, { Component } from 'react'

import PropTypes from 'prop-types'

class LazyImage extends Component {
  static PropTypes = {
    src: PropTypes.string
  }

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div />
    )
  }
}

export default LazyImage
