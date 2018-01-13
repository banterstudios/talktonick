import React, { PureComponent } from 'react'
import LazyImage from 'client/components/Gui/LazyImage'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import { checkIfValueIsAllowedOrSetDefault } from 'client/utils/objectUtils'
import { defaultAvatar } from 'client/consts/images'

const getWidthAndHeight = (size) => {
  const dimension = ((size === 'sm') ? '32px' : (size === 'md') ? '48px' : '60px')

  return {
    width: dimension,
    height: dimension
  }
}

const Wrapper = glamorous.div(({
  size
}) => ({
  position: 'relative',
  borderRadius: '50%',
  overflow: 'hidden',
  ...getWidthAndHeight(size)
}))

const allowedSizes = ['sm', 'md', 'lg']
const defaultSize = 'lg'

export default class Avatar extends PureComponent {
  static propTypes = {
    size: PropTypes.string,
    src: PropTypes.string
  }

  static defaultProps = {
    size: defaultSize
  }

  render () {
    const { size, src, ...rest } = this.props

    return (
      <Wrapper size={checkIfValueIsAllowedOrSetDefault(size, allowedSizes, defaultSize)}>
        <LazyImage src={src || defaultAvatar} { ...rest } />
      </Wrapper>
    )
  }
}
