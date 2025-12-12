//"La funzione getInitials restituisce le iniziali di un nome completo. "


  function getInitials(string){
    const arrayString = string.split(" ")
    const words = arrayString.map(a => a[0]).join("")
    
    return words
  } 


console.log(getInitials("Carlo Martino"))