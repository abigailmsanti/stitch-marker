/*
    TODO: MAKE THE YEAR GO BACK AND FORWARD[X], MAKE BUTTONS PRETTIER[X],
    MAKE IT SO THE TABLE IS BUILT IN JS[]
        
*/


//create array with names of months to display for header
const monthNames = ["January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"
];
//same but backwards logic
const monthNums = [1,2,3,4,5,6,7,8,9,10,11,12];


//get table
let table = document.getElementById("calendar");


//load month and days into calendar 
document.addEventListener("DOMContentLoaded", function(event) { 
    //get current date
    let currentDate = new Date();

    //get current year
    let currentYear = currentDate.getFullYear();
    //get current month and convert it to words
    let currentMonth = monthNames[currentDate.getMonth()];
        
    let usableDate = new Date(currentYear, currentDate.getMonth());

    let firstDay = usableDate.getDay();
    let lastDayOfMonth = new Date(currentYear, currentDate.getMonth()+1, 0).getDate();

    fillCalendar(firstDay, lastDayOfMonth, currentMonth, currentYear);
});






//function to fill in table w correct days corresponding to months
function fillCalendar(firstDay, lastDay, month, year){
    document.getElementById("month").innerHTML = month;
    document.getElementById("year").innerHTML = year;

    //start on second row bc first row is week day headers
    let isFirst = false;
    let day = 1;
    
    for (let i = 1, row; row = table.rows[i]; i++) {
        for (let j = 0, col; col = row.cells[j]; j++) {
            if(i == 1 && j == firstDay){
                isFirst = true;
            }
            if(isFirst && day <= lastDay){
                col.innerText = day;
                day++
            }
            else{
                col.innerText = "";
            }
        }  
    }
}





//add event listenter to arrows to change months
let  leftArrow = document.getElementById("leftArrow");
leftArrow.onclick = function() {
    changeMonths(0);
};

let  rightArrow = document.getElementById("rightArrow");
rightArrow.onclick = function() {
    changeMonths(1);
};

function changeMonths(direction){
    //get date currently on cal
    let calMonth = monthNames.indexOf(document.getElementById("month").innerHTML);

    let calYear = parseInt(document.getElementById("year").innerHTML);


    //find new month
    if(direction == 0){
        newMonth = calMonth -1;
    }
    else{
        newMonth = calMonth +1;
    }

    //find new year
    if(newMonth < 0){
        newYear = calYear -1;
        newMonth = 11;
    }
    else if(newMonth > 11){
        newYear = calYear +1;
        newMonth = 0;
    }
    else{
        newYear = calYear;
    }

    console.log(newMonth);

    let useDate = new Date(newYear, newMonth);

    let firstDay = useDate.getDay();

    console.log(firstDay);
    let lastDayOfMonth = new Date(newYear, newMonth+1, 0).getDate();

    fillCalendar(firstDay, lastDayOfMonth, monthNames[newMonth], newYear);

    console.log("here");
}

//create event form
document.getElementById("eventButton").onclick = function() {
    let currentVal = document.getElementById("calendar").style.display;
    console.log(currentVal);
};