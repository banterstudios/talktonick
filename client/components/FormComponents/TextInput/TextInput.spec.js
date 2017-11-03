import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import TextInput from './TextInput'

describe('components/FormComponents/TextInput', () => {
  describe('renders', () => {
    it('in default state', () => {
      const component = mount(<TextInput />)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })
  })
})
