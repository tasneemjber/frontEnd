function initializeSlider() {
  document.addEventListener("DOMContentLoaded", () => {
    const slides = Array.from(document.querySelectorAll(".slider-item"));
    const dots = Array.from(document.querySelectorAll(".slick-dots button"));
    const prevBtn = document.querySelector(".slider-prev");
    const nextBtn = document.querySelector(".slider-next");

    let currentSlide = 0;
    
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
      dots.forEach((dot, i) => {
        dot.parentElement.classList.toggle("slick-active", i === index);
      });
      currentSlide = index;
    };


    const goToPrevSlide = () => {
      const newIndex = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(newIndex);
    };

  
    const goToNextSlide = () => {
      const newIndex = (currentSlide + 1) % slides.length;
      showSlide(newIndex);
    };

    
    prevBtn.addEventListener("click", goToPrevSlide);
    nextBtn.addEventListener("click", goToNextSlide);
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => showSlide(index));
    });


    showSlide(currentSlide);
  });
}


initializeSlider();

document.addEventListener("DOMContentLoaded", function() {
  function handleDropdownMenus() {
    const dropdownToggles = document.querySelectorAll(".nav-item.dropdown .nav-link.dropdown-toggle");
    
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener("click", function(event) {
        event.preventDefault();  
        const menu = this.nextElementSibling;

       
        document.querySelectorAll(".Categories-menu").forEach(item => {
          if (item !== menu) {
            item.style.display = "none"; 
          }
        });

        if (menu.style.display === "none" || menu.style.display === "") {
          menu.style.display = "block"; 
        } else {
          menu.style.display = "none";  
        }
      });
    });


    document.addEventListener("click", function(event) {
      if (!event.target.closest('.nav-item.dropdown')) {
        document.querySelectorAll('.Categories-menu').forEach(menu => {
          menu.style.display = "none";  
        });
      }
    });
  }
  handleDropdownMenus();
});

