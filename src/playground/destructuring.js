// console.log('destructuring');

// const person = {
//     name: 'Andrew',
//     age: 299,
//     location:  {
//         city: 'Metropolis',
//         temp: '19'
//     }
// };

// // const name = person.name;
// // const age = person.age;

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} degrees in ${city}`);
// }

// const book = {
//     title: 'Ethereum',
//     author: 'Vitalik Buterin',
//     publisher: {
//         name: 'Ethereum Foundation'
//     }
// };

// const {title: bookTitle = 'Book', author: bookAuthor = 'Anonymous', publisher } = book;
// const {name: publisherName = 'Self-Published'} = publisher;

// console.log(`${bookTitle} is a great book. It was written by ${bookAuthor} and published by ${publisherName}`);

const address = ['1229'];

const [, , state = 'New York'] = address;

console.log(`You are in ${state}`);

const items = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [coffee = 'coffee', , medium = '1 btc'] = items;

console.log(`A medium ${coffee} costs ${medium}`);


