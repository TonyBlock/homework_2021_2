'use strict';

const anagram = function (input) {
   let outputMap = new Map()

   for (let word of input) {
      let keyWord = word.split('').sort().join('')
      if (outputMap.has(keyWord))
         outputMap.set(keyWord, outputMap.get(keyWord).concat(word))
      else
         outputMap.set(keyWord, [word])
   }

   outputMap.forEach((value, key, map) => {
      if (value.length > 1)
         value.sort()
      else
         map.delete(key)
   });

   return Array.from(outputMap.values()).sort();
};