
//Adeel Ahmed;
let personalMessage = 'Hello Adeel, Would you like to learn some python today?';

console.log(personalMessage);

//Date = 17/02/2024;
let nameCases = "John Watson";     //Adding Comments
console.log(nameCases.toUpperCase);// It will print words to UpperCase;
console.log(nameCases.toLowerCase);

let famousQuote = 'Hazrat Ali (A.S) Once said, "Accept The Apology Even If It Is Not Sincere."'   
console.log(famousQuote); //Addind Comments
                          //It will print Hazrat Ali A.S, Once said, Accept the apology even if it is not sincere.

const famousQuote2 = "Hazrat Ali (A.S)";
let message2 = `${famousQuote2} Once said Accept the apology even if it is not sincere.`;
console.log(message2); // 

let nameWithWhitespace = "\t   John Doe \n";

console.log("Name with whitespace:");
console.log(nameWithWhitespace);

let strippedName = nameWithWhitespace.trim();

console.log("\nStripped name:");
console.log(strippedName);

console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(1 / 8);

let favoriteNumber: number = 3; 

let message1: string = `My favorite number is ${favoriteNumber}.`;

console.log(message);

let names = ["Shahzaib", "Sajjad", "Talha",];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

console.log(`How are you doing, ${names[0]}`);
console.log(`It's been a long time since, How are you, ${names[1]}`);
console.log(`Hey it's a pleasure to meet you, ${names[2]}`);

let myOwnArray: string[] = ["Yamaha Motorcycle", "Honda Civic car",];
console.log(myOwnArray[0]);

let guestList: string[] = ["Akram", "Adil", "Bilal"];
let guestUnableToMakeIt: string = "Bilal";
let newInvitee = "Zahid"
console.log(`${guestUnableToMakeIt} can't make it to dinner.`);
let indexOfGuestUnableToMakeIt: number = guestList.indexOf(guestUnableToMakeIt);
if (indexOfGuestUnableToMakeIt !== -1) {
    guestList[indexOfGuestUnableToMakeIt] = newInvitee;
}
console.log("\nSecond set of invitation messages:");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, please join us for dinner tonight.`);
});

console.log("\nGood news! We found a bigger dinner table.");

guestList.unshift("Awais"); 
guestList.splice(guestList.length / 2, 0, "Hamza"); 
guestList.push("Ali"); 

console.log("\nUpdated Invitation Messages:");
guestList.forEach(guest => console.log(`Dear ${guest}, please join us for dinner!`));

console.log("\nSorry, we can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop(); // Remove the last guest from the list
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

// Print a message to each of the two people still on the list, letting them know they're still invited
console.log(`\nDear ${guestList[0]} and ${guestList[1]}, you're still invited to dinner.`);

// Remove the last two names from the list
guestList.pop();
guestList.pop();

// Print the updated guest list to confirm it's empty
console.log("\nUpdated Guest List:");
guestList.forEach(guest => console.log(guest));


// Define an array of places to visit
let placesToVisit: string[] = ["Tokyo", "Paris", "SwitzerLand", "Rome", "Berlin"];

// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit.join(", "));

// Print the array in alphabetical order without modifying the original list
console.log("\nAlphabetical Order:");
console.log(placesToVisit.slice().sort().join(", "));

// Show that the array is still in its original order by printing it again
console.log("\nOriginal Order:");
console.log(placesToVisit.join(", "));

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse Alphabetical Order:");
console.log(placesToVisit.slice().sort().reverse().join(", "));

// Show that the array is still in its original order by printing it again
console.log("\nOriginal Order:");
console.log(placesToVisit.join(", "));

// Reverse the order of the list
placesToVisit.reverse();

// Print the array to show its order has changed
console.log("\nReversed Order:");
console.log(placesToVisit.join(", "));

// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();

// Print the array to show it's back to its original order
console.log("\nOriginal Order:");
console.log(placesToVisit.join(", "));

// Sort the array so it's stored in alphabetical order
placesToVisit.sort();

// Print the array to show its order has changed
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit.join(", "));

// Sort the array to change its order to reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));

// Print the array to show its order has changed
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit.join(", "));

let dinnerguests: string[] = ["Shahzaib", "Sajjad", "Talha", "Zahid"];

// Print original guest list
console.log("Original Guest List:");
dinnerguests.forEach(guest => console.log(guest));

// Inform people that a bigger dinner table was found
console.log("\nGood news! We found a bigger dinner table.");

// Add new guests
guestList.unshift("Awais"); // Add one new guest to the beginning of the array
guestList.splice(guestList.length / 2, 0, "Hamza"); // Add one new guest to the middle of the array
guestList.push("Ali"); // Add one new guest to the end of the array

// Print invitation messages for each person in the updated list
console.log("\nUpdated Invitation Messages:");
guestList.forEach(guest => console.log(`Dear ${guest}, please join us for dinner!`));

// Print the number of people invited to dinner
console.log(`\nTotal number of people invited to dinner: ${guestList.length}`);

let landmarks: string[] = [
    "Eiffel Tower",
    "Great Wall of China",
    "Statue of Liberty",
    "Taj Mahal",
    "Machu Picchu",
    "Pyramids of Giza",
    "Colosseum",
    "Sydney Opera House",
    "Christ the Redeemer",
    "Angkor Wat"
];

// Print the list of landmarks
console.log("List of Famous Landmarks:");
landmarks.forEach(landmark => console.log(landmark));

let landmarks1: string[] = [
    "Eiffel Tower",
    "Great Wall of China",
    "Statue of Liberty",
    "Taj Mahal",
    "Machu Picchu",
    "Pyramids of Giza",
    "Colosseum",
    "Sydney Opera House",
    "Christ the Redeemer",
    "Angkor Wat"
];

// Try to access an element at an index that doesn't exist
let nonExistentLandmark = landmarks1[20]; // Accessing index 20, which doesn't exist

// Print the non-existent landmark
console.log(nonExistentLandmark);

// Define TypeScript objects containing information about countries
let countries: { [key: string]: { capital: string, population: number, language: string } } = {
    "USA": { capital: "Washington, D.C.", population: 331449281, language: "English" },
    "France": { capital: "Paris", population: 65273511, language: "French" },
    "Japan": { capital: "Tokyo", population: 126476461, language: "Japanese" },
    "Brazil": { capital: "Brasília", population: 213993437, language: "Portuguese" },
    "India": { capital: "New Delhi", population: 1393409038, language: "Hindi" }
};

// Print information about each country
console.log("Information about Countries:");
for (let country in countries) {
    console.log(`${country}:`);
    console.log(`Capital: ${countries[country].capital}`);
    console.log(`Population: ${countries[country].population}`);
    console.log(`Language: ${countries[country].language}`);
    console.log(); // Add an empty line for readability
}

let car = 'subaru';

// Test 1: Is car equal to 'subaru'? (Expected: True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// Test 2: Is car not equal to 'toyota'? (Expected: True)
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

// Test 3: Is car equal to 'honda'? (Expected: False)
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

// Test 4: Is car not equal to 'subaru'? (Expected: False)
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');

// Test 5: Is car strictly equal to 5? (Expected: False)
console.log("Is car === 5? I predict False.");
console.log(car === ", ");

// Test 6: Is car not strictly equal to 'subaru'? (Expected: False)
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

// Test 7: Is car less than 'volvo'? (Expected: True)
console.log("Is car < 'volvo'? I predict True.");
console.log(car < 'volvo');

// Test 8: Is car greater than or equal to 'honda'? (Expected: True)
console.log("Is car >= 'honda'? I predict True.");
console.log(car >= 'honda');

// Test 9: Is car less than or equal to 'subaru'? (Expected: True)
console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru');

// Test 10: Is car greater than 'subaru'? (Expected: False)
console.log("Is car > 'subaru'? I predict False.");
console.log(car > 'subaru');


let fruit = 'apple';
let number = 10;
let colors = ['red', 'green', 'blue'];
let animals = ['dog', 'cat', 'rabbit'];

// Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings:");
console.log("Is fruit equal to 'apple'? I predict True.");
console.log(fruit == 'apple');
console.log("Is fruit not equal to 'banana'? I predict True.");
console.log(fruit != 'banana');
console.log("Is fruit equal to 'Apple'? I predict False.");
console.log(fruit == 'Apple');
console.log("Is fruit not equal to 'Apple'? I predict False.");
console.log(fruit != 'Apple');

// Tests using the lower case function
console.log("\nTests using the lower case function:");
console.log("Is fruit in lowercase 'apple'? I predict True.");
console.log(fruit.toLowerCase() == 'apple');
console.log("Is fruit in lowercase 'APPLE'? I predict True.");
console.log(fruit.toLowerCase() == 'APPLE');
console.log("Is fruit in lowercase 'Banana'? I predict False.");
console.log(fruit.toLowerCase() == 'Banana');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\nNumerical tests involving equality and inequality, greater than and less than:");
console.log("Is number equal to 10? I predict True.");
console.log(number == 10);
console.log("Is number not equal to 5? I predict True.");
console.log(number != 5);
console.log("Is number greater than 5? I predict True.");
console.log(number > 5);
console.log("Is number less than 20? I predict True.");
console.log(number < 20);
console.log("Is number greater than or equal to 10? I predict True.");
console.log(number >= 10);
console.log("Is number less than or equal to 15? I predict True.");
console.log(number <= 15);

// Tests using "and" and "or" operators
console.log("\nTests using 'and' and 'or' operators:");
console.log("Is fruit 'apple' and number 10? I predict True.");
console.log(fruit == 'apple' && number == 10);
console.log("Is fruit 'banana' or number 5? I predict True.");
console.log(fruit == 'banana' || number == 5);
console.log("Is fruit 'banana' and number 5? I predict False.");
console.log(fruit == 'banana' && number == 5);
console.log("Is fruit 'apple' or number 5? I predict False.");
console.log(fruit == 'apple' || number == 5);

// Test whether an item is in an array
console.log("\nTest whether an item is in an array:");
console.log("Is 'red' in colors? I predict True.");
console.log(colors.includes('red'));
console.log("Is 'yellow' in colors? I predict False.");
console.log(colors.includes('yellow'));

// Test whether an item is not in an array
console.log("\nTest whether an item is not in an array:");
console.log("Is 'dog' not in animals? I predict True.");
console.log(!animals.includes('dog'));
console.log("Is 'rabbit' not in animals? I predict False.");
console.log(!animals.includes('rabbit'));

// Here is the first version of the system that runs if
let alienColor = 'green';

if (alienColor === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}

//And here is the second version of the system that runs else
let alien_Color = 'red';

if (alien_Color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}

//Version 1: is green
let alienColor1 = 'green';

if (alienColor1 === 'green') {
    console.log("The player earned 5 points.");
} else if (alienColor1 === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alienColor1 === 'red') {
    console.log("The player earned 15 points.");
}

//Version 2: is yellow
let alienColor2 = 'yellow';

if (alienColor2 === 'green') {
    console.log("The player earned 5 points.");
} else if (alienColor2 === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alienColor2 === 'red') {
    console.log("The player earned 15 points.");
}

//Version 3: is red
let alienColor3 = 'red';

if (alienColor3 === 'green') {
    console.log("The player earned 5 points.");
} else if (alienColor3 === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alienColor3 === 'red') {
    console.log("The player earned 15 points.");
}

let Age = 25;

if (Age < 2) {
    console.log("The person is a baby.");
} else if (Age >= 2 && Age < 4) {
    console.log("The person is a toddler.");
} else if (Age >= 4 && Age < 13) {
    console.log("The person is a kid.");
} else if (Age >= 13 && Age < 20) {
    console.log("The person is a teenager.");
} else if (Age >= 20 && Age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

let favorite_fruits: string[] = ['apple', 'banana', 'strawberry'];

if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}

if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}

if (favorite_fruits.includes('grape')) {
    console.log("You really like grapes!");
}

let usernames: string[] = ['user1', 'user2', 'user3', 'admin', 'user4', 'user5'];

for (let username of usernames) {
    if (username === 'admin') {
        console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}

let user_names: string[] = [];

if (user_names.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let user_name of usernames) {
        if (user_name === 'admin') {
            console.log(`Hello ${user_name}, would you like to see a status report?`);
        } else {
            console.log(`Hello ${user_name}, thank you for logging in again.`);
        }
    }
}

let current_users: string[] = ['user1', 'user2', 'user3', 'user4', 'user5'];
let new_users: string[] = ['user6', 'user7', 'User1', 'User2', 'User3'];

for (let new_user of new_users) {
    let is_duplicate = current_users.some((user) => user.toLowerCase() === new_user.toLowerCase());
    if (is_duplicate) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please choose a different one.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}


let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    let ordinal: string;
    if (number === 1) {
        ordinal = "1st";
    } else if (number === 2) {
        ordinal = "2nd";
    } else if (number === 3) {
        ordinal = "3rd";
    } else {
        ordinal = number + "th";
    }
    console.log(ordinal);
}


let favorite_pizzas: string[] = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");


let Animals: string[] = ['Dog', 'Cat', 'Rabbit'];

for (let Animal of animals) {
    console.log(`A ${Animal.toLowerCase()} would make a great pet.`);
}

console.log("Any of these animals would make a great pet.");


function make_shirt(size: string, message: string): void {
    console.log(`Size: ${size}, Message: ${message}`);
}

// Call the function
make_shirt("Large", "Hello, World!");


function makeShirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`Size: ${size}, Message: ${message}`);
}

// Call the function to make a large shirt with the default message
makeShirt();

// Call the function to make a medium shirt with the default message
makeShirt("Medium");

// Call the function to make a shirt of any size with a different message
makeShirt("Small", "Hello, World!");

function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");


function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with at least three city-country pairs
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("London", "UK"));


function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Call the function to create three different album objects
let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2", 10);
let album3 = make_album("Artist3", "Album3");

// Print each album object to verify the album information
console.log(album1);
console.log(album2);
console.log(album3);

function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

// Define an array of magician's names
let Magicians: string[] = ["Merlin", "David Copperfield", "Harry Houdini", "Penn & Teller"];

// Call the show_magicians function to print the names of the magicians
showMagicians(Magicians);


function make_great(magicians: string[]): void {
    let modifiedMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

// Define the show_magicians function as before
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

// Define an array of magician's names
let magicians: string[] = ["Merlin", "David Copperfield", "Harry Houdini", "Penn & Teller"];

// Make a copy of the original array
let originalMagicians: string[] = [...magicians];

// Call the make_great function with a copy of the array to modify the magician's names
let modifiedMagicians: string[] = make_great([...magicians]);

// Call the show_magicians function to print the original list of magicians
console.log("Original Magicians:");
show_magicians(originalMagicians);

// Call the show_magicians function to print the modified list of magicians
console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);


function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => console.log("- " + item));
    console.log("Enjoy your sandwich!");
}

// Call the function three times with different numbers of arguments
console.log("Sandwich 1:");
makeSandwich("Ham", "Cheese", "Lettuce");

console.log("\nSandwich 2:");
makeSandwich("Turkey", "Swiss Cheese", "Tomato", "Mayonnaise");

console.log("\nSandwich 3:");
makeSandwich("Tuna", "Pickles");


function storeCarInfo(manufacturer: string, modelName: string, ...additionalInfo: { [key: string]: any }[]): any {
    let carInfo: any = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Add additional information to the carInfo Object
    additionalInfo.forEach(info => {
        let key = Object.keys(info)[0];
        carInfo[key] = info[key];
    });

    return carInfo;
}

// Call the function with required information and additional key-value pairs
let Car = storeCarInfo("Toyota", "Corolla", {color: "blue"}, {year: 2022}, {isElectric: false});

// Print the Object to check if all information was stored correctly
console.log(Car);
