"use strict";

// // 1
// const date = new Date("1993-09-26");

// let birthDate = date.getDate();
// let birthMonth = date.getMonth() + 1;
// let birthYear = date.getFullYear();

// if (birthMonth < 10) {
//   birthMonth = `0${birthMonth}`;
// }

// const FullDateOfBirth = `${birthDate}.${birthMonth}.${birthYear}`;

// console.log(FullDateOfBirth);

// // 2
// function getDiffDays(startDate, endDate) {
//   const ONE_DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

//   let userStartDate = new Date(startDate);
//   let userEndDate = new Date(endDate);

//   if (isNaN(userStartDate) || isNaN(userEndDate)) {
//     console.error("Error: invalid date");
//     return;
//   } else if (userEndDate < userStartDate) {
//     console.error("Error: your start date is later than end");
//     return;
//   }

//   let convertedUserStartDate =
//     userStartDate.getTime() / ONE_DAY_IN_MILLISECONDS;
//   let convertedUserEndDate = userEndDate.getTime() / ONE_DAY_IN_MILLISECONDS;

//   const differentDays = convertedUserEndDate - convertedUserStartDate;

//   return differentDays;
// }

// console.log(getDiffDays("2020-01-01", "2020-01-17")); // 16
// console.log(getDiffDays("2020-01-01", "2020-03-15")); // 74
// console.log(getDiffDays("2222222222", "2020-03-15")); // Error: invalid date
// console.log(getDiffDays("2021-01-02", "2020-03-15")); // Error: your start date is later than end

// // 3
// function isWeekend(date) {
//   let userDay = new Date(date).getDay();
//   return userDay === 0 || userDay === 6;
// }

// console.log(isWeekend("2022-02-12")); // true
// console.log(isWeekend("2022-02-13")); // true
// console.log(isWeekend("2022-02-09")); // false

// // 4
// const person = {
//   fullName: "Sherlock Holmes",
//   address: {
//     street: "Baker Street",
//     city: "London",
//     house: "221b",
//   },
// };

// const stringedPerson = JSON.stringify(person);

// const parsedPerson = JSON.parse(stringedPerson);

// const {
//   fullName,
//   address: { street, city, house },
// } = parsedPerson;

// console.log(person);
// console.log(stringedPerson);
// console.log(parsedPerson);
// console.log(fullName, street, city, house);
