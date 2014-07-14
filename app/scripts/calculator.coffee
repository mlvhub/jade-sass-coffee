define [], ->

  class Calculator
    add: (arr) ->
      arr.reduce (x, y) -> x + y
