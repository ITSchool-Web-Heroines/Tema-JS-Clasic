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
    let note=[1,2,3,4,5,6,7,8,9,10];
    let cal;
     for(let i=0;i<note.length;i++){
       note[i]=7;
      if (note[i]>8 && note[i]<=10) {
        cal = "FB";
      } else if (note[i]>6 && note[i]<=8 ) {
        cal = "B";
      } else if (note[i]>4 && note[i]<=6) {
        cal = "S";
      } else if (note[i] <= 4 && note[i]>0) {
        cal = "IS";
      } 
      console.log(note[i] + ":" + cal);
    }
  }
  
  nume();