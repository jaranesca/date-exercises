"use strict";

let bday=new Date("2002-12-29");
let weekBday= new Date(bday);

weekBday.setDate(weekBday.getDate()+7);

console.log(bday.toDateString())
console.log(weekBday.toDateString())
