"use strict";

//Displaying Dates//
// toString(): is method that will show date/ time and time zone.
let d= new Date();
console.log(d.toDateString());
console.log(d.toTimeString());
console.log(d.toLocaleString()); 

//Creating Dates in Different Ways//
let date1= new Date(2024, 4, 6, 9, 41,10);
console.log(date1.toString());

// Creating Dates using ISO 8601 format//
////(YYYY_MM_DDTHH:MM:SSZ)//
let c= new Date("2024-05-06T09:45:30Z"); //MM is a 1-based
console.log(c.toString());               // Z is specifies UTC time

// JavaScript Date might be one day off//
let t= new Date("2024-04-6");  
console.log(t.toDateString());

//GMT is 7 hours ahead of Phoenix time zoon MST/
let e= ("2024-05-06");  ""
console.log(e.toString());
let f= (2024-05-06);
console.log(f.toString());

//Getting a Month Name// 0 based
 let months = ["January", "February", "March", "April",
 "May", "June", "July", "August", "September",
 "October", "November", "December"];
let m = new Date();
let monthName = months[m.getMonth()];
console.log(months);

///Setting Date Fields///
let s= new Date();
s.setMonth(04);
s.setDate(06);
s.setFullYear(2024);
console.log(s.toString());

//One year from today//
let y= new Date();
y.setFullYear(y.getFullYear()+5);
console.log(y.toString());

//Getting the Day of the Week//
let day = ["Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", "Saturday"];
let d1 = new Date();
let dayName = day[d1.getDay()];
console.log(day);

///Difference between two dates//
//convert each date to a millisecond//
let d2 = new Date("2024-05-06");
let d3 = new Date("2030-09-20");
let dayDiff= 1000*60*60*24;
let diff = (d3.getTime() - d2.getTime())/dayDiff;
console.log(diff);