/*

Author: Sheila Alfaro

## What You'll Do

Create a Movie object that takes in five arguments:

[x] - title
[x] - director
[x] - genre
[x] - releaseYear
[x] - rating

[x] - add a function called `getOverview` on the Movie prototype which console logs the following overview for each film:

    "<movie>, a <genre> film directed by <director> was released in <releaseYear>. It received a rating of <rating>."

## Requirements

- Use object prototypes

*/

class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${rating}.`;
  }
}

const bntb = new Movie(
  "Beauty and the Beast",
  "Kirk Wise",
  "Fantasy",
  1991,
  7.1
);
