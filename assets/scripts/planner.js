$(document).ready(function() {
    console.log( "ready!" )
    
    var time = moment().format("dddd, MMMM Do YYYY");

    var appointments = ["9am", "10am", "11am", "12pm", "1pm", "2pm","3pm","4pm","5pm"];

    var textBlockEl = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    var btnEl = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];

    var input = [];
    
    var calender = $("<div>");
    $("#planner").append(calender);
    
      
    function getTime(){
        console.log(time);
        
        var date=$("<div>");
        date.append("#currentDay");
        $("#currentDay").text(time);
    }
    
    function timeBlocks(){
        for (var i = 0; i < appointments.length; i++) {
            
            var timeBlock = $("<div>");         
            
            timeBlock.addClass("row hour");
            
            timeBlock.attr("name", appointments[i]);
            
            
            timeBlock.text(appointments[i]);

            
            $("#hr").append(timeBlock);
            
        }
    }
    function textBlocks(){
        for (var i = 0; i < textBlockEl.length; i++) {
            
            var textBlock = $("<input>");
            
            // var textId = $("id", appointment[i]);
            
            textBlock.addClass("row textarea");
            
            textBlock.attr("data-index",i);   
            
            textBlock.text(input,"");
                      
            $("#text").append(textBlock);

            // need to add input from textBlock into localStorage.
            $("#saveButton").on("click", function(){
                localStorage.setItem("input.text", JSON.parse("input"));
        
                
            });
        }
            
    }

    
    function buttonBlocks(){
        for (var i = 0; i < btnEl.length; i++) {
         
            var button = $("<button>");

            button.addClass("row saveBtn");

            button.attr("id", btnEl[i]);   
            
            button.text("Save");

            $("#saveButton").append(button);
        }
        
    }


   
    
    console.log(appointments);
    console.log(localStorage);
    console.log
    timeBlocks();
    textBlocks();
    buttonBlocks();
    getTime();
});