var utils = require('fundot-utils')
  , partial  = require('fundot-partial').left

module.exports = function hold(num, fun) {
  return function () {
    var args   = utils.toArray(arguments)
      , length = args.length

    if (!length) {
      return hold(num, fun)
    }

    if (length < num) {
      var newArgs = [fun].concat(args)
      return hold(num - length, partial.apply(this, newArgs))
    }

    return fun.apply(this, args)
  }
}
