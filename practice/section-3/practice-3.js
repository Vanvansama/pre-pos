'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const collectionC = collect(collectionA);
  const result = dec(collectionC, objectB);
  return result;

}

function collect(collection) {
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
  console.log(result);
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