// Static arrays are fixed in size. We need to specify the size of the array in advance

// Dynamic array expands as you add more elements. So we don't need to determine the size ahead of time. 


// push
let strings = ['a', 'b', 'c', 'd'];

// * push can be 0(n) instead of 0(1) time to time because it can be need more space to add elements and dynamically create new element and loop through it while adding the new element.
strings.push('e');
