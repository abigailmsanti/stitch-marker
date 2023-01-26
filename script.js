//create array with names of months to display for header
const monthNames = ["January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"
];
//get current date
const currentDate = new Date();
//get current year
let currentYear = currentDate.getFullYear();
//get current month and convert it to words
let currentMonth = monthNames[currentDate.getMonth()];


let usableDate = new Date(currentYear, currentDate.getMonth());
let table = document.getElementById("calendar");

let firstDay = usableDate.getDay();
let lastDayOfMonth = new Date(currentYear, currentDate.getMonth()+1, 0).getDate();

//load month and days into calendar 
document.addEventListener("DOMContentLoaded", function(event) { 
    console.log(lastDayOfMonth);
    document.getElementById("monthYear").innerHTML = currentMonth + " " + currentYear;
    //start on second row bc first row is week day headers
    let isFirst = false;
    let day = 1;
    
    for (let i = 1, row; row = table.rows[i]; i++) {
        for (let j = 0, col; col = row.cells[j]; j++) {
            if(i == 1 && j == firstDay){
                isFirst = true;
            }
            if(isFirst && day <= lastDayOfMonth){
                col.innerText = day;
                day++
            }
        }  
    }
});


$('.round').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.arrow').toggleClass('bounceAlpha');
});


