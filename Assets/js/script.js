//  Daily planner to create a schedule
// save reference to important DOM elements
var dayDisplayEl = $("#moment");
var saveEl = document.querySelector("#listSave");
var input = document.querySelector("#input");
var input9El = $("#listInput9");


// creates content for the timeBlock for standard business hours
// Set each timeblock in the daily schedule using moment.js

// handle displaying the day using moment.js
// open the planner the current day is displayed at the top of the calendar
function displayDay() {
  var currentDay = moment().format("dddd, MMMM Do");
  dayDisplayEl.text(currentDay);
  return;
}




saveEl.addEventListener("Click", function(){
 
});


// $(".saveBtn").on("click", function () {
//   //get nearby values.
//   console.log(this);
//   var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
//   var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

//   //set items in local storage.
//   localStorage.setItem(time, text);

// }


//   click into a timeblock to enter an event
//   click the save button for that timeblock the text for that event is saved in local storage
 
// TIMEBLOCK CODE
//   scroll down and presented with timeblocks for standard business hours

function tbPass() {
  // writes timeblock to the document
}

// each timeblock is color coded to indicate whether it is in the past, present, or future
function tbColor() {}

//   view the timeblocks for that day
function tbVeiw() {}

// EVENTS FUNCTIONS

function tbEventEnter() {}

//   refresh the page the saved events persist
function tbEventVisible() {}


displayDay();
