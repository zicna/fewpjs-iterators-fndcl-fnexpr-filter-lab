// Code your solution here

function findMatching(drivers, name) {
  return drivers.filter((driver) => new RegExp(name, "i").test(driver));
}

function fuzzyMatch(drivers, name) {
  return drivers.filter((driver) => {
    return driver.startsWith(name);
  });
}

function matchName(drivers, name) {
    return drivers.filter(driver => {
        return driver["name"] === name
    })
}
