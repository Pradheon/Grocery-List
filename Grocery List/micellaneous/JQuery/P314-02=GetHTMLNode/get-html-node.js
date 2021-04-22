$(function() {
  var $listItemHTML = $('li').html();               // Get the FIRST 'li' HTML TEXT
  $('li').append('<i>' + $listItemHTML + '</i>');   // Append it (italics) to the ALL 'li' tags 
});

// $('li').html(); will return the followings:
// <em>fresh</em> figs
// It is then appended to ALL 'li' elements italicsly