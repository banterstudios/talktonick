import React from 'react'
import { shallow, mount } from 'enzyme'
import StatusLight from './StatusLight'

describe('components/Contacts/StatusLight', () => {
  describe('Given this component', () => {
    describe('When it is rendered', () => {
      it('should exist', () => {
        const component = shallow(<StatusLight />)
        expect(component.exists()).toBe(true)
      })
    })

    describe('When the prop "isActive"', () => {
      describe('And is not defined', () => {
        it('default to "false"', () => {
          const component = mount(<StatusLight />)
          expect(component.props().isActive).toBe(false)
        })
      })

      describe('And it is set to true', () => {
        it('render active state', () => {
          const component = mount(<StatusLight isActive />)
          expect(component.instance().props.isActive).toBe(true)
        })
      })
    })
  })
})
