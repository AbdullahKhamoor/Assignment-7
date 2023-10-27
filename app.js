//todo ========   Chapter 38 to 44    ==============

//? Q1

// function power(a,b){
//   return   a ** b
// }
//  console.log(power(2,5));


//? Q2

//  function isLeapYear(year) {
    
//     if (year % 4 === 0) {
      
//       if (year % 100 !== 0 || year % 400 === 0) {
//         return true; 
//       }
//     }
//     return false; 
//   }
  
  
//   const year = 2024;
//   if (isLeapYear(year)) {
//     console.log(`${year} is a leap year.`);
//   } else {
//     console.log(`${year} is not a leap year.`);
//   }


  //?  Q3

//   function calculateS(a, b, c) {
//     return (a + b + c) / 2;
//   }
  
 
//   function calculateTriangleArea(a, b, c) {
//     const s = calculateS(a, b, c);
//     const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
//   }
  
 
//   const sideA = 20;
//   const sideB = 52;
//   const sideC = 70;
  
//   const triangleArea = calculateTriangleArea(sideA, sideB, sideC);
//   console.log(`The area of the triangle is: ${triangleArea}`);


//   //? Q4


//   function calculateAverage(mark1, mark2, mark3) {
//     return (mark1 + mark2 + mark3) / 3;
//   }
  
  
//   function calculatePercentage(mark1, mark2, mark3, total) {
//     const totalMarks = mark1 + mark2 + mark3;
//     return (totalMarks / (total * 3)) * 100;
//   }
  
  
//   function mainFunction(mark1, mark2, mark3) {
//     const average = calculateAverage(mark1, mark2, mark3);
//     const percentage = calculatePercentage(mark1, mark2, mark3, 100);
  
//     console.log(`Marks: Subject 1 - ${mark1}, Subject 2 - ${mark2}, Subject 3 - ${mark3}`);
//     console.log(`Average: ${average}`);
//     console.log(`Percentage: ${percentage}%`);
//   }
  

//   const subject1Marks = 70;
//   const subject2Marks = 65;
//   const subject3Marks = 35;
  
//   mainFunction(subject1Marks, subject2Marks, subject3Marks);

  //? Q5

//   function customIndexOf(inputString, targetChar) {
//     for (let i = 0; i < inputString.length; i++) {
//       if (inputString[i] === targetChar) {
//         return i; 
//       }
//     }
//     return -1; 
//   }
  
  
//   const text = "Hello, World!";
//   const charToFind = "o";
  
//   const index = customIndexOf(text, charToFind);
  
//   if (index !== -1) {
//     console.log(`The character "${charToFind}" is found at index ${index}.`);
//   } else {
//     console.log(`The character "${charToFind}" is not found in the string.`);
//   }


//?  Q6

// function deleteVowels(sentence) {
   
//     const vowelRegex = /[aeiouAEIOU]/g;
  
    
//     const sentenceWithoutVowels = sentence.replace(vowelRegex, '');
  
//     return sentenceWithoutVowels;
//   }
  
  
//   const inputSentence = "This is a sample sentence with vowels.";
//   const result = deleteVowels(inputSentence);
//   console.log(result); 


//? Q7

// function countSuccessiveVowels(text) {
    
//     text = text.toLowerCase();
  
//     let count = 0;
//     for (let i = 0; i < text.length - 1; i++) {
      
//       const currentChar = text[i];
//       const nextChar = text[i + 1];
      
//       switch (currentChar) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           switch (nextChar) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//               count++; 
//               break;
//           }
//           break;
//       }
//     }
  
//     return count;
//   }
  
  
//   const sentence = "Pleases read this application and give me gratuity";
//   const numberOfOccurrences = countSuccessiveVowels(sentence);
  
//   console.log(`Number of occurrences of two vowels in succession: ${numberOfOccurrences}`);

  //?  Q8

// function convertToMeters(kilometers) {
//   return kilometers * 1000;
// }

// function convertToFeet(kilometers) {
//   const feetInOneKilometer = 3280.84;
//   return kilometers * feetInOneKilometer;
// }

// function convertToInches(kilometers) {
//   const inchesInOneKilometer = 39370.1;
//   return kilometers * inchesInOneKilometer;
// }

// function convertToCentimeters(kilometers) {
//   const centimetersInOneKilometer = 100000;
//   return kilometers * centimetersInOneKilometer;
// }

// const kilometers = parseFloat(prompt("Enter the distance between two cities in kilometers:"));

// if (!isNaN(kilometers)) {
//   const meters = convertToMeters(kilometers);
//   const feet = convertToFeet(kilometers);
//   const inches = convertToInches(kilometers);
//   const centimeters = convertToCentimeters(kilometers);

//   console.log(`${kilometers} kilometers is equal to:`);
//   console.log(`${meters} meters`);
//   console.log(`${feet} feet`);
//   console.log(`${inches} inches`);
//   console.log(`${centimeters} centimeters`);
// } else {
//   console.log("Invalid input. Please enter a valid distance in kilometers.");
// }

//? Q9

// function calculateOvertimePay(hoursWorked) {
//   const regularHours = 40;
//   const overtimeRate = 12.00;

//   if (hoursWorked <= regularHours) {
//     return 0;
//   } else {
//     const overtimeHours = hoursWorked - regularHours;
//     const overtimePay = overtimeHours * overtimeRate;
//     return overtimePay;
//   }
// }


// const hoursWorked = parseInt(prompt("Enter the number of hours worked:"));

// if (!isNaN(hoursWorked)) {
//   const overtimePay = calculateOvertimePay(hoursWorked);
//   console.log(`Overtime pay is Rs. ${overtimePay.toFixed(2)}`);
// } else {
//   console.log("Invalid input. Please enter a valid number of hours worked.");
// }

//? Q 10

// function calculateCurrencyNotes(amountInHundreds) {
  
//   let notesof100 = amountInHundreds / 100;
//   notesof100 = Math.floor(notesof100) ; 
//   let notesOf50 = (amountInHundreds % 100) / 50;
//   notesOf50 = Math.floor( notesOf50) 
//   let notesOf10 = (((amountInHundreds % 100) % 50) / 10);
//   notesOf10 = Math.floor(notesOf10)

//   return {
//     notesof100,
//     notesOf50,
//     notesOf10
//   };
// }

// const amountInHundreds = parseInt(prompt("Enter the amount to be withdrawn in hundreds:"));

// if (!isNaN(amountInHundreds)) {
//   const notes = calculateCurrencyNotes(amountInHundreds);
//   console.log(`Number of 100 rupee notes: ${notes.notesof100}`);
//   console.log(`Number of 50 rupee notes: ${notes.notesOf50}`);
//   console.log(`Number of 10 rupee notes: ${notes.notesOf10}`);
// } else {
//   console.log("Invalid input. Please enter a valid amount in hundreds.");
// }

  

