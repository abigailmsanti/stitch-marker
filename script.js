//create array with names of months to display for header
const monthNames = ["January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"
];
//get current date
const currentDate = new Date();
//get current year
var currentYear = currentDate.getFullYear();
//get current month and convert it to words
var currentMonth = monthNames[currentDate.getMonth()]

document.addEventListener("DOMContentLoaded", function(event) { 
    console.log(document.getElementById("monthYear").innerHTML = currentMonth + " " + currentYear);
});





// console.log(currentMonth);

// for (let i = 0; i < getDay(currentDate); i++) {
//     console.log(i);
// }


// console.log(currentMonth);
//grab what day of week first day is
//put first date there and then iterate to add the other dates
//iterate thru table
// var table = document.getElementById("mytab1");
// for (var i = 0, row; row = table.rows[i]; i++) {
//    //iterate through rows
//    //rows would be accessed using the "row" variable assigned in the for loop
//     for (var j = 0, col; col = row.cells[j]; j++) {
//      //iterate through columns
//      //columns would be accessed using the "col" variable assigned in the for loop
//     }  
// }