$(function() {
  $('h2').hide().delay(700).slideDown();
  var $li = $('li');
  $li.hide().each(function(index) {
    $(this).delay(700 * (index+1)).fadeIn(700);
  });

  $li.on('click', function() {
    $(this).fadeOut(700);
  });

});