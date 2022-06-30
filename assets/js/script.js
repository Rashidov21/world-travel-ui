const intervalTime = 2000;
var heroImg = heroImg || document.querySelector("#heroImg");
document.querySelector("#bar").onclick = () =>
  document.querySelector(".menu").classList.toggle("show");

if (heroImg) {
  !(function () {
    var heroImgSrc = heroImg.getAttribute("src"); // get the current src it equals 'assets/img/hero-image-1.jpg'
    var imagesSources = [
      "assets/images/hero-image-1.png",
      "assets/images/hero-image-2.png",
      "assets/images/hero-image-3.png",
    ];
    var currentIndex = 0;
    var nextIndex = 1;
    var previousIndex = 2;
    var isPaused = false;
    var isAnimating = false;
    setInterval(function () {
      if (!isPaused) {
        if (isAnimating) {
          return;
        }
        isAnimating = true;
        // fade animation
        heroImg.style.opacity = 0;
        setTimeout(function () {
          heroImg.setAttribute("src", imagesSources[nextIndex]);
          currentIndex = nextIndex;

          nextIndex = (nextIndex + 1) % imagesSources.length;
          previousIndex = (previousIndex + 1) % imagesSources.length;

          setTimeout(function () {
            isAnimating = false;
          }, 1000);
        }, 200);

        setTimeout(function () {
          heroImg.style.opacity = 1;
        }
        , 200);
      }
    }, intervalTime);
    heroImg.addEventListener(
      "click",
      function () {
        if (isPaused) {
          isPaused = false;
          heroImg.setAttribute("src", imagesSources[currentIndex]);
        } else {
          isPaused = true;
        }
      },
      false
    );
  })();
}
