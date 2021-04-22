//
// 'mouseover' the 'li' element; id will be shown; 
// 'mouseover' the newly shown id, id will disappear
//
// 'mouseout' the 'li' element; the id will disappear
//
$(function() {
  var ids = '';
  var $listItems = $('li');

  $listItems.on('mouseover click', function() {
    ids = this.id;
    $listItems.children('span').remove();
    $(this).append(' <span class="priority">' + ids + '</span>');
  });

  $listItems.on('mouseout', function() {
    $(this).children('span').remove();
  });

});