import React, { Component } from 'react'
import Button from 'client/components/Gui/Buttons/Button'
import Spinner from 'client/components/Common/Loaders/Spinner'

export default class SubmitButton extends Component {
  render () {
    const { children, submitting } = this.props

    return (
      <Button type='submit'>
        {
          submitting
          ? <Spinner />
          : children
        }
      </Button>
    )
  }
}
