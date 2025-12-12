 function getInitials(string){
    const arrayString = string.split(" ")
    const words = arrayString.map(a => a[0]).join("")
    
    return words
  } 

  function createSlug(string) {
      if(string === ""){
        throw new Error("il titolo è vuoto")
      }
      const noEmpty = string.replaceAll(" " , "-")
      const noSpecialChar = noEmpty.replace("è" , "e")
      return noSpecialChar.toLowerCase()
      
  }


  function average(array) {
    const value = array.reduce((acc , num)=>{
     return acc + num
    },0 )
    const result = value / array.length
    return result
  }

  function isPalindrome(string){
    const reverse = string.split("").reverse().join("")
    if(string === reverse){
      return true}else{
        return false
      }
  }

  function findPostById(array , id) {

    const filterdArray = array.find((a) => a.id === id)

    if(isNaN(id)){
      throw new Error ("l'id inserito non è un numero")
    }else{

    return filterdArray
  }
    
  }

  

  module.exports = {getInitials ,  createSlug ,average , isPalindrome , findPostById}
