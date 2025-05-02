const toggleArrow = document.getElementById("toggleArrow");
const arrowIcon = toggleArrow.querySelector(".arrow-icon");

const containerCollapsed = document.getElementById("startupContainerCollapsed");
const containerExpanded = document.getElementById("startupContainerExpanded");

let isExpanded = false;

toggleArrow.addEventListener("click", () => {
  isExpanded = !isExpanded;

  containerCollapsed.classList.toggle("hidden", isExpanded);
  containerExpanded.classList.toggle("hidden", !isExpanded);

  arrowIcon.textContent = isExpanded ? "↑" : "↓";
});

// function saveScores() {
//   // Optionally collect and validate input scores here

//   // Optionally show temporary alert
//   alert("Scores saved!");

//   // Redirect to Page 3
//   window.location.href = "page3.html"; // 👈 make sure this file exists
// }
function saveScores() {
  document.getElementById("modalOverlay").classList.remove("hidden");
  
}

function closeModal() {
  document.getElementById("modalOverlay").classList.add("hidden");
}

function updateNowPresenting(src) {
  document.getElementById('presentingLogo').src = src;
}
