const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Get busy living or get busy dying. - Stephen King",
  "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy"
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerText = quotes[randomIndex];
}

function shareOnTwitter() {
  const quote = document.getElementById('quote').innerText;
  const additionalText = "Learning about GenAI with @getpieces by @ialimustufa\nLearned about ...";
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + ' ' + additionalText)}`;
  window.open(twitterUrl, '_blank');
}

function shareOnFacebook() {
  const quote = document.getElementById('quote').innerText;
  const additionalText = "Learning about GenAI with @getpieces by @ialimustufa\nLearned about ...";
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(quote + ' ' + additionalText)}`;
  window.open(facebookUrl, '_blank');
}

// Dark Mode Toggle
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleButton.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
