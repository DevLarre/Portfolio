function handlePlaceholder(element, placeholder) {
    element.addEventListener('focus', function() {
        if (this.placeholder === placeholder) {
            this.placeholder = '';
        }
    });

element.addEventListener('blur', function(){
    if (this.placeholder === '') {
        this.placeholder = placeholder;
    }
});
}

handlePlaceholder(placeEnd, 'NAME');
handlePlaceholder(placeEnd1, 'E-MAIL');
handlePlaceholder(message, 'MESSAGE');

function scrollToTop() {
    window.scrollTo(0, 0);
}

let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) { 
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});


function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  let scrollToEndButton = document.getElementById("scrollToEndButton");

  scrollToEndButton.style.display = "block";

  function scrollToEnd() {
    scrollToBottom();
  }