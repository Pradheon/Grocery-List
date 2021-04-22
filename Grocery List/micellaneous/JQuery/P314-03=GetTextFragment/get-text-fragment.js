//
// text() is the jQuery method that retrieves the TEXT from a jQuery selection;
// it returns the content from EVERY element in the jQuery selection, 
// along withe the TEXT from any descendants
//

$(function() {
  var $listText = $('ul').text();               // get ALL TEXT under 'ul' tag
  $('ul').append('<p>' + $listText  + '</p>');  // Create a 'p' tag of the above TEXT under 'ul' tag
});

// $('ul').text(); will returns:
//        fresh figs
//        pine nuts
//        honey
//        balsamic vinegar
