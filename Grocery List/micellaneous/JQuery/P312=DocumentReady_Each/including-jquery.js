//
// $(document) creates a jQuery object that represents the page.
// jQuery could define a function to be invoked when the page is ready; 
// the function inside the parentheses of the .ready() method will run
//
// Shortcut for ready event method on Document object:
// $(document).ready(function() {...  shortcut to be
// $(function(){...

$(document).ready(function() {
  $('h2').hide().delay(200).slideDown();               // For ALL 'h2'
  $('li').hide().each( function(index) {
      $(this).delay(700*(index+1)).fadeIn(700);
  });
});