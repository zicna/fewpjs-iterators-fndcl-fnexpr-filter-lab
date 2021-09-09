// Code your solution here

//* challange one
//* reqex solution
// function findMatching(drivers, name) {
//   return drivers.filter((driver) => new RegExp(name, "i").test(driver));
// }

//* from lesson

function findMatching(drivers, name) {
    const driverList = drivers.filter( driver => {
        return driver.toLowerCase() === name.toLowerCase()})
        return driverList
}

//* challange two

// function fuzzyMatch(drivers, name) {
//   return drivers.filter((driver) => {
//     return driver.startsWith(name);
//   });
// }
//* ReqEx solution
// function fuzzyMatch(drivers, name) {
//     // let regEx = /"^" + name/
//     return drivers.filter(driver => {
//         return new RegExp("^"+name).test(driver)
//     })
// }

//*from lesson
function fuzzyMatch(array, query) {
    return array.filter(driver => {
       return  driver.toLowerCase().indexOf(query.toLowerCase()) === 0 
    })
}




function matchName(drivers, name) {
    return drivers.filter(driver => {
        return driver["name"] === name
    })
}
