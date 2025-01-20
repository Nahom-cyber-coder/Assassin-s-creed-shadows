// Function to toggle dark and light mode
document.getElementById("theme-toggle").addEventListener("click", function() {
    // Toggle dark mode class on the body element
    document.body.classList.toggle("dark-mode");
  
    // Change the icon based on the current theme
    const icon = document.getElementById("theme-toggle");
    if (document.body.classList.contains("dark-mode")) {
      icon.textContent = "🌙";  // Dark mode icon (moon)
    } else {
      icon.textContent = "🌞";  // Light mode icon (sun)
    }
  });
  
  // Function to display an alert after feedback submission
  document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
  
    const feedbackText = document.getElementById("feedback").value;
  
    // Simple feedback submission alert
    alert("Thank you for your feedback! You said: " + feedbackText);
  
    // Clear the feedback form
    document.getElementById("feedback").value = "";
  });
  
  // Smooth Scroll Effect for Anchors
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  for (const anchor of anchorLinks) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 60, // Adjust the scroll position for navbar
        behavior: "smooth"
      });
    });
  }
  