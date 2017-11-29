import { allowOnly, omit } from './objectUtils'

describe('utils/objectUtils', () => {
  describe('@omit', () => {
    it('should return correct object based on omit props array', () => {
      const omitProps = ['test', 'test2']

      const obj = {
        test: 'test',
        test2: 'test2',
        please: 'please',
        be: 'be',
        here: 'here'
      }

      const expectedObj = {
        please: 'please',
        be: 'be',
        here: 'here'
      }

      expect(omit(obj, omitProps)).toMatchObject(expectedObj)
    })

    it('should throw an error', () => {
      expect(() => { omit({}, null) }).toThrow()
      expect(() => { omit(null, []) }).toThrow()
      expect(() => { omit(null, null) }).toThrow()
    })

    it('should return an empty object', () => {
      const obj = {
        test: 'test',
        test2: 'test2'
      }

      expect(allowOnly(obj, [])).toMatchObject({})
    })
  })

  describe('@allowOnly', () => {
    it('should return correct object based on allowedProps array', () => {
      const allowedProps = ['test', 'test2']

      const obj = {
        test: 'test',
        test2: 'test2',
        dont: 'dont',
        be: 'be',
        here: 'here'
      }

      const expectedObj = {
        test: 'test',
        test2: 'test2'
      }

      expect(allowOnly(obj, allowedProps)).toMatchObject(expectedObj)
    })

    it('should throw an error', () => {
      expect(() => { allowOnly({}, null) }).toThrow()
      expect(() => { allowOnly(null, []) }).toThrow()
      expect(() => { allowOnly(null, null) }).toThrow()
    })

    it('should return an empty object', () => {
      const obj = {
        test: 'test',
        test2: 'test2'
      }

      expect(allowOnly(obj, [])).toMatchObject({})
    })
  })
})
