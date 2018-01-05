import React, { Component } from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'
import Overlay from 'client/components/Gui/Overlay'
import Fade from 'client/components/Transitions/Fade'

const Frame = glamorous.div(({ theme: { modalZIndex } }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: modalZIndex,
  padding: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

const ContentWrapper = glamorous.div(() => ({
  position: 'relative',
  width: '100%'
}))

export default class Modal extends Component {
  static propTypes = {
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.any
  }

  render () {
    const { isActive, children, onClick } = this.props

    return (
      <Fade isActive={isActive}>
        <Frame>
          <Overlay onClick={onClick} />
          <ContentWrapper>
            {children}
          </ContentWrapper>
        </Frame>
      </Fade>
    )
  }
}
