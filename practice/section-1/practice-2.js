'use strict';

function collectSameElements(collectionA, collectionB) {
  const result = [];
  collectionA.forEach(element => {
    if (collectionB[0].indexOf(element) >= 0) {
      result.push(element);
    }
  });
  return result;
}

function collectSameElements2(collectionA, collectionB) {
  const result = [];
  collectionA.forEach(element => {
    collectionB[0].forEach(elementB => {
      if (element == elementB) {
        result.push(elementB);
      }
    });
  });
  return result;
}