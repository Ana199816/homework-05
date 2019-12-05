$("#currentDay").text(moment().format("dddd, MMMM Do"));



var hour = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]


hour.forEach(function(time){
    var text = $("<textarea>").attr("dataStorage", time);
    var btn = $("<button>").addClass("saveBtn fas fa-save");
    var row = $("<div>").addClass("row");
    var hours = $("<div>").addClass("hour");
  
    let any = parseInt(time);
    
  

      row.append(hours, text, btn);

 

    $(".container").append(row);

    

    if(any < 12){
        hours.text(time + "am");
    
    }else if(any > 12){
        hours.text(time - 12 + "pm");

    }else{
        
    hours.text(time + "pm");

    }

});

   

$(document).ready( () => {
    
    

    $(".saveBtn").on("click", function(){
        localStorage.setItem($(this).prev("textarea").attr("dataStorage"),$(this).prev("textarea").val());
    });

    
    $("*[dataStorage]").each(function(){
        $(this).val(localStorage.getItem($(this).attr("dataStorage"))
    )});

});

    var newDate = new Date()
    var newHour = newDate.getHours();
    console.log(newHour);

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