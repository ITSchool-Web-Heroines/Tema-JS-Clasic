/*
    Replicați funcționalitatea Mioriței, folosind obiecte.
    Miorița se află într-o stână infinită.
*/

const miorita = {
    x: 0,
    y: 0,
    move: function() {
        this.x = this.x + 1;
        this.y = this.y + 3;
    },
    move: function() {
        this.x = this.x + 1;
        this.y = this.y - 4;
    },
};

miorita.move(1, 3);
console.log(miorita.x, miorita.y);
// 1 3

miorita.move(1, -4);
console.log(miorita.x, miorita.y);
// 2 -1