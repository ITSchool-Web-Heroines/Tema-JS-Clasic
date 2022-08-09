/*
    Scrie o funcție care primește ca parametru un număr și întoarce un calificativ.
    Încearcă să scrii cât mai puține instrucțiuni.
    
    Calificative:
    10: FB
     9: FB
     8: B
     7: B
     6: S
     5: S
     4: IS
     3: IS
     2: IS
     1: IS
*/

const calificativ = function(calif) {
let array = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i <arguments.length; i++) {
    if(arguments[i] > 8 && arguments[i]<=10) {
        calif ="FB";
    }
    else if (arguments[i] > 4 && arguments[i]<=6) {
          calif="S";
    }
    else if (arguments[i] <= 4 && arguments[i]>1) {
        calif="IS";}

}
        return calif;
}
console.log(calificativ(3));