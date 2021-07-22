/*
String Rotation: Assume you have a method isSubstringwhich checks if 
oneword is a substring of another. Given two strings, sl and s2, write 
code to check if s2 is a rotation of sl using only one call to isSubstring 
(e.g., "waterbottle" is a rotation of"erbottlewat"). 
*/

const stringRotation = (s1, s2) => {
  if (!s1 || !s2) return false;
  if (s1.length !== s2.length) return false;

  return (s1 + s1).includes(s2);
};

console.log(stringRotation("waterbottle", "erbottlewat")); // true
console.log(stringRotation("a", "aa")); // false
