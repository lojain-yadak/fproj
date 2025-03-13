/*let timeoutId=0.5;

const dropdown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdown.addEventListener("mouseover", function () {
  dropdownMenu.classList.add("show"); // Add the "show" class to reveal the dropdown
});

dropdown.addEventListener("mouseleave", function () {
  dropdownMenu.classList.remove("show"); // Remove the "show" class to hide the dropdown
});

dropdown.addEventListener("mouseover", function () {
    clearTimeout(timeoutId); // Clear any existing timeout
    dropdownMenu.classList.add("show");
  });
  
  dropdown.addEventListener("mouseleave", function () {
    timeoutId = setTimeout(() => {
      dropdownMenu.classList.remove("show");
    }, 300); // Delay hiding the dropdown by 300ms
  });*/
  const openButton = document.getElementById('open-sidebar-button');
  const navbar = document.getElementById('navbar');
  
  // Function to open the sidebar
  function openSidebar() {
    navbar.classList.add('show'); // Add the 'show' class to display the sidebar
    openButton.setAttribute('aria-expanded', 'true'); // Update accessibility attribute
    navbar.removeAttribute('inert'); // Make the sidebar interactive
  }
  
  // Function to close the sidebar
  function closeSidebar() {
    navbar.classList.remove('show'); // Remove the 'show' class to hide the sidebar
    openButton.setAttribute('aria-expanded', 'false'); // Update accessibility attribute
    navbar.setAttribute('inert', ''); // Make the sidebar non-interactive
  }
  
  // Attach event listeners
  openButton.addEventListener('click', openSidebar);
  
  // Optional: Add a close button inside the sidebar
  const closeButton = document.getElementById('close-sidebar-button');
  if (closeButton) {
    closeButton.addEventListener('click', closeSidebar);
  }
  const sidebar = document.getElementById('navbar');

// Open sidebar
openButton.addEventListener('click', () => {
    sidebar.classList.add('show');
});

// Close sidebar
closeButton.addEventListener('click', () => {
    sidebar.classList.remove('show');
});
/*--------------*/
function custommodal() {
  const modal = document.querySelector(".my-modal");
  const modaljourney = document.querySelector(".my-modaljourney");

  const closebtn = document.querySelector(".x-btn");
  const playbtn = document.querySelector(".play-button");
  const playbtnjourney = document.querySelector(".play-buttonjourney");


  playbtnjourney.addEventListener("click", (e) => {
      modal.classList.remove("d-none");

  });
  playbtn.addEventListener("click", (e) => {
    modal.classList.remove("d-none");
    modaljourney.classList.remove("d-none");

});

  closebtn.addEventListener("click", (e) => {
      modal.classList.add("d-none");
      modaljourney.classList.add("d-none");

  });

  document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
          modal.classList.add("d-none");
          modaljourney.classList.add("d-none");

      }
  });
}

// Call the function to initialize the modal
custommodal();
/*------animation------*/
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger animations
        const bringing = document.querySelector('.bringing');
        const flavor = document.querySelector('.flavor');
        if (bringing) bringing.classList.add('active');
        if (flavor) flavor.classList.add('active');

        // Trigger reveal animations
        document.querySelectorAll('.reveal').forEach(element => {
          element.classList.add('active');
        });

        // Stop observing after triggering animations
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  // Observe sections
  const bringingSection = document.querySelector('.opening');
  const chooseSection = document.querySelector('.chooseus');
  if (bringingSection) observer.observe(bringingSection);
  if (chooseSection) observer.observe(chooseSection);
});
/*---------------------*/
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');

  const animateCounter = (counter) => {
      const updateCount = () => {
          const target = +counter.getAttribute('data-count');
          let count = parseFloat(counter.innerText);
          
          const speed = 450; // Change this value to adjust the speed of the animation
          
          const increment = target / speed;
          
          if (count < target) {
              counter.innerText = Math.ceil(count + increment) + (target !== 50 ? '+' : '');
              setTimeout(updateCount, 1);
          } else {
              counter.innerText = target + (target !== 50 ? '+' : '');
          }
      };
      updateCount();
  };

  const observerOptions = {
      root: null,
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateCounter(entry.target);
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  counters.forEach(counter => {
      observer.observe(counter);
  });
});