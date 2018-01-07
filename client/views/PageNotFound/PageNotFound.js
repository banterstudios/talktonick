import React, { Component } from 'react'

import Wrapper from 'client/components/Gui/Wrapper'

class PageNotFound extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Wrapper className='page-not-found'>
        PageNotFound
      </Wrapper>
    )
  }
}

export default PageNotFound
