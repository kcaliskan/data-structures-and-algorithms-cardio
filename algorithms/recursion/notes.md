Computer needs to allocate memory to remember things. Stack Overflow can occur when we have recursion and there’s no way to stop this recursive call.

It’s simply the computer saying “whoa whoa whoa, OK this is getting silly. I’m not remembering anymore things. I’m out of memory. I’m just going to error out.”

—

Recursive functions have two paths. One is the recursive case that is call the function again and run it. And then the base case that is stop calling the function.

—

3 Steps of creating recursive function

1. Identify the base case
2. Identify the recursive case
3. Get closer and closer and return when needed. Usually you have 2 returns

-

New Rule: Everytime you are using a tree or converting something into a tree, consider recursion.

1. Divided into a number of subproblems that are smaller instances of the same problem.
2. Each instance of the subproblem is identical in nature.
3. The solutions of each subproblem can be sombined to solve the problem at hand.

-

Real-world examples of recursion -> https://stackoverflow.com/questions/105838/real-world-examples-of-recursion

-

Sample Function:

let counter = 0 ;
function inception(){
if(counter > 3){
return 'done';
}
counter++
return inception();
}

inception()
