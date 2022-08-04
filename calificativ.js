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
console.log("Calificativele sunt")
let note = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < note.length; i++) {
  if (note[i] === 1 || note[i] === 2 || note[i] === 3 || note[i] === 4) {
    console.log(note[i]+":"+"IS");
  } else if (note[i] === 6 || note[i] === 5) {
    console.log(note[i]+":"+"S");
  } else if (note[i]=== 7 || note[i]===8){
    console.log(note[i]+":"+"B");
  } else if (note[i]=== 9 || note[i]===10){
    console.log(note[i]+":" + "FB");
  }
}
console.log("Calificative")
let note1=[1,2,3,4,5,6,7,8,9,10];
const cal=["IS","S","B","FB"];
for(let j=0;j<note1.length;j++){
  if(note1[j]>0 && note1[j]<=4){
    console.log(note1[j]+":"+cal[0]);
  } else if(note1[j]>4 && note1[j]<=6){
    console.log(note[j]+":"+cal[1]);
  } else if(note1[j]>6 && note1[j]<=8){
    console.log(note1[j]+":"+cal[2]);
  } else if (note1[j]>8 && note1[j]<=10){
    console.log(note[j]+":"+cal[3])
  }
}
