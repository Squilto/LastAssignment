/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

window.onload = startup;
function startup()
{
    full_button.classList.add("clicked");
    calculate();
}

var allDays = [];
var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");

var clearall = document.getElementById("clear-button");

var dailyRate = 0;

var half_button = document.getElementById("half");
var full_button = document.getElementById("full");

var costText = document.getElementById("calculated-cost");
var cost = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

monday.addEventListener("click", clickedmonday);
tuesday.addEventListener("click", clickedtuesday);
wednesday.addEventListener("click", clickedwednesday);
thursday.addEventListener("click", clickedthursday);
friday.addEventListener("click", clickedfriday);

function clickedmonday()
{
    if (!monday.classList.contains("clicked"))
    {
        monday.classList.add("clicked");
        allDays.push(monday);
        calculate();
    }
}

function clickedtuesday()
{
    if (!tuesday.classList.contains("clicked"))
    {
        tuesday.classList.add("clicked");
        allDays.push(tuesday);
        calculate();
    }
}

function clickedwednesday() 
{
    if (!wednesday.classList.contains("clicked")) 
    {
        wednesday.classList.add("clicked");
        allDays.push(wednesday);
        calculate();
    }
}

function clickedthursday() 
{
    if (!thursday.classList.contains("clicked")) 
    {
        thursday.classList.add("clicked");
        allDays.push(thursday);
        calculate();
    }
}

function clickedfriday() 
{
    if (!friday.classList.contains("clicked")) 
    {
        friday.classList.add("clicked");
        allDays.push(friday);
        calculate();
    }
}
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearall.addEventListener("click", clear);

function clear() 
{
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    half_button.classList.remove("clicked");
    full_button.classList.remove("clicked");
    allDays = [];
    calculate();
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half_button.addEventListener("click", halfselected);

function halfselected() 
{
    full_button.classList.remove("clicked");
    half_button.classList.add("clicked");
    dailyRate = 20;
    calculate();
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full_button.addEventListener("click", fullselected);

function fullselected() 
{
    half_button.classList.remove("clicked");
    full_button.classList.add("clicked");
    dailyRate = 35;
    calculate();
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    cost = dailyRate * allDays.length;
    costText.innerHTML = cost;
}
