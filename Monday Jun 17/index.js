// const bookPrototype = {
//     getSummary() {
//         return `${this.name} was written by ${this.author} in ${this.year}`;
//     },
// };

// const book1 = {
//     name: "Introduction to Algorithms",
//     author: "Thomas H. Cormen",
//     year: 2009,
//     __proto__: bookPrototype,
// };

// const book2 = {
//     name: "The Pragmatic Programmer",
//     author: "Andrew Hunt",
//     year: 1999,
//     __proto__: bookPrototype,
// };

// const summary1 = book1.getSummary();

// console.log(book1.getSummary() === book2.getSummary());
// console.log(book1.getSummary());

// Prototype

// const obj1 = {
//     a: "a",
// }

// const obj2 = {
//     b: "b",
// }

// Class

class Book {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.name} was written by ${this.author} in ${this.year}`;
    }

    foo() {
        return this.getSummary();
    }
};

const book1 = new Book("Introduction to Algorithms", "Thomas H. Cormen", 2009);
const book2 = new Book("The Pragmatic Programmer", "Andrew Hunt", 1999);

console.log(book1.getSummary() === book2.getSummary());
console.log(book1.foo());