/* WeIrD StRiNg CaSe
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

*/


function toWeirdCase(string){
  //TODO
  let sen =""
  let word=""
  console.log(string.split(' '))
  let a = string.split(' ')
  for(item in a){
    for(let i=0; i<a[item].length; i++){
      if(i%2===0){
      if(i===0 && a[item]!==a[0] ){
        sen=sen+word+" ";
        word=""
      }
        word=word+ a[item][i].toUpperCase()
      }else{ 
        word=word+ a[item][i]
        
      }

    }
 
  }
let res=sen+word
return (res)
}
