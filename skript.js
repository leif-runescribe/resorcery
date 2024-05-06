const videoElement = document.getElementById("vid");

// Add the blink class on a certain interval (adjust for desired blink speed)
setInterval(() => {
  videoElement.classList.toggle("blink");
}, 100);