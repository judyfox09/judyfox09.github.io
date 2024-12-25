document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown-toggle").forEach((button) => {
      button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        if (content) {
          content.classList.toggle("visible");
        } else {
          console.error("No dropdown content found for this button.");
        }
      });
    });
  });
  