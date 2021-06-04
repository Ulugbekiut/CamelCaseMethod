//Break camelCase

//Complete the solution so that the function will break up camel casing, using a space between words.


// complete the function
function solution(string) {
  let a = string.split('');
  
  let word=""
  for(let i=0; i<a.length; i++){
    if(a[i]==a[i].toUpperCase()){
      word=word + " " + a[i]
    }
    else{
      word=word+a[i]
    }
    
  }
      return word
}

