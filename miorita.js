/*
    Replicați funcționalitatea Mioriței, folosind obiecte.
    Miorița se află într-o stână infinită.
*/

const miorita = {
  x: 0,
  y: 0,
  move: function(moveX, moveY) {
    this.x = this.x + moveX;
    this.y = this.x + moveY;
  }
};

miorita.move(1, 3);
console.log(miorita.x, miorita.y);
// 1 3

miorita.move(1, -4);
console.log(miorita.x, miorita.y);
// 2 -1

miorita.move(0, 7);
console.log(miorita.x, miorita.y);
// 0 7
  
