const { it, expect } = require('@jest/globals')
const { rot } = require('./script')
const { transformKey } = require('./script')

describe('rot function', () => {
  /**
   * case1: string with caps, numbers and special characters with key between  0 and 26
   * case2:string with caps, numbers and special characters with key > 26
   */
  const case1 = rot('ABc123def_ )?', 2)
  const case2 = rot('ABc123def_ )?', 28)

  it('should return a string', () => {
    expect(typeof case1 === 'string').toBeTruthy()
  })

  it('should return the correct string when given string contains caps, special characters and numbers', () => {
    expect(case1).toBe('CDe123fgh_ )?')
  })
  it('should return the correct string when given string with caps, special characters and numbers and key > 26', () => {
    expect(case2).toBe('CDe123fgh_ )?')
  })
})

describe('transfromKey function', () => {
  /**
   * it should always return a number
   * it should return the right number when given a positive number
   * it should return the right number when given a positive number > 26
   * it should return the right number when given a negative number
   * it should return the right number when given a negative number < 26
   */

  case1 = transformKey(() => 1)
  case2 = transformKey(() => 27)
  case3 = transformKey(() => -1)
  case4 = transformKey(() => -27)
  it('should return a number', () => {
    expect(typeof case1 === 'number').toBeTruthy()
  })

  it('should return the right number when given a number > 26', () => {
    expect(case2).toEqual(25)
  })
  it('should return the right number when given a number < 0', () => {
    expect(case3).toEqual(1)
  })
  it('should return the right number when given a number < -26', () => {
    expect(case4).toEqual(1)
  })
})
