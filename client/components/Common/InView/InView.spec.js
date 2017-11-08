import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import InView from './Inview'

const DummyComponent = () => <div />

describe('components/Common/InView', () => {
  let initialProps

  beforeEach(() => {
    initialProps = {
      onVisible: jest.fn(),
      onHidden: jest.fn()
    }
  })

  describe('@renders', () => {
    it('in default state', () => {
      const component = shallow(<InView { ...initialProps } />)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })

    it('with react node children', () => {
      const component = shallow(<InView { ...initialProps }><DummyComponent /></InView>)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })

    it('with react element children', () => {
      const component = shallow(<InView { ...initialProps }><div /></InView>)

      expect(toJson(component)).toMatchSnapshot()
      component.unmount()
    })
  })

  describe('@instance methods', () => {

  })
})
