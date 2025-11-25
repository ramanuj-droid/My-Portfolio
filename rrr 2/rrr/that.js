 document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show"); // hide again when out of view
        }
      });
    },
    {
      threshold: 0.25, // 25% visible triggers animation
      rootMargin: "0px 0px -10% 0px",
    }
  );

  items.forEach((item) => observer.observe(item));
});
   document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector(".akshay");

  function wrapLetters(node) {
    node.childNodes.forEach(child => {
      if (child.nodeType === Node.TEXT_NODE) {
        const letters = child.textContent.split("");
        const wrapped = letters.map(l => `<span class="letter">${l}</span>`).join("");
        const span = document.createElement("span");
        span.innerHTML = wrapped;
        child.replaceWith(span);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        wrapLetters(child); // recurse into child elements
      }
    });
  }

  wrapLetters(heading);

  const letters = document.querySelectorAll(".letter");
  letters.forEach((letter, i) => {
    letter.style.display = "inline-block";
    letter.style.opacity = 0;
    letter.style.transform = "translateY(50px)";
    setTimeout(() => {
      letter.style.transition = "all 0.5s ease";
      letter.style.opacity = 1;
      letter.style.transform = "translateY(0)";
    }, i * 50); // stagger letters
  });
});
  