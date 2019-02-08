Computer needs to allocate memory to remember things. Stack Overflow can occur when we have recursion and there’s no way to stop this recursive call.

It’s simply the computer saying “whoa whoa whoa, OK this is getting silly. I’m not remembering anymore things. I’m out of memory. I’m just going to error out.”

—

Recursive functions have two paths. One is the recursive case that is call the function again and run it. And then the base case that is stop calling the function.

—

3 Steps of creating recursive function

1. Identify the base case
2. Identify the recursive case
3. Get closer and closer and return when needed. Usually you have 2 returns

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
