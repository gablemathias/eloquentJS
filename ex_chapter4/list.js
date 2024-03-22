let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

let new_v = {value: 4, rest: list};

// Array to List ~ arrayToList()
// Builds a list structure when given [1,2,3]
// Array -> List Object
// Example /\

let amazingArr = [1,2,3];

function arrayToList(arr) {
  let new_arr = arr.map((x) => x);

  function recursiveList(new_arr) {
    if (new_arr[0] == undefined) {
      return null;
    } else {
      return {value: new_arr.shift(), rest: arrayToList(new_arr)};
    }
  }
  return recursiveList(new_arr);
}

// console.log(arrayToList(amazingArr));
// console.log(amazingArr);

function listToArray(list) {
  let arr = [];
  function recursiveArray(lst) {
    if (lst.rest == null) {
      return arr.push(lst.value);
    } else {
      arr.push(lst.value);
      return recursiveArray(lst.rest);
    }
  }
  recursiveArray(list);
  return arr;
}

// console.log(listToArray(list));

function prepend(value, rest) {
  return {value, rest};
}

function nth(lst, number) {
  if(lst.rest == null) return undefined;

  if(number == 0) {
    return lst.value;
  } else {
    return nth(lst.rest, number-1);
  }
}

console.log(nth(arrayToList([10, 20, 30]), 1));
