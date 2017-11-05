import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import LazyImage from './LazyImage'

describe('components/Gui/LazyImage', () => {
  let initialProps

  beforeEach(() => {
    initialProps = {
    }
  })

  describe('renders', () => {
    it('in default state', () => {
      const component = mount(<LazyImage { ...initialProps} />)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })
  })
})
