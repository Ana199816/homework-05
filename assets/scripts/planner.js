// get a current day
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// create a  time blocks
var hour = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

// fn to populate the text areas from dataStorage
$(document).ready( () => {
    
    
    // fn for button to save to local storage
        $(".saveBtn").on("click", function(){
            localStorage.setItem($(this).prev("textarea").attr("dataStorage"),$(this).prev("textarea").val());
        });
    
        
        $("*[dataStorage]").each(function(){
            $(this).val(localStorage.getItem($(this).attr("dataStorage"))
        )});
    
    });

hour.forEach(function(time){
    var text = $("<textarea>").attr("dataStorage", time);
    var btn = $("<button>").addClass("saveBtn fas fa-save");
    var row = $("<div>").addClass("row");
    var hours = $("<div>").addClass("hour");
    let any = parseInt(time);

    row.append(hours, text, btn);
  // setting AM and PM
  $(".container").append(row);
    if(any < 12){
        hours.text(time + "am");
    
    }else if(any > 12){
        hours.text(time - 12 + "pm");

    }else{
        
    hours.text(time + "pm");

    }

});

   
// variable for new date and new hour

    var newDate = new Date()
    var newHour = newDate.getHours();
    console.log(newHour);

 // if statements to handle what is past, present, and future classes
    $("*[dataStorage").each(function(){
        if (parseInt($(this).attr("dataStorage")) === newHour){

            $(this).addClass("present").removeClass("past future");

        }else if(parseInt($(this).attr("dataStorage")) < newHour){
            $(this).addClass("past").removeClass("present future");

        }else{
            $(this).addClass("future").removeClass("past present");
        };
        
    });

    console.log(parseInt("dataStorage"));

    console.log(newHour);