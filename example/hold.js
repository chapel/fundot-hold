var hold = require('../index')

var giveMeThree = hold(3, function (one, two, three) {
  console.log({one: one, two: two, three: three})
})

giveMeThree(1)
giveMeThree(2, 2)
giveMeThree(3, 3, 3)

var giveMeOne = giveMeThree(4, 4)

giveMeOne()
giveMeOne(5)
