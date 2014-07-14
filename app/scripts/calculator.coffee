define ['lodash'], (_) ->

  class Calculator
    add: ->
      _.reduce arguments, (x, y) -> x + y
