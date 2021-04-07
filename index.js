// test 1
function findMatching(arr, inputName) {
      
    let passedName = arr.filter (elemName => {
      return elemName === inputName || elemName.includes(inputName.charAt(0).toLowerCase());
       
    })
       return passedName;
}


//tesst 2
function fuzzyMatch(arr, inputName){
        let passedName = arr.filter (elemName => {
            return  elemName.startsWith(inputName);
        })
        return passedName;
}


//test 3 

function  matchName(arr, inputName) {
  let getName = arr.filter( element => {
       return element.name === inputName;
  })
 return getName;
}
matchName(drivers, 'Bobby')