import React from 'react'
import { shallow } from 'enzyme'
import AuthRoute from './AuthRoute'

describe('components/Navigation/AuthRoute', () => {
  describe('Given this component', () => {
    describe('When it is rendered', () => {
      it('should exist', () => {
        const component = shallow(<AuthRoute />)
        expect(component.exists()).toBe(true)
      })
    })
  })
})
