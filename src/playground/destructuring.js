// Object destructuring

// const person = {
//     name: "Andreea",
//     age: 26,
//     location: {
//         city: "Bucharest",
//         temp: 29
//     }
// }

// const { name: firstName = "Anonymous" , age } = person; // "Anonymous is a default value"

// console.log(`${name} is ${age}`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
// console.log(`It's ${temperature} degree in ${city}`);
// }

// destructarea obiectelor si array-urilor se refera la salvarea in variabile a proprietatilor unui obiect sau a elementelor unui array

const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday",
    publisher: {
        name: "Penguin"
    }
};


const {name: publisherName = "Self Published"} = book.publisher;

console.log(publisherName); 

// Array destructuring 

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [coffee_name, , medium_price] = item;
console.log(`A medium ${coffee_name} costs ${medium_price}.`);