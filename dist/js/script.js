document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  // Get modal elements for the left video
  const modalLeft = document.getElementById("videoModalLeft");
  const videoButtonLeft = document.getElementById("videoButtonLeft");
  const closeButtonLeft = document.getElementById("closeButtonLeft");
  const videoPlayerLeft = document.getElementById("videoPlayerLeft");

  // Get modal elements for the right video
  const modalRight = document.getElementById("videoModalRight");
  const videoButtonRight = document.getElementById("videoButtonRight");
  const closeButtonRight = document.getElementById("closeButtonRight");
  const videoPlayerRight = document.getElementById("videoPlayerRight");

  // Function to open the left video modal
  function openModalLeft() {
    modalLeft.style.display = "block";
    closeButtonLeft.style.display = "block";
    videoButtonLeft.style.display = "none";
    videoPlayerLeft.src =
      "https://www.youtube.com/embed/K87PxC8avvI?si=G7EcPkjVkgBo05-D"; // Left video source
  }

  // Function to close the left video modal
  function closeModalLeft() {
    modalLeft.style.display = "none";
    videoButtonLeft.style.display = "block";
    closeButtonLeft.style.display = "none";
    videoPlayerLeft.src = ""; // Stop the video by resetting the src attribute
  }

  // Open left modal when the video button is clicked
  videoButtonLeft.addEventListener("click", openModalLeft);
  closeButtonLeft.addEventListener("click", closeModalLeft);

  // Function to open the right video modal
  function openModalRight() {
    modalRight.style.display = "block";
    closeButtonRight.style.display = "block";
    videoButtonRight.style.display = "none";
    videoPlayerRight.src =
      "https://www.youtube.com/embed/C2pKnWJqqcc?si=Era1CptHNBJVNAej"; // Right video source
  }

  // Function to close the right video modal
  function closeModalRight() {
    modalRight.style.display = "none";
    videoButtonRight.style.display = "block";
    closeButtonRight.style.display = "none";
    videoPlayerRight.src = ""; // Stop the video by resetting the src attribute
  }

  // Open right modal when the video button is clicked
  videoButtonRight.addEventListener("click", openModalRight);
  closeButtonRight.addEventListener("click", closeModalRight);

  // Close modals when clicking outside of the modal content
  window.addEventListener("click", function (event) {
    if (event.target === modalLeft) {
      closeModalLeft();
    }
    if (event.target === modalRight) {
      closeModalRight();
    }
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

// Function to open the modal and display the clicked image

var currentImageIndex = 0; // Track the index of the current image
var images = []; // Store image URLs

// Function to open the modal
function openModal(element) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  var captionText = document.getElementById("caption");

  // Populate images array based on the background-image URLs
  images = Array.from(document.querySelectorAll(".card")).map((card) =>
    card.style.backgroundImage.replace('url("', "").replace('")', "")
  );

  currentImageIndex = images.indexOf(
    element.style.backgroundImage.replace('url("', "").replace('")', "")
  );

  modal.style.display = "block";
  modalImg.src = images[currentImageIndex];
  captionText.innerHTML = ""; // Clear caption text to hide filename

  // Add event listener for key presses
  document.addEventListener("keydown", handleKeyPress);
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";

  // Remove event listener for key presses
  document.removeEventListener("keydown", handleKeyPress);
}

// Function to handle key press events
function handleKeyPress(event) {
  if (event.key === "Escape") {
    closeModal();
  } else if (event.key === "ArrowRight") {
    changeImage(1); // Next image
  } else if (event.key === "ArrowLeft") {
    changeImage(-1); // Previous image
  }
}

// Function to change the image in the modal
function changeImage(direction) {
  currentImageIndex += direction;

  // Loop around the images array
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }

  var modalImg = document.getElementById("modalImage");
  modalImg.src = images[currentImageIndex];
}

//dark light mode

// Check for saved user preference on page load
document.addEventListener("DOMContentLoaded", function () {
  const mode = localStorage.getItem("mode") || "light";
  document.body.classList.add(`${mode}-mode`);
});

// Toggle mode and save preference
document.getElementById("modeToggle").addEventListener("click", function () {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    localStorage.setItem("mode", "light");
  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    localStorage.setItem("mode", "dark");
  }
});
