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

test("La funzione createSlug restituisce una stringa in lowercase.",()=>{
  function createSlug(string) {
    return string.toLowerCase()
    
  }
  expect(createSlug("CARLO")).toBe("carlo")
})

/**🏆 Snack 3
Creare un test che verifichi la seguente descrizione:

👉 "La funzione average calcola la media aritmetica di un array di numeri."
 */

test("La funzione average calcola la media aritmetica di un array di numeri.", ()=>{
  function average(array) {
    const value = array.reduce((acc , num)=>{
     return acc + num
    },0 )
    const result = value / array.length
    return result
  }



  const number = [1 , 2 , 3]
    
  expect(average(number)).toBe(2)
})