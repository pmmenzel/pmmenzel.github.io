//Parallax effect

$objWindow = $(window);
$('div[data-type="background"]').each(function(){
  var $bgObj = $(this);
  $(window).scroll(function() {
    var yPos = -($objWindow.scrollTop() / $bgObj.data('speed'));

    var coords = '100% ' + yPos + 'px';
    // Animate background
    $bgObj.css({ backgroundPosition: coords });
  });
});

// Animates scroll waypoints

$(".fa-chevron-down").on("click", function(e) {
    // Find the next section
    var nextSection = $(this).parent().parent().next();
    // Bring next section to the top of the view port, slow scroll with animate
    $('body').animate({scrollTop:nextSection.offset().top},500);
    return false;
});

// website for parallax:
// http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641