<?php
/**
 * PHP version 5
 * @category Calendar*
 * @package Google_Calendar
 * @author Ed Prince <edward_prince@hotmail.com>
 * @license http://rem.mit-license.org/ MIT license
 * @link '/google-api-php-client/src/Google/autoload.php'
 */
require 'google-api-php-client/src/Google/autoload.php'; 
require 'developer-key.php';
 
$client = new Google_Client();
$client->setApplicationName("My Calendar"); //DON'T THINK THIS MATTERS
$client->setDeveloperKey($developer_key);
$cal = new Google_Service_Calendar($client);

$params = array(
    'singleEvents' => true, 
    'orderBy' => 'startTime'

    //Ordering from timemin prevents the calendar from displaying any previous events
    //'orderBy' => 'startTime',
    //'timeMin' => date(DateTime::ATOM)  
);

$events = $cal->events->listEvents($calendarId, $params); 
$calTimeZone = $events->timeZone;

date_default_timezone_set($calTimeZone);

$jsonEvents = json_encode($events->getItems());
$outerArray = array();
$innerArray = array();
foreach ($events->getItems() as $event) {  
    $date = $event->start->date; 
    if (!isset($date)) {
        $date = $event->start->dateTime;
    }
    $endDate = $event->end->dateTime;
    if (!isset($endDate)) {
        $endDate = $event->end->date;
    }


    $array = array(
      "title" => $event->summary,
      "description" => $event->description,
     tart" => $date,
      "end" => $endDate
    );
    array_push($outerArray, $array);
}
    echo json_encode($outerArray); 
?>
