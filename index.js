// alert("Test");

// ### Problem 1
// Ask the user to enter a word. Keep asking them to enter a word until they enter the letter 'q'.
//
let userWord =prompt("Enter a word or\nPress q to quit");

{ if(userWord !== 'q')
    {
    userWord =prompt("Enter another word or\nPress q to quit");
    }
else
{alert("Goodbye")}}



//     ### Problem 2
// Make any string array all lower case strings. If you don't remember how to use that Google it.


var array2 = ["MELON","banana","APPLE","orange","LEMON"];
array2 = array2.map(function(x){ return x.toLowerCase() });
console.log(array2);
//
// ### Challenge
// Make any string array return an array of objects with the specified class below
//
// ```
// class Student{
//         constructor(name){
//                 this.name = name;
//         }
// }
// ```