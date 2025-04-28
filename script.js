
document.addEventListener('DOMContentLoaded', function() {
  const headers = document.querySelectorAll('.timeline-header');

  headers.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling.nextElementSibling; // 跳過 .timeline-dot 找 .timeline-content

      if (content.classList.contains('show')) {
        content.classList.remove('show');
        this.classList.remove('open');
      } else {
        content.classList.add('show');
        this.classList.add('open');
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const topBtn = document.getElementById('topBtn');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      topBtn.style.display = 'flex';
    } else {
      topBtn.style.display = 'none';
    }
  });

  topBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
