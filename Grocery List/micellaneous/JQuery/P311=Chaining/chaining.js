// In jQuery, you could chain multiple methods to be performed on same selection.
// Use 'dot notation' to chain multiple methods. 
// Notes: If one method does not work, the rest will not run either.
//
$('li[id!="one"]').hide()
                  .delay(500)
                  .fadeIn(1400);
                  
//$('li:first-child').addClass('next');
//$('li.priority').addClass('highlight');