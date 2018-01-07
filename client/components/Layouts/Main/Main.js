import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from 'client/components/Gui/Wrapper'
import Header from 'client/components/Common/Header'
import glamorous from 'glamorous'

const Content = glamorous.div(({ theme: { headerHeight } }) => ({
  position: 'relative',
  width: '100%',
  paddingTop: headerHeight
}))

const Main = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Content>
        { children }
      </Content>
    </Wrapper>
  )
}

Main.PropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node
  ])
}

export default Main
