// Get elements
const loginBtn = document.getElementById("openModalBtn"); // Your login button
const modal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close-btn");

// Show modal when login button is clicked
if (loginBtn) {
  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling
  });
}

// Close modal when X is clicked
if (closeBtn) {
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.style.overflow = ""; // Enable scrolling
  });
}

// Close modal when clicking outside
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = ""; // Enable scrolling
  }
});

// Form submission
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Add your login logic here
    alert("Login functionality would go here");
    modal.style.display = "none";
    document.body.style.overflow = ""; // Enable scrolling
  });
}
