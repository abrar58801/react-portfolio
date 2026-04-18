import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: {
    chars: NodeListOf<Element>;
    words: NodeListOf<Element>;
  };
}

// ✅ Custom SplitText Replacement
function splitTextElement(el: HTMLElement) {
  // prevent duplicate splitting
  if (el.querySelector(".char")) {
    return {
      chars: el.querySelectorAll(".char"),
      words: el.querySelectorAll(".word"),
    };
  }

  const text = el.textContent || "";

  el.innerHTML = text
    .split(" ")
    .map(
      (word) =>
        `<span class="word">${word
          .split("")
          .map(
            (c) =>
              `<span class="char">${c === " " ? "&nbsp;" : c}</span>`
          )
          .join("")}</span>`
    )
    .join(" ");

  return {
    chars: el.querySelectorAll(".char"),
    words: el.querySelectorAll(".word"),
  };
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });

  if (window.innerWidth < 900) return;

  const paras: NodeListOf<ParaElement> =
    document.querySelectorAll(".para");

  const titles: NodeListOf<ParaElement> =
    document.querySelectorAll(".title");

  const TriggerStart =
    window.innerWidth <= 1024 ? "top 60%" : "20% 60%";

  const ToggleAction = "play pause resume reverse";

  // 🔥 PARAGRAPH ANIMATION
  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");

    if (para.anim) {
      para.anim.progress(1).kill();
    }

    const split = splitTextElement(para);
    para.split = split;

    para.anim = gsap.fromTo(
      split.words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.02,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });

  // 🔥 TITLE ANIMATION
  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
    }

    const split = splitTextElement(title);
    title.split = split;

    title.anim = gsap.fromTo(
      split.chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        y: 0,
        rotate: 0,
        duration: 0.8,
        ease: "power2.inOut",
        stagger: 0.03,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });

  // 🔄 refresh safely
  ScrollTrigger.refresh();
}