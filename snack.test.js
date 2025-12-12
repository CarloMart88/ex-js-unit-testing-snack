/**🏆 Snack 1
Creare un test che verifichi la seguente descrizione:

👉 "La funzione getInitials restituisce le iniziali di un nome completo." */

test("La funzione getInitials restituisce le iniziali di un nome completo. ",()=>{
  function getInitials(string){
    return string[0]
  } 
  expect(getInitials("Carlo")).toBe("C");

})
/*
🏆 Snack 2
Creare un test che verifichi la seguente descrizione:

👉 "La funzione createSlug restituisce una stringa in lowercase."*/

test("La funzione createSlug restituisce una stringa in lowercase.",()=>{})