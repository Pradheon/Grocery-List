// Conventionally, we start a jQuery variableName with $. e.g., $listHTML in this example
//
// html() is a jQuery method that retrieves information from a jQuery selection;
// it retrieves only the HTML inside the FIRST element in the matched set, 
// along with any of this descendants.
//
// append() is a jQuery method that inserts contents inside the selected element(s)
// before the closing tag

$(function() {
  var $listHTML = $('ul').html();   // Get all HTML segments under 'ul' tag
  $('ul').append($listHTML);        // Append it to the 'ul' tag
});

// $('ul').html(); will return the followings (HTML of the FIRST 'ul' tag):
//        <li id="one"   class="hot"><em>fresh</em> figs</li>
//        <li id="two"   class="hot">pine nuts</li>
//        <li id="three" class="hot">honey</li>
//        <li id="four"             >balsamic vinegar</li>
