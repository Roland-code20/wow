document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.rating').forEach(function(ratingDiv) {
    const stars = ratingDiv.querySelectorAll('.star');
    const ratingValue = ratingDiv.querySelector('.rating-value');
    const articleId = ratingDiv.getAttribute('data-article');
    let selected = 0;

    // Load saved rating
    const saved = localStorage.getItem('article-rating-' + articleId);
    if (saved) {
      selected = parseInt(saved, 10);
      ratingValue.textContent = `(${selected}/5)`;
      stars.forEach((s, i) => {
        s.classList.toggle('selected', i < selected);
      });
    }

    stars.forEach(function(star, idx) {
      star.addEventListener('mouseover', function() {
        stars.forEach((s, i) => {
          s.classList.toggle('selected', i <= idx);
        });
      });
      star.addEventListener('mouseout', function() {
        stars.forEach((s, i) => {
          s.classList.toggle('selected', i < selected);
        });
      });
      star.addEventListener('click', function() {
        selected = idx + 1;
        localStorage.setItem('article-rating-' + articleId, selected);
        ratingValue.textContent = `(${selected}/5)`;
        stars.forEach((s, i) => {
          s.classList.toggle('selected', i < selected);
        });
      });
    });
  });
});