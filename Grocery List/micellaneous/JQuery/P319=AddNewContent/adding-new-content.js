$(function() {
  $('ul').before('<p class="notice">Just updated</p>');
  $('li.hot').prepend('+ ');
  var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>');
  $('li:last').after($newListItem);
  $('li:last').append(' *');
});

// before() inserts content BEFORE the selected element(s)
// after()  inserts content AFTER  the selected element(s)
//
// prepend() inserts content INSIDE the selected element(s), after  the opening tag
// append()  inserts content INSIDE the selected element(s), before the closing tag
//
// A.prepend(B)   ---> add B to A        A.append(B)   ---> add B to A 
// A.prependTo(B) ---> add A to B        A.appendTo(B) ---> add A to B