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

<br>
<br>

# **01_03 Veggie Options**

## _What You'll Do_

Given an array of Italian dinner dishes, create a menu which contains only the vegetarian options. Each menu array index contains a dish object. A dish object contains the dish name and a boolean value indicating whether the dish is vegetarian.

```js
const menu = [
  {
    name: "Chicken parmesan",
    isVegetarian: false,
  },
  {
    name: "Penne a la vodka",
    isVegetarian: true,
  },
  {
    name: "Mushroom risotto",
    isVegetarian: true,
  },
  {
    name: "Veal saltambuca",
    isVegetarian: false,
  },
  {
    name: "Filet mignon",
    isVegetarian: false,
  },
];
```

```html
<ul id="menu"></ul>
```

<br>

## _Requirements_

- [x] Use the `array.filter()` method to differentiate dishes which are vegetarian
- [x] Dynamically generate each DOM node for the vegetarian dishes to append it as a list item to an unordered list.

<br>
<br>

# **01_04 Technical Books**

## _What You'll Do_

Expanding on your previous book application you now want to create a class for technical books. Using the Book class constructed in the last example, extend the functionality to the new TechnicalBook class.

- [x] The new TechnicalBook class will take a book edition as a fifth argument.
- [x] You should add a getEdition method which prints `The current version of this book is ${version}`.

## _Requirements_

- [x] Use JavaScript's class notation

<br>
<br>

# **01_06 Ticking Time**

## _What You'll Do_

Given a `<div id="clock"></div>` create a clock which displays the current hour, minutes, and seconds.

## _Requirements_

- [x] Use setInterval
- [x] Use Date()

<br>
<br>

# **01_07 Classroom Attendance**

## _What You'll Do_

Given an object, classroom, return an array of student names

- [x] The classroom object is structured with two values: hasTeachingAssistant (boolean) and classList (array of strings)

```js
  {
    hasTeachingAssistant: false,
    classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
  }
```

- [x] The teacher will always be the first item in the classList array
- [x] If `hasTeachingAssitant` is true, the teaching assistant will be the second item in the classList array

## _Requirements_

- [x] Use object and array destructuring
