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
gfunction grade (mark) {
    if (mark >= 9) {
        return "FB"
    }
    if (mark >= 7) {
        return "B"
    }
    if (mark >= 5) {
       return "S"
    }
        return "IS"
}

console.log(grade(100));