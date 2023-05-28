function longestSubstr(str) {
  return str.replace(/[^a-zA-Z ]/g, "");
}
console.log(longestSubstr("Hello$#@ World123"));

// const str = "hello 123 !@#$%^WORLD?.";

// const noSpecialCharacters = str.replace(/[^a-zA-Z0-9 ]/g, "");
// console.log(noSpecialCharacters);
// const str = "Abc$defg&*1234";
// console.log(str.replace(/[^a-zA-Z ]/g, ""));
// .replace(/[^a-zA-Z ]/g, "")
