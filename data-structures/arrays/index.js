// https://www.pdiniz.com/time-complexity-of-javascripts-built-in-methods/

let strings = ['a', 'b', 'c']

//push
strings.push('e'); //O(1)

//pop
strings.pop(); //O(1)

//unshift
strings.unshift('x'); //O(n)

//splice
strings.unshift(2, 0, 'alien'); //O(n)