//array to linked list
function arrayToList(arr) {
    let list = null;
    for (i = arr.length - 1; i >= 0; i--)
        list = { value: arr[i], rest: list }
    return list;
}
//we gonna iterate from the end of array to the beginning
//we will add item to the tail of the list until we reach the head
//array=[1,2,3]
//list={value:1,rest:null}
//list={value:2,rest:{value:1,rest:null}}
//list={value:3,rest:{value:2,rest:{value:1,rest:null}}}



//linked list to array
function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest)
        array.push(node.value);
    return array;

}
  //node=list  means we can access list properties with variable node
  //while node is true means != null
  //array.push(node.value)  ==> array=[1]
  //we gonna jump into internal object with node.rest
  //array.push(node.value) ==> array=[1,2]
  //we gonna jump into internal object with node.rest
  //array.push(node.value) ==> array=[1,2,3]