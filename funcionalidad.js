window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var scrollHeight = window.innerHeight + window.scrollY;
    var documentHeight = document.body.offsetHeight;
    if (scrollHeight >= documentHeight) {
        footer.style.display = 'block'; 
    } else {
        footer.style.display = 'none'; 
    }
});