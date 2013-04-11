# Fundot Hold
Creates functions that only execute if the set number of arguments are given for the functional library [Fundot](https://github.com/chapel/fundot)

[![build status](https://secure.travis-ci.org/chapel/fundot-hold.png)](http://travis-ci.org/chapel/fundot-hold)

# Example

``` js
var hold = require('fundot-hold')

var giveMeThree = hold(3, function (one, two, three) {
  console.log({one: one, two: two, three: three})
})

giveMeThree(1)
giveMeThree(2, 2)
giveMeThree(3, 3, 3)

var giveMeOne = giveMeThree(4, 4)

giveMeOne()
giveMeOne(5)
```

```
$ node example/hold.js
{ one: 3, two: 3, three: 3 }
{ one: 4, two: 4, three: 5 }
```

# Methods

``` js
var hold = require('fundot-hold')
```

## hold(number, function)

Returns a function that will not call the passed function until the number of arguments given matches the original number required.

# Install

With [npm](https://npmjs.org) do:

```
npm install fundot-hold
```

# License

MIT
