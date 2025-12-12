 function getInitials(string){
    const arrayString = string.split(" ")
    const words = arrayString.map(a => a[0]).join("")
    
    return words
  } 

  function createSlug(string) {
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

  module.exports = {getInitials ,  createSlug ,average}
