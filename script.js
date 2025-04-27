
function toggleContent(clickedHeader) {
  const allHeaders = document.querySelectorAll('.timeline-header');
  const allContents = document.querySelectorAll('.timeline-content');

  allHeaders.forEach(header => {
    if (header !== clickedHeader) {
      header.classList.remove('open');
    }
  });

  allContents.forEach(content => {
    if (content !== clickedHeader.nextElementSibling) {
      content.classList.remove('show');
      content.style.display = 'none';
    }
  });

  clickedHeader.classList.toggle('open');
  const content = clickedHeader.nextElementSibling;
  if (content.classList.contains('show')) {
    content.classList.remove('show');
    content.style.display = 'none';
  } else {
    content.style.display = 'block';
    setTimeout(() => {
      content.classList.add('show');
    }, 10);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const firstHeader = document.querySelector('.timeline-header');
  if (firstHeader) {
    toggleContent(firstHeader);
  }
});
