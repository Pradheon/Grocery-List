$(function() {
  var $listItemText = $('li').text();
  $('li').append('<i>' + $listItemText + '</i>');
});

// $('li').text(); will return
// fresh figspine nutshoneybalsamic vinegar
// [        ][       ][   ][              ]
//
// Note how this returns the TEXT content of all 'li' elements 
// (including spaces between words), 
// but there are no spaces between the individual 'li'