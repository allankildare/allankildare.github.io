function collapse(el) {
  $(el).click(function () {
    $(this).toggleClass('active')
    $('.menu').toggleClass('active')
  })
}
$(document).ready(collapse('.burger-icon'))
$(document).ready(collapse('.menu li a'))
