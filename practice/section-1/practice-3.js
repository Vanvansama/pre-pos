'use strict';

function collectSameElements(collectionA, objectB) {
  const result = [];
  collectionA.forEach(element => {
    if (objectB.value.indexOf(element) >= 0) {
      result.push(element);
    }
  });
  return result;
}


function collectSameElements2(collectionA, collectionB) {
  const result = [];
  collectionA.forEach(element => {
    collectionB.value.forEach(elementB => {
      if (element == elementB) {
        result.push(elementB);
      }
    });
  });
  return result;
}