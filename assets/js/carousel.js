(function($) {

  let currentSlide = 0;
  let $slides;

  function showSlide(index) {
    $slides.removeClass('active');
    currentSlide = (index + $slides.length) % $slides.length;
    $slides.eq(currentSlide).addClass('active');
  }

  function changeSlide(direction) {
    showSlide(currentSlide + direction);
  }

  $(function() {
    $slides = $('.carousel-img');
    if ($slides.length > 0) {
      showSlide(currentSlide);
    }
  });

  window.changeSlide = changeSlide;

})(jQuery);