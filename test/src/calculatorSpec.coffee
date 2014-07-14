define ['calculator', 'lodash'], (Calculator, _) ->

  describe "Calculator", ->

    calc = {}

    beforeEach ->
      calc = new Calculator()

    describe "the add method", ->
      it "should add two positive numbers correctly", ->
        expect(calc.add 4, 5).toEqual 9
