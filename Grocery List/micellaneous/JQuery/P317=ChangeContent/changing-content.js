$(function() {
  $('li:contains("pine")').text('almonds');     // Replace 'li' which contains 'pine' with 'almonds'
  $('li.hot').html(function() {
    return '<em>' + $(this).text() + '</em>';   // Change the style to <em> without changing contents
  });
  $('li#one').remove();     // remove the 'li' tag of id 'one'
});