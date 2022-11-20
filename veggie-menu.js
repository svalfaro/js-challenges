/*

Author: Sheila Alfaro

# 01_03 Veggie Options

## What You'll Do

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

index.html: 
<ul id="menu"></ul>

## Requirements

[x] - Use the `array.filter()` method to differentiate dishes which are vegetarian
[x] - Dynamically generate each DOM node for the vegetarian dishes to append it as a list item to an unordered list

*/

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

function result(arr) {
  const menuList = document.querySelector("#menu");
  const veggieOptions = arr
    .filter((element) => element.isVegetarian === true)
    .forEach((element) => {
      let dish = document.createElement("li");
      dish.textContent = element.name;
      menuList.appendChild(dish);
    });
}

result(menu);
