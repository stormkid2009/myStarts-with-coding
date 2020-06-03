function miniNum(x,y){
    return(x>y? `${y} is the mini number !` :`${x} is the mini number !`);
}
//console.log(miniNum(33,77));
function isEven(num){
    if (num === 0) { return (true) } 
    else if (num === 1) { return (false) } 
    else if (num<0){return isEven(-num)}
    else {return isEven(num - 2) };
}
//console.log(isEven(-1));
/* ok here is the solution :
if num=0 then it is even=true
if num=1 then it is odd=false
if num=negative value then -- will make it positive  and the recursion that
every time the function call itself  will reduce num by 2 until the value gonna be 1 or 0 */
//my update for the last function
function check(num){
    if(num<0){return check(-num)}
    else if(num%2===0){return `${num} is even !`}
    else{return `${num} is odd !`}
}
console.log(check(31));

function countChar(string,char) {
    let count = 0;
    for (let n = 0; n < string.length; n++) {

        if (string[n] === char) { count++ ;}

    }
    return count;
}
//console.log(countChar("Bchc",'c'));
//console.log(String('Baclhelor').split('l').length-1);
