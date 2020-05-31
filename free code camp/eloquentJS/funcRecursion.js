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
console.log(helpMe(`plz I need help 
`,5));