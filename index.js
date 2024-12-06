

function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}


function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.startsWith(query));
}

function matchName(driverObjects, query) {
    return driverObjects.filter(driver => driver.name === query);
}

const drivers = ["John", "Jane", "Johnny", "Joan"];
const driverObjects = [
    { name: "John", hometown: "New York" },
    { name: "Jane", hometown: "Chicago" },
    { name: "Johnny", hometown: "Los Angeles" }
];

console.log("findMatching:", findMatching(drivers, "john")); 
console.log("fuzzyMatch:", fuzzyMatch(drivers, "Jo")); 
console.log("matchName:", matchName(driverObjects, "Jane")); 
