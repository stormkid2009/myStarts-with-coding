function wrap(x){
    let local=x;
    return ()=> local;
}
let wrap1=wrap(2);
let wrap2=wrap(4);
//console.log(wrap1());
/*
closure simply is being able to reference a specific instance of a local binding in
an enclosing scope[the function which access and return local binding]
ok then wrap1 won't affect wrap2(both of them refer to the same function 'wrap')
*/
//console.log(wrap2());
function multiplier(factor) {
    //we gonna access the function :
    return number => number * factor;
    }
    //factor value is 3
    let third = multiplier(3);
    //third will assign 6 to the variable number and do the multiplication process.
    console.log(third(6));