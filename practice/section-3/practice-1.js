'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for (let i = 0; i < collectionA.length; i++) {
    const element = collectionA[i];
    objectB.value.forEach(key => {
      if (element.key == key) {
        collectionA[i].count = collectionA[i].count-1;
        return;
      }
    });
  }
  return collectionA;
}
