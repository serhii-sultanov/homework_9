"use strict";

const date = new Date("1993-09-26");

let birthDate = date.getDate();
let birthMonth = date.getMonth() + 1;
let birthYear = date.getFullYear();

if (birthMonth < 10) {
  birthMonth = `0${birthMonth}`;
}

const FullDateOfBirth = `${birthDate}.${birthMonth}.${birthYear}`;

console.log(FullDateOfBirth);
