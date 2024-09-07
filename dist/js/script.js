document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  // Get modal elements
  const modal = document.getElementById("videoModal");
  const videoButton = document.querySelector(".preview__video-button");
  const closeButton = document.querySelector(".modal__close-button");
  const videoPlayer = document.getElementById("videoPlayer");

  // Function to open the modal
  function openModal() {
    modal.style.display = "block";
    closeButton.style.display = "block"; // Show the close button when the modal is open
    videoButton.style.display = "none"; // Hide the video button
    videoPlayer.src =
      "https://www.youtube.com/embed/K87PxC8avvI?si=G7EcPkjVkgBo05-D"; // Set the video source
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
    videoButton.style.display = "block"; // Show the video button again when the modal is closed
    closeButton.style.display = "none"; // Hide the close button when the modal is closed
    videoPlayer.src = ""; // Stop the video by resetting the src attribute
  }

  // Open modal when the video button is clicked
  videoButton.addEventListener("click", openModal);

  // Close modal when the close button is clicked
  closeButton.addEventListener("click", closeModal);

  // Close modal when clicking outside of the modal content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
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

//privacy modal
var modal = document.getElementById("privacyPolicyModal");
var span = document.getElementsByClassName("close")[0];

// Function to show the Privacy Policy modal
function showPrivacyPolicy() {
  modal.style.display = "block";
}

// Close the modal when the 'x' button is clicked
span.onclick = function () {
  modal.style.display = "none";
  localStorage.setItem("privacyPolicyAccepted", "true");
};

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    localStorage.setItem("privacyPolicyAccepted", "true");
  }
};

// Check if the user has already seen the modal
window.onload = function () {
  var accepted = localStorage.getItem("privacyPolicyAccepted");
  if (!accepted) {
    showPrivacyPolicy(); // Show the modal if not previously accepted
  }
};
