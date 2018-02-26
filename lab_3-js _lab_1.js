/*
Web Development: Lab-3 - JavaScript Lab-1
Hunkar Lule
*/

/*Answer-1*/
function makeAbba(a, b) {
  return a + b + b + a;
}
console.log(makeAbba("Hi", "Bye"));
console.log(makeAbba("Yo", "Alice"));
console.log(makeAbba("What", "Up"));

/*========================================================*/
/*Answer-2*/
function endsLy(str) {
  return (str.trim().substring(str.trim().length - 2).toLocaleLowerCase() == "ly");
}
console.log(endsLy("oddly"));
console.log(endsLy("y"));
console.log(endsLy("oddy"));

/*========================================================*/

/*Answer-3*/
function firstHalf(str) {
  if (str.length % 2 != 0) {
    alert("please enter an even string");
    return "please enter an even string";
  }

  var substr1 = str.substring(str.length - 2);
  var substr1 = str.substring(str.length - 2);

  return (str.substring(0, str.length / 2));
}
console.log(firstHalf("WooHoo"));
console.log(firstHalf("HelloThere"));
console.log(firstHalf("abcdef"));


/*========================================================*/

/*Answer-4*/
function right2(str) {
  if (str.length < 2) {
    alert("please enter string with a length at least 2");
    return "please enter string with a length at least 2";
  }
  return str.slice(-2) + str.slice(0, str.length - 2);
}
console.log(right2("Hello"));
console.log(right2("java"));
console.log(right2("Hi"));

/*========================================================*/

/*Answer-5*/
function conCat(str1, str2) {
  if (str1.charAt(str1.length - 1) == str2.charAt(0)) {
    return str1 + str2.substring(1);
  } else {
    return str1 + str2;
  }
}
console.log(conCat("abc", "cat"));
console.log(conCat("dog", "cat"));
console.log(conCat("abc", ""));

/*========================================================*/

/*Answer-6*/
function frontAgain(str) {
  return (str.substring(0, 2) == str.substring(str.length - 2));
}
console.log(frontAgain("edited"));
console.log(frontAgain("edit"));
console.log(frontAgain("ed"));

/*========================================================*/

/*Answer-7*/
function deFront(str) {
  var firstChar = str.charAt(0);
  var secondChar = str.charAt(1);

  if (firstChar != 'a') {
    firstChar = "";
  }
  if (secondChar != 'b') {
    secondChar = "";
  }

  return firstChar + secondChar + str.substring(2);
}
console.log(deFront("Hello"));
console.log(deFront("java"));
console.log(deFront("away"));

/*========================================================*/

/*Answer-8*/
function withoutX2(str) {
  var firstChar = str.charAt(0);
  var secondChar = str.charAt(1);

  if (firstChar == 'x') {
    firstChar = "";
  }
  if (secondChar == 'x') {
    secondChar = "";
  }
  return firstChar + secondChar + str.substring(2);
}

console.log(withoutX2("xHi"));
console.log(withoutX2("Hxi"));
console.log(withoutX2("Hi"));

/*========================================================*/

/*Answer-9*/
function lastChars(a, b) {
  var firstChar = a.charAt(0);
  var secondChar = b.charAt(b.length - 1);

  if (firstChar == '') {
    firstChar = "@";
  }
  if (secondChar == '') {
    secondChar = "@";
  }
  return firstChar + secondChar;
}

console.log(lastChars("last", "chars"));
console.log(lastChars("yo", "java"));
console.log(lastChars("hi", ""));

/*========================================================*/

/*Answer-10*/
function middleTwo(str) {
  if (str.length < 2) {
    alert("please enter string with a length at least 2");
    return "please enter string with a length at least 2";
  }
  if (str.length % 2 != 0) {
    alert("please enter an even string");
    return "please enter an even string";
  }
  return str.slice(str.length / 2 - 1, str.length / 2 + 1);
}

console.log(middleTwo("string"));
console.log(middleTwo("code"));
console.log(middleTwo("Practice"));
