$(document).ready(function() {
  var startDate;
  var endDate;
  var id;
  
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
	    url: '../dates.json',
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
});

function unixTimeStamp(x) {
  return Date.parse(x); 
}

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
