const totalSlides = 3;
let currentSlide = 1;
const slideContainer = document.querySelector(".slide-container");
const dots = document.querySelectorAll(".dot");
const progress = document.querySelector(".progress");

// Function to go to a specific slide
function goToSlide(slideNumber) {
  currentSlide = slideNumber;
  const offset = (slideNumber - 1) * -100;
  slideContainer.style.transform = `translateX(${offset}%)`;
  updateDots(slideNumber);
  updateProgressBar();
}

// Function to update dots
function updateDots(slideNumber) {
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === slideNumber - 1);
  });
}

let currentSlideIndex = 0;
const slides = document.querySelectorAll(".carousel-item"); // Assuming your slides have a 'carousel-item' class
const progress1 = document.querySelector(".progress-bar"); // Assuming you have a progress bar element
const totalSlides1 = slides.length;
let progressInterval;

// Function to update the progress bar
function updateProgressBar() {
  const duration = 5000; // Total duration of 5 seconds for each slide
  let progressValue = 0;
  progress1.style.width = "0"; // Reset the progress bar width
  progress1.style.backgroundColor = "green"; // Start with green color

  clearInterval(progressInterval); // Clear any previous intervals to avoid stacking
  progressInterval = setInterval(() => {
    progressValue += 100 / (duration / 100); // Increment the progress bar

    // Update progress bar width and color based on progressValue
    progress1.style.width = `${progressValue}%`;

    if (progressValue <= 40) {
      progress1.style.backgroundColor = "green"; // 0-2 seconds: Green
    } else if (progressValue > 40 && progressValue <= 80) {
      progress1.style.backgroundColor = "yellow"; // 2-4 seconds: Yellow
    } else if (progressValue > 80 && progressValue <= 100) {
      progress1.style.backgroundColor = "#4379F2"; // 4-5 seconds: Red
    }

    // When progress reaches 100%, move to the next slide
    if (progressValue >= 100) {
      clearInterval(progressInterval); // Stop the progress interval
      moveToNextSlide(); // Move to the next slide when the progress bar completes
    }
  }, 50); // Update every 50ms for smooth progress
}

// Function to move to the next slide
function moveToNextSlide() {
  slides[currentSlideIndex].classList.remove("active"); // Remove 'active' class from current slide
  currentSlideIndex = (currentSlideIndex + 1) % totalSlides1; // Go to the next slide (loop back to the first slide if on the last)
  slides[currentSlideIndex].classList.add("active"); // Add 'active' class to the new slide

  updateProgressBar(); // Restart the progress bar for the new slide
}

// Start the slideshow with progress bar on page load or trigger
document.addEventListener("DOMContentLoaded", () => {
  updateProgressBar(); // Start progress bar on first slide load
});

// Event listeners for dots
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const slideNumber = dot.dataset.slide;
    goToSlide(slideNumber);
  });
});

// Auto slide every 5 seconds
setInterval(() => {
  currentSlide = currentSlide >= totalSlides ? 1 : currentSlide + 1;
  goToSlide(currentSlide);
}, 5000);

// Initialize
goToSlide(currentSlide);
