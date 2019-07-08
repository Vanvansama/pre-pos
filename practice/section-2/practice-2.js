'use strict';


function countSameElements(collection) {
  const result = [];
  collection.forEach(element => {
    if (result.length == 0) {
      result.push({ key: element, count: 1 });
      return;
    }
    let string = element.split('-');
    if (string.length > 1) {
      let index = result.findIndex((value, index, array) => value.key == string[0]);
      if (index >= 0) {
        result[index].count = result[index].count + Number(string[1]);
      } else {
        result.push({ key: string[0], count: Number(string[1])});
      }
    } else {
      let index = result.findIndex((value, index, array) => value.key == element);
      if (index >= 0) {
        result[index].count = result[index].count + 1;
      } else {
        result.push({ key: element, count: 1 });
      }
    }
  });
  return result;
}

