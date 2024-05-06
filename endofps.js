"use strict";

document.getElementById("calculateButton").addEventListener("click", function() {
    let currentDate = new Date("May 6, 2024");
    let nextDate = new Date("June 28, 2024");
    let finalDate = new Date("May 27, 2024");
    let millisecondsPerDay = 1000 * 60 * 60 * 24; 
    let elapsedMilliseconds = nextDate.getTime() - currentDate.getTime(); 
    let finalDiff = finalDate.getTime() - currentDate.getTime();
    let dayDifference = elapsedMilliseconds / millisecondsPerDay; 
    let finalDayDiff = finalDiff / millisecondsPerDay;
    let roundedDays = Math.round(dayDifference);
    let roundedFinalDays = Math.round(finalDayDiff);
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = "There are " + roundedDays + " days left until the end of the Academy, and " + roundedFinalDays + " days left until the capstone presentation.";
});







