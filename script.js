
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('h3, ul');
    
    items.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transition = 'opacity 1s ease';
        
        setTimeout(() => {
            item.style.opacity = 1;
        }, index * 300);
    });
});
