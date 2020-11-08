const { it, expect } = require('@jest/globals')
const { rot } = require('./script')

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
