var assert = require('assert')
  , hold   = require('../index')

describe('hold', function () {
  it('should compose a one argument function', function () {
    var hello = hold(1, function (value) {
      return 'Hello, ' + value
    })

    var helloAnother = hello()

    assert.equal(helloAnother('Test'), 'Hello, Test')
  })

  it('should compose a three argument function', function () {
    var addMany = hold(3, function (a, b, c) {
      return a + b + c
    })

    var addTwoMany = addMany(2)
      , addSixMany = addTwoMany(4)
      , addManyAnother = addSixMany()

    assert.equal(addManyAnother(4), 10)
  })
})
