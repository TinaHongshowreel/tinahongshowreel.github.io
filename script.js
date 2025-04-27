
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
