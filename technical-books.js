/*

Author: Sheila Alfaro

# 01_04 Technical Books

## What You'll Do

Expanding on your previous book application you now want to create a class for technical books. Using the Book class constructed in the last example, extend the functionality to the new TechnicalBook class.

[x] - The new TechnicalBook class will take a book edition as a fifth argument.
[x] - You should add a getEdition method which prints `The current version of this book is ${version}`.

## Requirements

[x] - Use JavaScript's class notation

*/

class TechnicalBook extends Book {
  constructor(title, author, isbn, numCopies, edition) {
    super(title, author, isbn, numCopies);
    this.edition = edition;
  }

  getEdition() {
    return `The current version of this book is ${this.edition}`;
  }
}
