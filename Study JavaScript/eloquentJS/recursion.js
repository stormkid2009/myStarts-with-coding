//Note:loops will be executed faster than recursive function.

function helpMe(myString,count){
    if (count==0){
        return 'finished';
    }else{
        return myString + helpMe(myString,count-1)
        /* 
        plz I need help + call the function => helpMe(myString,5)
        plz I need help + call the function => helpMe(myString,4)
        plz I need help + call the function => helpMe(myString,3)
        plz I need help + call the function => helpMe(myString,2)
        plz I need help + call the function => helpMe(myString,1)
         */
    }
}
/*console.log(helpMe(`plz I need help 
`,5));*/
function askHelp(count) {
    //conditional (ternary) operator => condition ? exprIfTrue : exprIfFalse
    return (count === 0) ?  (`no one need help!!`):
     (`${count} need help 
        `+ askHelp(count - 1));
}

console.log(askHelp(6));

//Some problems really are easier to solve with recursion than with loops.