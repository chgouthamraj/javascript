//242. Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once

var isAnagram = function (s, t) {
  s = s.split('').sort();
  t = t.split('').sort();
  if (s.length == t.length) {
    for (i = 0; i < s.length; i++) {
      if (s[i] !== t[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};
