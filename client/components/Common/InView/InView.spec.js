import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import InView from './Inview'

const DummyComponent = () => <div />

jest.useFakeTimers()

describe('components/Common/InView', () => {
  let initialProps

  beforeEach(() => {
    initialProps = {
      onVisible: jest.fn(() => {
        console.log('yes!')
      }),
      onHidden: jest.fn(() => {
        console.log('no!')
      })
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
    describe('@handleEvent', () => {
      it('should call onVisible', () => {
        const component = shallow(<InView { ...initialProps } />)
        component.instance().handleEvent()

        expect(initialProps.onHidden).toHaveBeenCalledTimes(1)
        component.unmount()
      })
    })
  })
})
