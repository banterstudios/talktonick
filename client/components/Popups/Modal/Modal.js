import React, { Component } from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'
import Overlay from 'client/components/Gui/Overlay'
import Fade from 'client/components/Transitions/Fade'
import FadeSlide from 'client/components/Transitions/FadeSlide'
import KEYCODE from 'client/consts/keycodes'
import { isFunction } from 'client/utils/objectUtils'

const Frame = glamorous.div(({ theme: { modalZIndex } }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: modalZIndex,
  transform: 'translateZ(1px)',
  padding: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

const ContentWrapper = glamorous.div(({ size, theme: { SIZE_XS_MAX } }) => {
  const desktopWidth = (size === 'sm') ? '350px' : (size === 'md') ? '480px' : '100%'
  const mobileWidth = '100%'

  return {
    position: 'relative',
    width: desktopWidth,
    [`@media all and (max-width: ${SIZE_XS_MAX}px)`]: {
      width: mobileWidth
    }
  }
})

export default class Modal extends Component {
  static propTypes = {
    open: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.any,
    size: PropTypes.string,
    allowKeyboard: PropTypes.bool
  }

  static defaultProps = {
    allowKeyboard: false,
    size: 'lg'
  }

  componentDidMount () {
    if (this.props.allowKeyboard) {
      this.bindKeyboardEvents()
    }
  }

  bindKeyboardEvents = () => {
    document.addEventListener('keyup', this.handleKeyboard, false)
  }

  handleKeyboard = ({ keyCode }) => {
    const { onClick, open } = this.props

    if (keyCode === KEYCODE.ESCAPE && isFunction(onClick) && open) {
      onClick()
    }
  }

  unBindKeyboardEvents = () => {
    document.removeEventListener('keyup', this.handleKeyboard, false)
  }

  componentWillUnmount () {
    if (this.props.allowKeyboard) {
      this.unBindKeyboardEvents()
    }
  }

  render () {
    const { open, children, onClick, size } = this.props

    return (
      <Fade isActive={open}>
        <Frame>
          <Overlay onClick={onClick} />
            <ContentWrapper size={size}>
              <FadeSlide isActive={open} direction='up'>
                {children}
              </FadeSlide>
            </ContentWrapper>
        </Frame>
      </Fade>
    )
  }
}
