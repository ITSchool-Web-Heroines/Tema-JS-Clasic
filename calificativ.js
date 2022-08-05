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
const nume = function calificative() {
    const note = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let nota = 10;
    let cal;
  
    for (let i = 0; i < note.length; i++) {
      if (nota >= 9) {
        cal = "FB";
      } else if (nota >= 7) {
        cal = "B";
      } else if (nota >= 5) {
        cal = "S";
      } else if (nota <= 4) {
        cal = "IS";
      }
      console.log(nota + ":" + cal);
    }
  };
  nume();
