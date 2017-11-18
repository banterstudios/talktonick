import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Header from './Header'

describe('components/Navigation/Header', () => {
  describe('@renders', () => {
    it('should render correctly', () => {
      const component = mount(<Header />)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })
  })
})
