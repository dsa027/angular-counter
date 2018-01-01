angular.module("counter", [])
  .controller("CounterController", CounterController)

function CounterController() {
  this.number = 0
  this.by = 5
  this.increment = (num) => this.number += isNaN(parseInt(num)) ? 1 : parseInt(num)
  this.decrement = (num) => this.number -= isNaN(parseInt(num)) ? 1 : parseInt(num)
}
