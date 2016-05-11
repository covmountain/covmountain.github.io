$(document).ready(function() {
  var startDate;
  var endDate;
  var id;
  console.log("JQ Running");
  
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    timeFormat: 'H:mm',
    columnFormat: 'ddd D', //formats date on columns of calendar
    eventLimit: true,
    eventSources: [
    {
      url: 'gc/events.php',
    },
    {  
      url: 'gc/sports.php',
      color: '#257E4A'
    }
    ],
    allDayDefaul: true,
    eventClick: function(calEvent, jsEvent, view) {
      $('.modal').css('display', 'block');
      $('#overlay').css('display', 'block');
      id = calEvent.id;
      $('.modal').attr('id', id);

      console.log($(this).css('background-color'));
      $('#modal-banner').css('background-color', $(this).css('background-color'));
      $('#title').text(calEvent.title); 
      startDate = calEvent.start;
      console.log(startDate);
      endDate = calEvent.end;
      console.log(endDate, 'THIS IS THE END DATE');
      $('#start').text(moment(startDate).format('MMMM Do YYYY, h:mm:ss a'));
      if (endDate) {
        $('#end').text(moment(endDate).format('MMMM Do YYYY, hh:mm:ss a'));
      }
      if (calEvent.description === null) {
        calEvent.description = ' ';
      }
      $('#description').text(calEvent.description);
      //stopPropagation stops a click event bubbling through the DOM and acting on underlying elements
      $('#close').click(function(e) {
        closeModal(e);
      });
      $(overlay).click(function(e) {
        closeModal(e);
      });
      $('.modal').click(function(e) {
        e.stopPropagation();
        $('#overlay').css('display', 'block');
      });
    },
    eventMouseover: function(calEvent, jsEvent) {
      $(this).css('cursor', 'pointer'); 
      //modal.style.display = 'block';  
    },
    eventMouseout: function(calEvent) {
    }
  });
  console.log("Not getting here");
  //Handles list view
  if (document.getElementById('upcoming')) {
    //Append the 3 most upcoming events to a list in a div id="upcoming"
    $.getJSON( "gc/events.php", function (data) {
      displayList('upcoming', data);
    });
  }
  if (document.getElementById('upcoming-sports')) {
    console.log("Upcoming sports div found");
    $.getJSON('gc/sports.php', function (data) {
      displayList('upcoming-sports', data);
    });
  }
});

function unixTimeStamp(x) {
  return Date.parse(x); 
}
/*
function displayList(category, data) {
    console.log("Display function running");
    var upcoming = document.getElementById(category);
    var maxResults = 3;
    var upcomingEvents = [];
    //Make i the index of the first result that matches or succeeds the current date
    data.forEach(function(i) {
      console.log(i);
      console.log((unixTimeStamp(i.start)), " - ", (unixTimeStamp(new Date().toJSON())));
      if ((unixTimeStamp(i.start)) >= (Date.parse(new Date().toJSON()))) {
        upcomingEvents.push(i);
      }
    });

    console.log("UPCOMING EVENTS: ", upcomingEvents);

    for (var i = 0; i < maxResults; i++) {
      var li = document.createElement('li');
      var h3 = document.createElement('h3');

      h3.appendChild(document.createTextNode(upcomingEvents[i].title));
      h3.setAttribute('id', 'list-title');
      li.appendChild(h3);
      upcoming.appendChild(li);

      var date = upcomingEvents[i].start;
      var listEndDate = upcomingEvents[i].end;
      console.log(listEndDate, "end date");
      

      if (!date) {
        date = upcomingEvents.start;
      }
      date = moment(date).format('MMMM Do YYYY, h:mm:ss a');

      var time;
      time = date.split(',')[1];
      date = date.split(',')[0];

      if (listEndDate.split('T')[1]) {
        time = time + " - " + moment(listEndDate).format('h:mm a');
      }

      if (i === maxResults - 1) {
        li.setAttribute('id', 'list-bottom');
      } else {
        li.style.borderBottom = 'dotted 1px #DDD';
      }
      var listDate = document.createElement('p');
      var listTime = document.createElement('p');
      listTime.setAttribute('id', 'list-time');
      listTime.appendChild(document.createTextNode(time));
      listDate.setAttribute('id', 'list-date');
      listDate.appendChild(document.createTextNode(date));
      li.appendChild(listDate);
      li.appendChild(listTime);
    }
    console.log("JQ FINISHED");
}
*/


function closeModal(e) {
    e.stopPropagation(); 
    $('#add').css('background-color', '#EDEDED');
    $('#button-text').css('color', 'black');
    $('#button-text').text(' Add to your calendar');
    $('#button-icon').removeClass('fa-check').addClass('fa-calendar');
    $('#button-icon').css('color', 'black');
    console.log("Event listener running");
    overlay.style.display = 'none';
}
