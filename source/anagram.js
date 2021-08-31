'use strict';

/**
 * @description this function takes an array of words and group it into groups of anagram words.
 * Output array must contain only groups of two or more words. Groups and the output array must be sorted.
 * If input data has wrong type, the function returns null.
 * @param {String[]} input - array of words
 * @returns {String[][]} sorted array of anagrams
 */

const anagram = input => {
   if (!(input instanceof Array && input.find(item => typeof item != 'string') === undefined))
      return null;

   const outputMap = new Map();

   input.forEach((item, input) => {
      const keyWord = item.split('').sort().join('');
      if (outputMap.has(keyWord))
         outputMap.set(keyWord, [...outputMap.get(keyWord), item]);
      else
         outputMap.set(keyWord, [item]);
   });

   return [...outputMap.values()].filter(item => item.sort().length > 1).sort();
};