import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Main from './Main'

describe('components/Layouts/Main', () => {
  describe('@renders', () => {
    it('should render correctly', () => {
      const component = mount(<Main />)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })
  })
})
