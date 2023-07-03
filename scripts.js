(function () {
  document.addEventListener("DOMContentLoaded", function (event) {
    var scrollFadeEffectEls = document.querySelectorAll(".scroll-fade-effect");

    scrollFadeInit(scrollFadeEffectEls);

    window.addEventListener("scroll", function () {
      scrollFadeEffect(scrollFadeEffectEls);
    });
  });

  function scrollFadeInit(currentElements) {
    var windowHeight = window.innerHeight;
    for (var i = 0; i < currentElements.length; i++) {
      var posFromTop = currentElements[i].getBoundingClientRect().top;
      if (posFromTop - windowHeight > 0) {
        currentElements[i].style.opacity = 1;
      }
    }
  }

  function scrollFadeEffect(currentElements) {
    var windowHeight = window.innerHeight;
    var windowMiddle = windowHeight / 2;
    var windowFadeMark = windowHeight / 4;

    for (var i = 0; i < currentElements.length; i++) {
      var element = currentElements[i];
      var posFromTop = element.getBoundingClientRect().top;
      var elementMiddle = posFromTop + element.offsetHeight / 2;

      if (posFromTop - windowHeight <= 0 && elementMiddle > windowFadeMark) {
        var opacity = 1 - (elementMiddle - windowMiddle) / windowMiddle;
        element.style.opacity = opacity+0.2;

      } else {
        element.style.opacity = 1;
      }
    }
  }
})();
