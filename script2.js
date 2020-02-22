
//general decoder
const rot13 = (str)=> {
    let regEx = /[A-Z]/;
    let smallEx = /[a-z]/;
    str = str.split("");
    const charArr = [];

    for (let x = 0; x < str.length; x++){
      if (regEx.test(str[x])){
        charArr.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
      } else if (smallEx.test(str[x])){
        charArr.push(((str[x].charCodeAt() - 97 + 13) % 26) + 97);
      } else {
        charArr.push(str[x].charCodeAt()); 
      }
    }
   let text = String.fromCharCode.apply(String, charArr); 
   return text;
  }

  //function for ciphering
  
  const ciph = () => {
    let normaltext = document.getElementById("normaltext").value;
    document.getElementById('ciphertext').value = rot13(normaltext);
  }
  
  //function to translate from cipher text to normal text

  const deciph = () => { 
    let ciphertext = document.getElementById("ciphertext").value;
    document.getElementById('normaltext').value = rot13(ciphertext); 
  }
  

