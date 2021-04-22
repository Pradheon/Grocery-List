$(function() {
  $('li#three').removeClass('hot');
  $('li.hot').addClass('favorite');
  $('ul').attr('id', 'group');
});

// attr() can GET or SET a specific attribute and its value
// attr('id')        to get the value of attribute 'id'
// attr('id', 'hot') to set the value of attribute 'id' to 'hot'
//
// removeAttr() removes a specific attribute and its value
//
// addClass()
// removeClass()