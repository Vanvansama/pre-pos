'use strict';

function createUpdatedCollection(collectionA, objectB) {
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
