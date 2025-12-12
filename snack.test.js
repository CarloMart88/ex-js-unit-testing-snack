const { getInitials , createSlug , average , isPalindrome , findPostById} = module.require("./main.js")



describe("Manipolazione di stringhe" , ()=> {

      test("La funzione getInitials restituisce le iniziali di un nome completo. ",()=>{
        
      expect(getInitials("Carlo Martino")).toBe("CM");

      })

      test("La funzione isPalindrome verifica se una stringa è un palindromo.", ()=>{
          

        expect(isPalindrome("anna")).toBeTruthy()
        expect(isPalindrome("errore")).toBeFalsy()
      })


})

describe("Manipolazione di array",()=>{

    test("La funzione average calcola la media aritmetica di un array di numeri.", ()=>{

    const number = [1 , 2 , 3]
      
    expect(average(number)).toBe(2)
  })

    test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id",()=>{
    



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
    expect(()=> findPostById(posts , "a" )).toThrow("l'id inserito non è un numero")
  })



})


describe("Manipolazione slug", ()=>{

      test("La funzione createSlug restituisce una stringa in lowercase.",()=>{
        
        expect(createSlug("CARLO")).toBe("carlo")
      })


      test("La funzione createSlug sostituisce gli spazi con -",()=>{
      
      expect(createSlug("Questo è un test")).toBe("questo-e-un-test")
      })


      test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido", ()=>{
      
        let stringa = ""

        expect(() => createSlug(stringa)).toThrow("il titolo è vuoto")
      })


})








