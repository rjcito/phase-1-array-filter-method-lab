//findMatching- This function takes an array of drivers' names and a string as arguments, 
//and returns the matching list of drivers. The function should be case insensitive.



function findMatching(array, string){
    const matchingListOfDrivers = array.filter(name => name.toLowerCase() === string.toLowerCase())
    return matchingListOfDrivers
}

//fuzzyMatch - This function takes an array of drivers' names and a 
//string as arguments for querying the array, and returns all drivers whose names 
//begin with the provided letters

function fuzzyMatch (array, letters){
    const stringLength = letters.length
    const newArray = array.filter(name => letters.toLowerCase() === name.substring(0,stringLength).toLowerCase())
    return newArray
}

/*
matchName - This function takes an array 
of driver objects and a string as arguments. 
Each driver object has two properties: name and hometown. 
The function should return each element whose name property matches the provided string argument.
*/

function matchName(array, string){
    const arrayOfMatches = array.filter(element => string  === element.name)
    return arrayOfMatches


}