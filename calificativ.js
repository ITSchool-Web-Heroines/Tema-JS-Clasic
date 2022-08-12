const notes = function (mark) {
  if (mark >= 9) {
    return "FB";
  }
  if (mark >= 7) {
    return "B";
  }
  if (mark >= 5) {
    return "S";
  }
  return "IS";
};

notes(10);
