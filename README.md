# js-challenges

# **01_01 Available Books**

## _What You'll Do_

You're developing an inventory application for a bookstore.

- [x] You need to create a JavaScript class, "Book", that accepts a title, author, ISBN (International Standard Book Number), and the number of available copies.

- [x] You should provide a getter function called 'availability' that checks the number of available copies and returns "Out of stock" if it's zero, "Low stock" if it's less than 10, and "In stock" if it's 10 or greater.

- [x] You should add a sell method which accepts the number of copies to sell and subtracts it from the number of copies. The number of copies to sell should have a default value of one.

- [x] You should add a restock method which accepts the number of copies to restock and adds it to the number of total copies. The number of copies to restock should have a default value of five.

<br>

## _Requirements_

- [x] Use JavaScript's class notation
- [x] Use JavaScript getters

<br>
<br>

# **01_02 Movie Object**

## _What You'll Do_

Create a Movie object that takes in five arguments:

- [x] title
- [x] director
- [x] genre
- [x] releaseYear
- [x] rating

- [x] add a function called `getOverview` on the Movie prototype which console logs the following overview for each film:

  "{title}, a {genre} film directed by {director} was released in {releaseYear}. It received a rating of {rating}."

<br>

## _Requirements_

- [x] Use object prototypes
