// --- Instant Theme Initialization Engine ---
// This block executes instantly to prevent the Flash of Unstyled Content (FOUC)
const savedTheme = localStorage.getItem("matrixSpace-dev-theme") || "matrix-classic";
document.documentElement.setAttribute("data-theme", savedTheme); // Sets at the root HTML level instantly
document.addEventListener("DOMContentLoaded", () => {
  document.body.setAttribute("data-theme", savedTheme); // Backup sync for body classes
});

// --- Preference Dropdown Listener Engine ---
document.addEventListener("DOMContentLoaded", () => {
  const themeSelector = document.getElementById("themeSelector");
  if (themeSelector) {
    // Sync dropdown status selector visual position to active theme
    themeSelector.value = savedTheme;

    // Watch for modification changes
    themeSelector.addEventListener("change", (e) => {
      const nextTheme = e.target.value;
      document.documentElement.setAttribute("data-theme", nextTheme);
      document.body.setAttribute("data-theme", nextTheme);
      localStorage.setItem("matrixSpace-dev-theme", nextTheme);
    });
  }
});
