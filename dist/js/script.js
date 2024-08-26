document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  // Video Modal
  const modal = document.getElementById("videoModal");
  const videoButton = document.querySelector(".preview__video-button");
  const closeButton = document.querySelector(".modal__close-button");
  const videoPlayer = document.getElementById("videoPlayer");

  // Open modal when clicked
  videoButton.addEventListener("click", function () {
    // Show modal
    modal.style.display = "block";

    //Replace the src attribute with the video URL
    videoPlayer.src =
      "https://www.youtube.com/embed/K87PxC8avvI?si=G7EcPkjVkgBo05-D";

    // Close modal on close button click
    closeButton.addEventListener("click", function () {
      modal.style.display = "none";
      videoPlayer.src = "";
    });

    // Close modal on outter click
    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        videoPlayer.src = "";
      }
    });
  });
});

// Navigation background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar--scroll");
  } else {
    navbar.classList.remove("navbar--scroll");
  }
});

//modal photo
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".images img");
  const modal = document.querySelector(".modal");
  const modalImg = document.querySelector(".modal-img");
  const modalTxt = document.querySelector(".modal-txt");
  const closebtn = document.querySelector(".close");
  let currentIndex = 0;

  const prevBtn = document.querySelector(".btnPrev");
  const nextBtn = document.querySelector(".btnNext");

  //Add Click Event for All Images
  images.forEach((image, index) => {
    image.addEventListener("click", function () {
      currentIndex = index;
      updateModalContent();
      modal.classList.add("show");
    });
  });

  //Update Image in Modal
  function updateModalContent() {
    const image = images[currentIndex];
    modalImg.classList.remove("show");
    setTimeout(() => {
      modalImg.src = image.src;
      modalTxt.innerHTML = image.alt;
      modalImg.classList.add("show");
    }, 300);
  }

  //Next button onclick
  nextBtn.addEventListener("click", function () {
    currentIndex = currentIndex + 1 >= images.length ? 0 : currentIndex + 1;
    updateModalContent();
  });

  //Previous button onclick
  prevBtn.addEventListener("click", function () {
    currentIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
    updateModalContent();
  });

  //Code for Close Icon
  closebtn.addEventListener("click", function () {
    modal.classList.remove("show");
  });
});
