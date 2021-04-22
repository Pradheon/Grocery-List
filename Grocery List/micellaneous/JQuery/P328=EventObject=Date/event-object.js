//
// Date() : Date Object in JavaScript


$(function() {
  $('li').on('click', function(e) {
    $('li span').remove();
    $('.notice').remove();
    var date = new Date();
    //date.setTime(e.timeStamp);
    //var clicked = Date.now() // performance.now();
    $('ul').before('<p class="notice">' + date + '</p>');
    $(this).append('<span class="date">' + e.type + '</span>');
  });

});

// Notes: event.timeStamp returns number of milli-seconds since epoch-time
// epoch-time: either 1970-0101 or last system-up 
//
// Notes: FireFox & Chrome have issue providing correct event.timeStamp
//