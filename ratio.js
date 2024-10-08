window.onload = function () {
  var progressBar = document.getElementById("progress-bar");
  var progressPercentage = document.getElementById("progress-percentage");
  var progress = 0;

  // Animate progress bar to 95%
  var interval = setInterval(function () {
    if (progress >= 95) {
      clearInterval(interval);
    } else {
      progress++;
      progressBar.style.width = progress + "%";
      progressPercentage.innerText = progress + "%";
    }
  }, 20);
};
