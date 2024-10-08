document.addEventListener("DOMContentLoaded", function () {
  const multipleItemCarousel = document.querySelector(
    "#carouselExampleControls"
  );

  if (window.matchMedia("(min-width: 576px)").matches) {
    // Initialize Bootstrap carousel
    const carousel = new bootstrap.Carousel(multipleItemCarousel, {
      interval: false,
      wrap: false,
    });

    let carouselInner = document.querySelector(".carousel-inner");
    let carouselWidth = carouselInner.scrollWidth;
    let cardWidth = document.querySelector(".carousel-item").offsetWidth;

    let scrollPosition = 0;

    // Next button click event
    document
      .querySelector(".carousel-control-next")
      .addEventListener("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
          scrollPosition += cardWidth;
          carouselInner.scroll({
            left: scrollPosition,
            behavior: "smooth",
          });
        }
      });

    // Previous button click event
    document
      .querySelector(".carousel-control-prev")
      .addEventListener("click", function () {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          carouselInner.scroll({
            left: scrollPosition,
            behavior: "smooth",
          });
        }
      });
  } else {
    multipleItemCarousel.classList.add("slide");
  }
});
