'use strict';

/**
 * This function takes an array of words and group it into groups of anagram words.
 * Output array must contain only groups of two or more words. Groups and the output array must be sorted.
 * If input data has wrong type, the function returns null.
 * @param {String[]} input - array of words
 * @returns {String[][]} sorted array of anagrams
 */

const anagram = input => {
   if (!(Array.isArray(input) && input.some(elem => typeof elem !== 'string')) {
      return null;
   }

   const outputMap = new Map();

   input.forEach(item => {
      const keyWord = item.split('').sort().join('');
      if (outputMap.has(keyWord))
         outputMap.set(keyWord, [...outputMap.get(keyWord), item]);
      else
         outputMap.set(keyWord, [item]);
   });

   return [...outputMap.values()].filter(item => item.length > 1).map(item => item.sort()).sort();
};