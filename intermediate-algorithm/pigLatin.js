/**
 *
 * Translate the provided string to pig latin.
 * Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
 * If a word begins with a vowel you just add "way" to the end.
 * If a word does not contain a vowel, just add "ay" to the end.
 * Input strings are guaranteed to be English words in all lowercase.
 */

function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const regStartsVowel = /^[aeiou]/;
  const regVowel = /[aeiou]/g;

  if (regStartsVowel.test(str)) {
    return str.concat('way');
  } else if (!regVowel.test(str)) {
    return str.concat('ay');
  } else {
    return 'starts with a consonant and contains a vowel';
  }{

  }
}

console.log(translatePigLatin("bc"));
console.log(translatePigLatin("tavitas"));
console.log(translatePigLatin("tavitas"));
console.log(translatePigLatin("aaaaaaaaaaa"));
