/*

Author: Sheila Alfaro

# 01_01 Available Books

## What You'll Do

You're developing an inventory application for a bookstore.

[x] - You need to create a JavaScript class, "Book", that accepts a title, author, ISBN (International Standard Book Number), and the number of available copies.
[x] - You should provide a getter function called 'availability' that checks the number of available copies and returns "Out of stock" if it's zero, "Low stock" if it's less than 10, and "In stock" if it's 10 or greater.
[x] - You should add a sell method which accepts the number of copies to sell and subtracts it from the number of copies. The number of copies to sell should have a default value of one.
[x] - You should add a restock method which accepts the number of copies to restock and adds it to the number of total copies. The number of copies to restock should have a default value of five.

## Requirements

[x] - Use JavaScript's class notation
[x] - Use JavaScript getters

## Instructions

Develop your solution in the `begin.js` file. If this challenge requires you to interact with the DOM, you will have an HTML element provided for you in the `index.html` file. Use this node to complete your DOM manipulation.

*/

class Book {
  constructor(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this._numCopies = numCopies;
  }

  // read-only
  get isAvailable() {
    if (this._numCopies === 0) {
      return "Out of stock";
    } else if (this._numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(copySold = 1) {
    return (this._numCopies -= copySold);
  }

  restock(copyStock = 5) {
    return (this._numCopies += copyStock);
  }
}

const book1 = new Book("All About Love", "bell hooks", 9780060959470, 20, true);
