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

/**🏆 Snack 4
Creare un test che verifichi la seguente descrizione:

👉 "La funzione createSlug sostituisce gli spazi con -."

📌 Esempi:

createSlug("Questo è un test") → "questo-e-un-test" */

test("La funzione createSlug sostituisce gli spazi con -",()=>{
  function createSlug(string) {
    
  const noEmpty = string.replaceAll(" " , "-")
  const noSpecialChar = noEmpty.replace("è" , "e")
  return noSpecialChar.toLowerCase()
  }
expect(createSlug("Questo è un test")).toBe("questo-e-un-test")
})

/**🏆 Snack 5
Creare un test che verifichi la seguente descrizione:

👉 "La funzione isPalindrome verifica se una stringa è un palindromo."

📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.
 */

test("La funzione isPalindrome verifica se una stringa è un palindromo.", ()=>{
  function isPalindrome(string){

  }
  expect(isPalindrome("anna")).toBe(true)
})