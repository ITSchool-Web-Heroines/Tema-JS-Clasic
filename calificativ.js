const notes = function (mark) {
  if (mark == 10 || mark == 9) {
    return console.log("FB");
  } else if (mark == 8 || mark == 7) {
    return console.log("B");
  } else if (mark == 6 || mark == 5) {
    return console.log("S");
  } else if (mark == 4 || mark == 3 || mark == 2 || mark == 1) {
    return console.log("IS");
  }
};

notes(10);
