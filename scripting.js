// Get elements
const loginBtn = document.getElementById("loginBtn"); // Your login button
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

// Set active page based on current URL
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop();

    // Check if link matches current page
    if (
      currentPage === linkPage ||
      (currentPage === "" && linkPage === "index.html")
    ) {
      link.classList.add("active");

      // Also activate parent dropdown if exists
      const dropdown = link.closest(".dropdown-menu");
      if (dropdown) {
        const parentLink = dropdown.previousElementSibling;
        if (parentLink) {
          parentLink.classList.add("active");
        }
      }
    }
  });
});

document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const doctor = document.getElementById("doctor").value;

    alert(
      `Appointment request submitted!\nPatient: ${name}\nDoctor: ${doctor}`
    );

    const modal = bootstrap.Modal.getInstance(
      document.getElementById("appointmentModal")
    );
    modal.hide();
    this.reset();
  });
