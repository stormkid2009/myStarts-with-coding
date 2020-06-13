function deepEqual(a,b){
    if(a===b)return true;
    if(a==null||b==null||typeof a!="object"||typeof b!="object")return false;
    let keysA = Object.keys(a), keysB = Object.keys(b);
    if (keysA.length != keysB.length) return false;
    for(let key of keysA){
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    return true;
  }
  console.log(deepEqual({a:1,c:3},{a:1,c:3}));
  //2- deepEqual(1,1) output true.
  //3 output false if first value is null or not object
  // or second value is null or not object.
  //4- keysA = an array of the keys of object a and the same keysB
  //5- if length of arrays is not equal output is false.
  //6- looping over the items of the first array'keysA' to check
  //7- that all the keys is included in second array'keysB' if not
  //ouput gonna be false.
  //output will be false too if the value of key in first list
  //are not the same with the opposite in second list
  //notice we use recursion to check the values.
  //9- output will be true if we passed the previous tests of if

