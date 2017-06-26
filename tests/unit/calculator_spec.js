var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('can add two numbers from zero', function(){
    calculator.add(1)
    assert.equal(calculator.runningTotal, 1)
  })

  it('can add two numbers from non-zero', function(){
    calculator.previousTotal = 5
    calculator.add(1)
    assert.equal(calculator.runningTotal, 6)
  })

  it('can subtract two numbers from zero', function(){
    calculator.subtract(1)
    assert.equal(calculator.runningTotal, -1)
  })

  it('can subtract two numbers from non-zero', function(){
    calculator.previousTotal = 5
    calculator.subtract(1)
    assert.equal(calculator.runningTotal, 4)
  })

  it('can multiply two numbers from zero', function(){
    calculator.multiply(2)
    assert.equal(calculator.runningTotal, 0)
  })

  it('can multiply two numbers from non-zero', function(){
    calculator.previousTotal = 5
    calculator.multiply(2)
    assert.equal(calculator.runningTotal, 10)
  })

  it('can divide two numbers from zero', function(){
    calculator.divide(2)
    assert.equal(calculator.runningTotal, 0)
  })

  it('can divide two numbers from non-zero', function(){
    calculator.previousTotal = 8
    calculator.divide(2)
    assert.equal(calculator.runningTotal, 4)
  })

  it('can divide two floats from non-zero', function(){
    calculator.previousTotal = 7
    calculator.divide(2)
    assert.equal(calculator.runningTotal, 3.5)
  })

  it('can use operatorClick to add two numbers', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(1)
    assert.equal(calculator.runningTotal, 1)
  })

  it('can use operatorClick to add three numbers', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 9)
  })

  it('can concatenate numtiple number button clicks', function(){
    calculator.numberClick(1)
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(1)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 13)
  })

  it('can use chain different operations together', function(){
    calculator.numberClick(1)
    calculator.operatorClick('-')
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 7)
  })

  it('can clear the runningTotal', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.clearClick()
    assert.equal(calculator.runningTotal, 0)
  })


});