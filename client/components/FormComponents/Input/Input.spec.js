import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Input from './Input'

describe('components/FormComponents/Input', () => {
  describe('renders', () => {
    it('in default state', () => {
      const component = mount(<Input />)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })
  })
})
