'use strict';

function countSameElements(collection) {
  const result = [];
  collection.forEach(element => {
    if (result.length == 0) {
      result.push({ name: element, summary: 1 });
      return;
    }
    element = element.replace(']','');
    let string = element.split(/[-:[]/);
    console.log(string)
    if (string.length > 1) {
      let index = result.findIndex((value, index, array) => value.name == string[0]);
      if (index >= 0) {
        result[index].summary = result[index].summary + Number(string[1]);
      } else {
        result.push({ name: string[0], summary: Number(string[1])});
      }
    } else {
      let index = result.findIndex((value, index, array) => value.name == element);
      if (index >= 0) {
        result[index].summary = result[index].summary + 1;
      } else {
        result.push({ name: element, summary: 1 });
      }
    }
  });
  console.log(result)
  return result;
}
