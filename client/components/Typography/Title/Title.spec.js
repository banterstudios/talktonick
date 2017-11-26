import React from 'react'
import { shallow } from 'enzyme'
import Title from './Title'

describe('components/Typography/Title', () => {
  describe('@renders', () => {
    it('should render correctly', () => {
      const component = shallow(<Title />)

      expect(component.exists()).toBe(true)
      component.unmount()
    })
  })
})
