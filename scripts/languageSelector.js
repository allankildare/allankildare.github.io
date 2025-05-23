$(function () {
  const $toggle = $('#lang-toggle')
  const $menu = $('#lang-menu')

  $toggle.on('click', function (e) {
    e.stopPropagation()
    $menu.toggleClass('hidden')
    const isExpanded = $(this).attr('aria-expanded') === 'true'
    $(this).attr('aria-expanded', String(!isExpanded))
  })

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.language-switcher').length) {
      $menu.addClass('hidden')
      $toggle.attr('aria-expanded', 'false')
    }
  })
})