$(document).ready(function() {
  //console.log("Hearing");
  main();
});

function main() {
  $('#add').click(function() {
    conosle.log("Booyah");

    UNIQUE = '';
    var id = $('.modal').attr('id');
    $.getJSON('gc/events.php', function(data) {
      display(data, id);
    });
    $.getJSON('gc/sports.php', function(data) {
      display(data, id);
    });
    try {
      handleAuthClick();
    } catch(err) {
      alert("There was as error inserting even");
    }
  });
}


function display(data, id) {
  var array;
  data.forEach(function(i) {
    if (i.id === id) {
      addEvent(i.title, i.start, i.end, i.location, i.description);
    }
  });
}

function addEvent(summary, start, end, location, description) {
  //Get correct date/dateTime format
  if (start.split('T').length === 1) {
    event = {
      'summary': summary,
      'description': description,
      'start': {
        'date': start,
      },
      'end': {
        'date': end,
      }
    };
  } else {
    event = {
      'summary': summary,
      'description': description,
      'start': {
        'dateTime': start,
      },
      'end': {
        'dateTime': end,
      }
  };
  }
  console.log(event, ' This is the current event');
  UNIQUE = event;
  console.log(UNIQUE);
  //console.log(eventToAdd);
}

  var event = {};
  var UNIQUE = {};
  var CLIENT_ID = '837078947181-hqebluc9io3lgekd0ivv6qrvqmbgcbir.apps.googleusercontent.com';

  var SCOPES = ["https://www.googleapis.com/auth/calendar"];

  /**
   * Check if current user has authorized this application.
   */
  function checkAuth() {
    gapi.auth.authorize(
      {
        'client_id': CLIENT_ID,
        'scope': SCOPES,
        'immediate': true
      }, handleAuthResult);
  }

  /**
   * Handle response from authorization server.
   *
   * @param {Object} authResult Authorization result.
   */
  function handleAuthResult(authResult) {
    var authorizeDiv = document.getElementById('authorize-div');
    if (authResult && !authResult.error) {
      // Hide auth UI, then load client library.
      authorizeDiv.style.display = 'none';
      loadCalendarApi();
    } else {
      // Show auth UI, allowing the user to initiate authorization by
      // clicking authorize button.
      authorizeDiv.style.display = 'inline';
    }
  }

  /**
   * Initiate auth flow in response to user clicking authorize button.
   *
   * @param {Event} event Button click event.
   */
  function handleAuthClick(event) {
    gapi.auth.authorize(
      {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
      handleAuthResult);
    return false;
  }

  /**
   * Load Google Calendar client library. List upcoming events
   * once client library is loaded.
   */
  function loadCalendarApi() {
    gapi.client.load('calendar', 'v3', listUpcomingEvents);
  }

  /**
   * Print the summary and start datetime/date of the next ten events in
   * the authorized user's calendar. If no events are found an
   * appropriate message is printed.
   */
  function listUpcomingEvents() {
    event = event;
    console.log(UNIQUE, ' UNIQUE VARIABLE');
    console.log(event, ' event before modified');
    event = UNIQUE;
   
    var request = gapi.client.calendar.events.insert({
      'calendarId': 'primary',
      'resource': event
    });
    

    request.execute(function(resp) {
      console.log(resp);
    });
    $('#add').css('background-color', '#76C859');
    $('#button-text').css('color', 'white');
    $('#button-text').text(' Added to your calendar');
    $('#button-icon').removeClass('fa-calendar').addClass('fa-check');
    $('#button-icon').css('color', '#DBF5DD');

  }
