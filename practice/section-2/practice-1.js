'use strict';

function countSameElements(collection) {
  const result = [];
  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];
    if (result.length == 0) {
      result.push({key:element,count: 1});
      continue;
    }
    for (let j = 0; j < result.length; j++) {
      const object = result[j];
      if (object.key == element) {
        result[j].count = result[j].count+1;
        break;
      }
      if (j == result.length-1) {
        result.push({key:element,count: 1});
        break;
      }
    }
  }
  return result;
}

function countSameElements2(collection) {
  const result = [];
  collection.forEach(element => {
    if (result.length == 0) {
      result.push({key:element,count: 1});
      return;
    }
    let index = result.findIndex((value, index, array) => value.key == element);
    if(index >= 0){
      result[index].count = result[index].count+1;
    } else {
      result.push({key:element,count: 1});
    }
  });
  return result;
}