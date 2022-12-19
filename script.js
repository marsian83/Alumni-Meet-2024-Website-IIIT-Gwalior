window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

function vh(v) {
  var h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return (v * h) / 100;
}

window.addEventListener("scroll", () => {
  if (window.scrollY > vh(1)) {
    document.querySelector(".navbar").classList.add("nav-stuck");
  } else {
    document.querySelector(".navbar").classList.remove("nav-stuck");
  }
});

const scrollToElement = (e) => {
  e.scrollIntoView({ behavior: "smooth" });
};

const scrollToClass = (c) => {
  scrollToElement(document.querySelector(`.${c}`));
};

function triggerOnScroll(scrollDistance, callback) {
  let referenceScrollPosition = window.scrollY;
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > referenceScrollPosition + scrollDistance) {
      callback();
    }
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      triggerOnScroll(vh(15), () => {
        entry.target.classList.add("anim-show");
      });
    } else {
      entry.target.classList.remove("anim-show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".anim-hidden");
hiddenElements.forEach((e) => {
  observer.observe(e);
});

const iiitmSlideshow = [
  "https://qph.cf2.quoracdn.net/main-qimg-61e33658028cc179267efb633e9c503e-pjlq",
  "https://qph.cf2.quoracdn.net/main-qimg-f87a32b5579e7ab706d129ff1657ff55-lq",
  "https://qph.cf2.quoracdn.net/main-qimg-958ff592629e78d8ef0ec849841a623d-pjlq",
  "https://qph.cf2.quoracdn.net/main-qimg-8307a0c945bd0ecfb682ceb3147d287b-pjlq",
  "https://qph.cf2.quoracdn.net/main-qimg-68eeb6842c095188dc417e5193f39fd6-pjlq",
  "https://qph.cf2.quoracdn.net/main-qimg-b8116c52ed05702df9d8954ccd99642f-pjlq",
];

let iiitmSlideshowSlide = 0;

setInterval(() => {
  const e = document.querySelector(".about-iiitm-image");
  e.classList.add("slideshow-anim");
  setTimeout(() => {
    e.src = iiitmSlideshow[iiitmSlideshowSlide++ % iiitmSlideshow.length];
    setTimeout(() => {
      e.classList.remove("slideshow-anim");
    }, 400);
  }, 400);
}, 6000);

let formOpenCount = 0;

const showFormModal = () => {
  formOpenCount += 1;
  if (formOpenCount < 4) {
    document.querySelector(".modal").classList.add("show");
  } else {
    let newwindow = window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSeVkBW3DWVHb06999nDShuTh3gD1bKK2FqJnNQnQVljXU-0Lg/viewform?usp=sf_link",
      "_new",
      "height=720,width=640"
    );
    if (window.focus) {
      newwindow.focus();
    }
  }
};

const closeFormModal = () => {
  document.querySelector(".modal").classList.remove("show");
};
