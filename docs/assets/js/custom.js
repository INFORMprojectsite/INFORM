// Scroll Top
$('.top').click(function() {
  $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});
$(window).scroll(function() {
  if ($(this).scrollTop() > $(window).height()) {
    $('.top').addClass("up");
  } else {
    $('.top').removeClass("up");
  }
});

// index page scripts
// dynamically set tile gradient colors based on frontmatter
$(function() {
  $('.gradient-block').each((idx, element) => {
    let $tile = $(element);
    let color_a = $tile.data('color');
    let color_b = $tile.data('color2');
    // if user provides only color or color2, set to be that color
    if (!color_a && color_b) {
      color_a = color_b
    }
    if (!color_b && color_a) {
      color_b = color_a
    }
    // if both colors have been provided, linear-gradient them
    $tile.css("background-image", "linear-gradient(45deg, " + 
    (color_a || "#e66465") + "," + 
    (color_b || "#9198e5") + ")");
  });
});

// page scripts
$(function() {
  let $article = $('article');
  let color_a = $article.data('color');
  let color_b = $article.data('color2');
  // if user provides only color or color2, set to be that color
  if (!color_a && color_b) {
    color_a = color_b
  }
  if (!color_b && color_a) {
    color_b = color_a
  }
  $article.find('.post_title')
    .css("background-image", "linear-gradient(45deg, " + 
    (color_a || "#e66465") + "," + 
    (color_b || "#9198e5") + ")");
});
