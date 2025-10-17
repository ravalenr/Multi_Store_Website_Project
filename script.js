window.addEventListener('scroll', function() {
    document.querySelectorAll('.produto').forEach(function(produto) {
      if (produto.getBoundingClientRect().top < window.innerHeight) {
        produto.classList.add('is-visible');
      }
    });
  });
  