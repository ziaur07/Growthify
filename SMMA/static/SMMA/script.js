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

const root = document.querySelector('html')

// Real cursor element
const cursor = document.createElement('div')
cursor.classList.add('cursor')
root.appendChild(cursor)

// Following extra cursor element
const follower = document.createElement('div')
follower.classList.add('cursor', 'cursor__follower')
root.appendChild(follower)


root.addEventListener('mousemove', (e) => {
  setPosition(follower, e)
  setPosition(cursor, e)
})

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
}

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