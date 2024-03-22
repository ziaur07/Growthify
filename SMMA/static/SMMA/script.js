// slider

document.addEventListener('DOMContentLoaded', function() {
    $('.testimonial-carousel').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true
        
    });
});


// FAQs

document.addEventListener('DOMContentLoaded', function() {
    var faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            var answer = this.nextElementSibling;
            answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        });
    });
});

// cursor


// paralaxx

window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    const scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});


/// scrolling


function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

// animation
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('left')) {
            entry.target.classList.add("show-items-left");
            entry.target.addEventListener('animationend', () => {
              entry.target.classList.remove("show-items-left");
            });
          } else if (entry.target.classList.contains('right')) {
            entry.target.classList.add("show-items-right");
            entry.target.addEventListener('animationend', () => {
              entry.target.classList.remove("show-items-right");
            });
          } else {
            entry.target.classList.add("show-items");
            entry.target.addEventListener('animationend', () => {
              entry.target.classList.remove("show-items");
            });
          }
        }
      });
    });
  
    const animateElements = document.querySelectorAll(".animate, .animate2 .left, .animate3 .right");
    animateElements.forEach((el) => observer.observe(el));
  });


  // hide nav

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos === 0) { // Check if user is at the top of the page
      document.querySelector(".navbar").style.top = "0";
    } else {
      document.querySelector(".navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }


  //loader


  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementById('mySvg').style.display = 'none';
    }, 2000);
  });