//reverse in place by mutate the array itself

const reverseArrayInPlace=(arr)=>{
  let buffer;
  let index = arr.length-1;
  for(let i=0;i<Math.floor(arr.length/2);i++){
    buffer=arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i]=buffer;
    
    
  }
  return arr;
}

let array=[1,2,3,4,5];
console.log(reverseArrayInPlace(array));
