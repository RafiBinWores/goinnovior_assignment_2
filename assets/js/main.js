// Select the modal checkbox and video element
const modalCheckbox = document.getElementById("my-modal");
const videoPlayer = document.getElementById("video-player");

modalCheckbox.addEventListener("change", function () {
  if (modalCheckbox.checked) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }
});

//for mobile booking section
function hideIcon(input, iconId) {
  input.type = "date";
  input.classList.remove("pr-10");
  document.getElementById(iconId).style.display = "none";
}

function showIcon(input, iconId) {
  if (!input.value) {
    input.type = "text";
    input.classList.add("pr-10");
    document.getElementById(iconId).style.display = "flex";
  }
}

//for footer get year
document.getElementById("year").textContent = new Date().getFullYear();
