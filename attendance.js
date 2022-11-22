/*

Author: Sheila Alfaro

# 01_07 Classroom Attendance

## What You'll Do

Given an object, classroom, return an array of student names

[x] - The classroom object is structured with two values: hasTeachingAssistant (boolean) and classList (array of strings)

```js
  {
    hasTeachingAssistant: false,
    classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
  }
```

[x] - The teacher will always be the first item in the classList array
[x] - If `hasTeachingAssitant` is true, the teaching assistant will be the second item in the classList array

## Requirements

- Use object and array destructuring

*/

let Classroom = {
  hasTeachingAssistant: false,
  classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
};

function getStudents(classroom) {
  let { hasTeachingAssistant, classList } = classroom;
  let teacher, teachingAssistant, students;

  if (hasTeachingAssistant) {
    [teacher, teachingAssistant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}

getStudents(Classroom);
