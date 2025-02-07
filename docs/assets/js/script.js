const quotes = [
  [
    " — Marcus Aurelius",
    "You have power over your mind—not outside events. Realize this, and you will find strength.",
  ],
  ["— Seneca", "We suffer more often in imagination than in reality."],
  [
    " Marcus Aurelius",
    "The happiness of your life depends upon the quality of your thoughts.",
  ],
  [
    "— Seneca",
    "He who fears death will never do anything worthy of a living man.",
  ],
  ["— Epictetus", "Do not explain your philosophy. Embody it"],
  ["— Cleanthes", "Fate leads the willing, and drags along the reluctant."],
  ["— Seneca", "While we wait for life, life passes."],
  [
    "— Seneca",
    "No person has the power to have everything they want, but it is in their power not to want what they don’t have.",
  ],
  [
    "— Lao Tzu",
    "He who controls others may be powerful, but he who has mastered himself is mightier still.",
  ],
  [
    "— Epictetus",
    "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.",
  ],
  [
    "— Zeno of Citium",
    "A wise man is content with his lot, whatever it may be, without wishing for what he has not.",
  ],
  [" — Seneca", "The whole future lies in uncertainty: live immediately."],
];

function generateQuote() {
  const randomNumber = Math.ceil(Math.random() * quotes.length - 1);
  const quote = quotes[randomNumber];
  console.log(randomNumber);
  appendQuote(quote);
}

function appendQuote(quote) {
  document.querySelector("#quote").textContent = quote[1];
  document.querySelector("#author").textContent = quote[0];
}
