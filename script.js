const accordionItems = document.querySelectorAll(".accordion-item");

// Then, loop through each item to add click listeners
accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");

  // Add click listener to the header
  header.addEventListener("click", () => {
    // Check if this item is currently open
    const isActive = item.classList.contains("active");

    if (!isActive) {
      // Close all other items
      accordionItems.forEach((accordionItem) => {
        if (accordionItem !== item) {
          accordionItem.classList.remove("active");
        }
      });

      // Open this item
      item.classList.add("active");
    } else {
      // If it was open, close it
      item.classList.remove("active");
    }
  });
});
