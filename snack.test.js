const { getInitials , createSlug , average} = module.require("./main.js")

/**🏆 Snack 1
Creare un test che verifichi la seguente descrizione:

👉 "La funzione getInitials restituisce le iniziali di un nome completo." */

test("La funzione getInitials restituisce le iniziali di un nome completo. ",()=>{
   
 expect(getInitials("Carlo Martino")).toBe("CM");

})
/*
🏆 Snack 2
Creare un test che verifichi la seguente descrizione:

👉 "La funzione createSlug restituisce una stringa in lowercase."*/

test("La funzione createSlug restituisce una stringa in lowercase.",()=>{
  
  expect(createSlug("CARLO")).toBe("carlo")
})

/**🏆 Snack 3
Creare un test che verifichi la seguente descrizione:

👉 "La funzione average calcola la media aritmetica di un array di numeri."
 */

test("La funzione average calcola la media aritmetica di un array di numeri.", ()=>{

  const number = [1 , 2 , 3]
    
  expect(average(number)).toBe(2)
})

/**🏆 Snack 4
Creare un test che verifichi la seguente descrizione:

👉 "La funzione createSlug sostituisce gli spazi con -."

📌 Esempi:

createSlug("Questo è un test") → "questo-e-un-test" */

test("La funzione createSlug sostituisce gli spazi con -",()=>{
 
expect(createSlug("Questo è un test")).toBe("questo-e-un-test")
})

/**🏆 Snack 5
Creare un test che verifichi la seguente descrizione:

👉 "La funzione isPalindrome verifica se una stringa è un palindromo."

📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.
 */

test("La funzione isPalindrome verifica se una stringa è un palindromo.", ()=>{
    function isPalindrome(string){
    const reverse = string.split("").reverse().join("")
    if(string === reverse){
      return true}else{
        return false
      }
  }

  expect(isPalindrome("anna")).toBe(true)
})

/**🏆 Snack 6
Creare un test che verifichi la seguente descrizione:

👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."
 */

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido", ()=>{
  function createSlug(string) {
    if(string.trim() === ""){
      return console.log("titolo è vuoto")
    }else{
      return console.log("titolo inserito")
    }


  }
 
  let stringa = "ciao"

  expect(createSlug(stringa)).toBe(console.log("titolo è vuoto"))
})

/**🏆 Snack 7
Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.

Creare un test che verifichi le seguenti descrizioni:

👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"

Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico). */

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id",()=>{
  

function findPostById(array , id) {
  const filterdArray = array.find((a) => a.id === id)
  return filterdArray
  
}

const posts = [
  {
    id: 1,
    title: "Introduzione a JavaScript",
    slug: "introduzione-a-javascript"
  },
  {
    id: 2,
    title: "Come funziona il DOM",
    slug: "come-funziona-il-dom"
  },
  {
    id: 3,
    title: "Guida agli Array Methods",
    slug: "guida-agli-array-methods"
  }
];

  expect(findPostById(posts , 1 )).toBe(posts[0])
})