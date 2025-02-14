/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 25; // You can change this value to test different scenarios
let isStudent = true; // You can change this value to test different scenarios
let regularFare = 800; // Regular ticket fare in tk
let fare;

if (age < 10) {
    fare = 0;
} else if (isStudent) {
    fare = regularFare * 0.5;
} else if (age >= 60) {
    fare = regularFare * 0.85;
} else {
    fare = regularFare;
}

console.log("Ticket fare:", fare, "tk");