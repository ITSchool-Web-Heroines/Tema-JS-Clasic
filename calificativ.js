const notes = function (mark) {
  if (mark == 10 || mark == 9) {
    console.log("FB");
  } else if (mark == 8 || mark == 7) {
    console.log("B");
  } else if (mark == 6 || mark == 5) {
    console.log("S");
  } else if (mark == 4 || mark == 3 || mark == 2 || mark == 1) {
    console.log("IS");
  }
};

notes(10);
