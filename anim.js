(function() {
/*
 * Starts any clocks using the user's local time
 * From: cssanimation.rocks/clocks
 */
function initKnife() {
  // Get the local time using JS
  // Create an object with each hand and it's angle in degrees
  var hands = [
    {
      hand: 'cyan',
      angle: -45
    },
    {
      hand: 'purp',
      angle: -120
    },
    {
      hand: 'grn',
      angle: -202
    },
    {
      hand: 'yllw',
      angle: -282.8
    }
  ];
  // Loop through each of these hands to set their angle
  for (var j = 0; j < hands.length; j++) {
    var elements = document.querySelectorAll('.' + hands[j].hand);
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
        elements[k].style.MozTransform = 'rotateZ('+ hands[j].angle +'deg)';
        elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
    }
  }
}

    ////////////////  RESIZING

    function jqUpdateSize(){

    $('.site').flowtype({
       minimum   : 100,
       maximum   : 2000,
       minFont   : 8,
       maxFont   : 48.25,
       fontRatio : 100
    });
};
$(document).ready(jqUpdateSize);    // When the page first loads
$(window).resize(jqUpdateSize);     // When the browser changes size

  //end of function
})();