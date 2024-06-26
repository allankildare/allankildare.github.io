$('.navbar .section-link > a, a.expand-more').click(function (e) {
  e.preventDefault()
  var id = $(this).attr('href')
  if (id.includes('#')) targetOffset = $(id).offset().top
  else window.location.href = id
  $('html, body').animate(
    {
      scrollTop: targetOffset - 30,
    },
    600
  )
})

$(document).ready(function() {
  const $mainMenu = $('.main-menu');
  const scrollThreshold = 50; 

  $(window).scroll(function() {
    if ($(this).scrollTop() > scrollThreshold) {
      $mainMenu.addClass('scrolled');
    } else {
      $mainMenu.removeClass('scrolled');
    }
  });
});
