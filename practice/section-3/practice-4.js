'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let collectionC = collect(collectionA);
  let result = dec(collectionC, objectB);
  return result;
}

function collect(collection) {
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

function dec(collectionA, objectB) {
  for (let i = 0; i < collectionA.length; i++) {
    const element = collectionA[i];
    objectB.value.forEach(key => {
      if (element.key == key) {
        let temp = parseInt(element.count/3);
        collectionA[i].count = collectionA[i].count-temp;
        return;
      }
    });
  }
  return collectionA;
}