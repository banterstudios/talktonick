import React, { Component } from 'react'

import InView from 'client/components/Common/InView'

import PropTypes from 'prop-types'

import { getImage } from 'client/utils/imageUtils'

class LazyImage extends Component {
  static PropTypes = {
    src: PropTypes.string,
    useBgImage: PropTypes.bool
  }

  static defaultProps = {
    useBgImage: false
  }

  constructor (props) {
    super(props)

    this.state = {
      loaded: false,
      error: false,
      isLoading: false,
      visible: null
    }

    this.imagePromise = null
  }

  componentWillUnmount () {
    this.cancelFetchIfFetching()
  }

  cancelFetchIfFetching () {
    if (this.imagePromise && this.imagePromise.cancel) {
      this.imagePromise.cancel()
      this.imagePromise = null
    }
  }

  handleImageLoad = () => {
    this.setState({
      loaded: true,
      isLoading: false,
      error: false
    })
  }

  handleImageError = () => {
    this.setState({
      loaded: false,
      error: true,
      isLoading: false
    })
  }

  fetchImage (src = this.props.src) {
    const { isLoaded, isLoading } = this.state

    if (!src || isLoaded || isLoading) {
      return false
    }

    this.imagePromise = getImage(src)
    .then(this.handleImageLoad)
    .catch(this.handleImageError)
  }

  shouldComponentUpdate (nextProps, { loaded }) {
    return loaded
  }

  componentWillReceiveProps ({ src }, { isVisible }) {
    if (src !== this.props.src && isVisible) {
      this.fetchImage(src)
    }
  }

  handleVisibility = (isVisible) => {
    this.setState({ isVisible })
    isVisible && this.fetchImage()
  }

  renderImage () {
    const {
      useBgImage
    } = this.props
  }

  render () {
    return (
      <InView onChange={this.handleVisibility}>
        { this.renderImage() }
      </InView>
    )
  }
}

export default LazyImage
