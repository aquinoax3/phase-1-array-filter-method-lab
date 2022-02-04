// Code your solution here




// and returns the matching list of drivers. The function should be case insensitive.


function findMatching(driverNames,string) {
    return driverNames.filter(drivers => drivers.toLowerCase() === string.toLowerCase())
}


function fuzzyMatch(driverNames,string) {
    return driverNames.filter(drivers => drivers.startsWith(string))

}

function matchName(driverObjects, string) {
    return driverObjects.filter(drivers => drivers.name === string)

}





// * `matchName` - This function takes an array of `driver` objects and a `string`
//   as arguments. Each `driver` object has two properties: `name` and `hometown`.
//   The function should return each element whose `name` property matches the
//   provided `string` argument.