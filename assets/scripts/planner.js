
        $(document).ready(function () {
            // custom code here
            var currentDateAndTime = Date(Date.now());// exp: Fri Oct 25 2019 17:40:56 GMT-0400 (Eastern Daylight Time)
            var currentHour = new Date().getHours();//Current hour in military time
            //testing
            // currentHour = 13;
            console.log(currentDateAndTime);
            var d = new Date();
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            //"Monday, October 28th";
            var ordinal = english_ordinal_suffix(d);
            var dateString = days[d.getDay()] + ", " + months[d.getMonth()] + " " + ordinal;
            document.getElementById("headerDate").innerHTML = dateString;
            function english_ordinal_suffix(dt) {
                return dt.getDate() + (dt.getDate() % 10 == 1 && dt.getDate() != 11 ? 'st' : (dt.getDate() % 10 == 2 && dt.getDate() != 12 ? 'nd' : (dt.getDate() % 10 == 3 && dt.getDate() != 13 ? 'rd' : 'th')));
            }
            var workhours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
            var plannerEntry = {};
            // create 9 elements for planner work hours 9AM through 5PM
            for (var i = 0; i < 9; i++) {
                var rowDiv = $("<div>");
                rowDiv.addClass("row");
                var hourDiv = $("<div>");
                hourDiv.addClass("leftCol");
                hourDiv.text(workhours[i]);
                // var hourBtn = $("<button>");
                var hourBtn = $("<input>");
                // try to retrieve any entry saved in local storage
                hourBtn.val(localStorage.getItem(workhours[i]));
                // console.log(workhours[i]);
                hourBtn.addClass("hour-button hours hour-button-color");
                if (currentHour - 9 === i) {
                    hourBtn.addClass("present"); //add class for present hour
                } else if (currentHour - 9 > i) {
                    hourBtn.addClass("past"); //add class for past hour
                } else if (currentHour - 9 < i) {
                    hourBtn.addClass("future"); //add class for future
                }
                hourBtn.attr("data-houredit", workhours[i]);
                hourBtn.attr("id", workhours[i]);
                // create save button, add classes, create data attribute to store the work hour
                var saveBtn = $("<button>");
                saveBtn.addClass("savebtn fa fa-save");
                saveBtn.attr("data-savebtn", workhours[i]);
                // first append the 3 elements to our rowDiv, then append to #planner div    
                rowDiv.append(hourDiv, hourBtn, saveBtn);
                $("#planner").append(rowDiv);
            }
 
            $(".savebtn").on("click", function () {
                
                plannerEntry.hour = $(this).attr("data-savebtn");
                plannerEntry.entry = $("#" + plannerEntry.hour).val().trim();                
        
                localStorage.setItem(plannerEntry.hour, plannerEntry.entry);
            })
        });
    
    <script src="https://kit.fontawesome.com/55a94f0e16.js" crossorigin="anonymous"></script>
