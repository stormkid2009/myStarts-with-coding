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
    for (let node = list; node; node = node.rest)//we can replace
    //node with node!=null
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

  /*helper function prepend , which
takes an element and a list and creates a new list that adds the element to the
front of the input list */

function prepend(value,list){
    return {value,rest:list};
}

/*function takes a list and a number and returns
the element at the given position in the list (with zero referring to the first
element) or undefined when there is no such element.
If you haven’t already, also write a recursive version of nth .*/

function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }