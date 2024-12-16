function hello()
{
    console.log("Hey hello !");
}

function demo()
{
    hello();
}

demo();

//firstly demo stored into stack
//        hello will be pushed then 
//        hello whole executed and poped
//        then demo popped out 
// -- This nature called as a LIFO nature of the Stack



//how we can check for call stack into our browser 
// inspect  >> sources