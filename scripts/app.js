$('nav a, a.expand-more').click(function (e) {
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
