// Swiper setup for the testimonials section (config only, no custom logic)
const tText = new Swiper(".t-text", {
  effect: "slide",
  fadeEffect: { crossFade: true },
  allowTouchMove: false,
  rewind: true,
});

const tCards = new Swiper(".t-cards", {
  effect: "cards",
  grabCursor: true,
  rewind: true,
  cardsEffect: { slideShadows: false, perSlideOffset: 10, perSlideRotate: 5 },
  navigation: { nextEl: ".t-next", prevEl: ".t-prev" },
  pagination: { el: ".t-count", type: "fraction" },
  controller: { control: tText },
});