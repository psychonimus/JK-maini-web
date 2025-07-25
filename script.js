 

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
  // console.log(e);
});


// the js code for email SMtp integration for enquiry form


        function customEncodeURI(str) {
            return str.replace(/[@]/g, '%40')
                      .replace(/[:]/g, '%3A')
                      .replace(/[?]/g, '%3F')
                      .replace(/[/]/g, '%2F')
                      .replace(/[#]/g, '%23')
                      .replace(/[&]/g, '%26')
                      .replace(/[=]/g, '%3D')
                      .replace(/[+]/g, '%2B')
                      .replace(/[ ]/g, '%20');
        }

        document.getElementById('contact-form').addEventListener('submit', function(e) {
         
            e.preventDefault();
            console.log('Form submitted');
            const toEmail = document.getElementById('EmailAddress').value;
            const firstname = document.getElementById('FirstName').value;
            const lastname = document.getElementById('LastName').value;
            const company = document.getElementById('Company').value;
            const phoneno = document.getElementById('PhoneNo').value;
            const industry = document.getElementById('Industry').value;
            const email = document.getElementById('EmailAddress').value; // Same as toEmail
            const inquiry = document.getElementById('Inquiry').value;
            const subject = "";
            const htmlContent ="";
            const messageDiv = document.getElementById('message');
            const errorDiv = document.getElementById('error');

            messageDiv.textContent = '';
            errorDiv.textContent = '';

            //const url = 'http://172.21.4.191:80/api/email/sendemail?toEmail=' + customEncodeURI(toEmail) + //testing 

            const url = 'https://api.jkmaini.com/api/email/sendemail?firstname=' + customEncodeURI(firstname) +
                        '&lastname=' + customEncodeURI(lastname) +
                        '&company=' + customEncodeURI(company) +
                        '&phoneno=' + customEncodeURI(phoneno) +
                        '&industry=' + customEncodeURI(industry) +
                        '&email=' + customEncodeURI(email) +
                        '&inquiry=' + customEncodeURI(inquiry);

            console.log('URL:', url);
            console.log('Payload:', JSON.stringify({ subject, htmlContent }));
            // For proxy: fetch('/api/email/sendemail?toEmail=' + customEncodeURI(toEmail) + '&firstname=' + customEncodeURI(firstname) + '&lastname=' + customEncodeURI(lastname) + '&company=' + customEncodeURI(company) + '&phoneno=' + customEncodeURI(phoneno) + '&industry=' + customEncodeURI(industry) + '&email=' + customEncodeURI(email) + '&inquiry=' + customEncodeURI(inquiry), {
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ subject, htmlContent })
                // If API supports plain-text:
                // body: JSON.stringify({ subject, htmlContent, textContent: `Hello ${firstname}! Thank you for your inquiry about ${company} services. Visit us at https://probus.co.in. To unsubscribe, visit https://probus.co.in/unsubscribe. Probus, 123 Business Street, City, Country` })
            })
                .then(function(response) {
                    console.log('Response status:', response.status);
                    return Promise.all([response.json(), response.ok, response.status]);
                })
                .then(function(jsonData, ok, status) {
                    console.log('Response data:', jsonData);
                    if (ok) {
                        messageDiv.textContent = jsonData.message || 'Application submitted successfully.';
                    } else {
                        errorDiv.textContent = jsonData.error || 'Application submitted successfully.';
                    }
                })
                .catch(function(error) {
                    console.error('Fetch error:', error);
                    errorDiv.textContent = `Error: ${error.message}`;
                })
                .finally(function() {
                    document.getElementById('contact-form').reset();
                    console.log('Form cleared');
                });
        // Close the popup after successful submission
        // const popupOverlay = document.getElementById('popupOverlay');
        // if (popupOverlay) {
        //     popupOverlay.style.display = 'none';
        // }
        });





// back to top button js 
// Show/hide button on scroll
window.addEventListener('scroll', function() {
  var btn = document.getElementById('backToTopBtn');
  if (window.scrollY > 200) {
      btn.style.display = 'block';
  } else {
      btn.style.display = 'none';
  }
});

// Scroll to top on click
document.getElementById('backToTopBtn').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
