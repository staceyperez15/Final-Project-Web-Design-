// wait until EVERYTHING is loaded (images, DOM, etc.)
window.onload = function () {

  // floating sparkles
  for (let i = 0; i < 25; i++) {
    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";
    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.fontSize = 10 + Math.random() * 20 + "px";
    sparkle.style.opacity = "0.4";
    sparkle.style.pointerEvents = "none";

    document.body.appendChild(sparkle);
  }

  const elements = document.querySelectorAll(".typing");

  console.log("Typing elements found:", elements.length); // DEBUG

  elements.forEach(el => {
    el.textContent = ""; // reset
  });

  function typeText(el) {
    return new Promise(resolve => {
      const text = el.getAttribute("data-text");
      let i = 0;

      function type() {
        if (i < text.length) {
          el.textContent += text[i];
          i++;
          setTimeout(type, 20);
        } else {
          resolve();
        }
      }

      type();
    });
  }

  async function run() {
    for (let el of elements) {
      await typeText(el);
      await new Promise(r => setTimeout(r, 600));
    }
  }

  run();
};