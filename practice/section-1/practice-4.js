'use strict';

function collectSameElements(collectionA, objectB) {
  const result = [];
  collectionA.forEach(element => {
    if (objectB.value.indexOf(element.key) >= 0) {
      result.push(element.key);
    }
  });
  return result;

}

function collectSameElements2(collectionA, collectionB) {
  const result = [];
  collectionA.forEach(element => {
    collectionB.value.forEach(elementB => {
      if (element.key == elementB) {
        result.push(elementB);
      }
    });
  });
  return result;
}
