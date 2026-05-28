// wait until EVERYTHING is loaded
window.onload = function () {

  const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

if (hamburger && menu) {

  hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    menu.classList.toggle("active");

  });

}

// CAROUSEL

const carousel =
  document.getElementById("carousel");

const leftBtn =
  document.getElementById("leftBtn");

const rightBtn =
  document.getElementById("rightBtn");

if (carousel && leftBtn && rightBtn) {

  // START CENTERED

  setTimeout(() => {

    carousel.scrollLeft =
      (carousel.scrollWidth - carousel.clientWidth) / 2;

  }, 100);

  rightBtn.addEventListener("click", () => {

    carousel.scrollBy({
      left: 500,
      behavior: "smooth"
    });

  });

  leftBtn.addEventListener("click", () => {

    carousel.scrollBy({
      left: -500,
      behavior: "smooth"
    });

  });

}

  // floating sparkles

  for (let i = 0; i < 25; i++) {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";

    sparkle.style.left =
      Math.random() * 100 + "vw";

    sparkle.style.top =
      Math.random() * 100 + "vh";

    sparkle.style.fontSize =
      10 + Math.random() * 20 + "px";

    sparkle.style.opacity = "0.4";

    sparkle.style.pointerEvents = "none";

    document.body.appendChild(sparkle);
  }

  // TYPING EFFECT

const elements =
  document.querySelectorAll(".typing");

elements.forEach(el => {
  el.textContent = "";
});

function typeText(el) {

  return new Promise(resolve => {

    const text =
      el.dataset.text;

    let i = 0;

    function type() {

      if (i < text.length) {

        el.textContent += text.charAt(i);

        i++;

        setTimeout(type, 20);

      } else {

        resolve();

      }

    }

    type();

  });

}

async function runTyping() {

  for (let el of elements) {

    await typeText(el);

    await new Promise(r =>
      setTimeout(r, 600)
    );

  }

}

runTyping();
}
