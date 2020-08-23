const myObject={a:2,b:5,user(name){
    return `hello ${name}`;
}};
const newObject={...myObject};
// console.log(newObject['user']('anwar'));//access object  via bracket notation
// console.log(newObject.b);//access object via dot notation
const otherObject=(x,y)=>{x,y};
otherObject['x']=25;
otherObject['y']=55;
//console.log(otherObject.x,otherObject.y);
//ctrl+k+c  to comment block of code
//ctrl+k+u  to uncomment block of code
const mainFunc=function(x){
    const subFunc=function(y=2){
        let sum=x*y;
        return sum;
    }
    return subFunc(5);
    //ok if we tried to break the scope of inner function ===>
    //return sum;
    //we have got error as the mainFunc can not see the params of subFunc
    //but subFunc can see the 'x' the param of mainFunc.
}
console.log(mainFunc(4));