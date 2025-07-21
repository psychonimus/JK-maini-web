 

const navbar = document.getElementById("navbar");
let lastScrollTop = 0;

// ✅ Ensure correct class on initial load
window.addEventListener("DOMContentLoaded", () => {
  if (window.scrollY === 0) {
    navbar.classList.add("transparent");
    navbar.classList.remove("solid", "hidden");
  }
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  if (scrollTop === 0) {
    navbar.classList.add("transparent");
    navbar.classList.remove("solid", "hidden");
  } else {
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      navbar.classList.add("hidden");
    } else {
      // Scrolling up
      navbar.classList.remove("hidden");
      navbar.classList.remove("transparent");
      navbar.classList.add("solid");
    }
  }

  lastScrollTop = scrollTop;
});


        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            effect: "fade",
            loop : true,
            autoplay: {
                delay: 13000,
                disableOnInteraction: false,
              },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });


          function toggleMegaMenu(event) {
            if (window.innerWidth < 992) {
                event.preventDefault();
                const megaMenu = event.currentTarget.nextElementSibling;
                megaMenu.classList.toggle('show');
                const plusIcon = event.currentTarget.querySelector('span');
                plusIcon.textContent = megaMenu.classList.contains('show') ? '-' : '+';
            }
        }

        function toggleAccordion(header) {
            if (window.innerWidth < 992) {
                const ul = header.nextElementSibling;
                if (!ul) return; // Guard clause if ul doesn't exist

                const isActive = header.classList.contains('active');

                // Close all other accordions in the same mega-menu
                const parentMegaMenu = header.closest('.mega-menu');
                const allHeaders = parentMegaMenu.querySelectorAll('h4');
                const allUls = parentMegaMenu.querySelectorAll('ul');

                allHeaders.forEach(h => h.classList.remove('active'));
                allUls.forEach(u => u.classList.remove('active'));

                if (!isActive) {
                    header.classList.add('active');
                    ul.classList.add('active');
                }
            }
        }

        function openPopup() {
          document.getElementById("popupOverlay").style.display = "flex";
      }

      function closePopup() {
          document.getElementById("popupOverlay").style.display = "none";
      }

      window.onclick = function (event) {
          const popup = document.getElementById("popupOverlay");
          if (event.target == popup) {
              popup.style.display = "none";
          }
      }

      // Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});




     



