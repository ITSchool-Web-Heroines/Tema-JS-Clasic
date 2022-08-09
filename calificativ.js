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

function calificativ(num) {
    if (num <= 0) {
      return "unexistent";
    } 
    
    else if (num > 0 && num < 5) {
      return "IS";
    } 
    
    else if (num < 7) {
      return "S";
    } 
    
    else if (num < 9) {
      return "B";
    } 
    
    else if (num <= 10) {
      return "FB"; 
    }
  
    else return "unexistent";
  }
  
  console.log(calificativ(-1));
