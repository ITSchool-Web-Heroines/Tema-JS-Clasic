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
function calificative(a){
    let cal;
    
    if (a > 8 && a <= 10) {
      cal = "FB";
    } else if (a > 6 && a <= 8) {
      cal = "B";
    } else if (a > 4 && a <= 6) {
      cal = "S";
    } else if (a<= 4 && a> 0) {
      cal = "IS";
    }
    return cal;
    }
    
    console.log(calificative(4));