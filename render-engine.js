/**
 * Generic rendering loop engine for cheat sheet canvases
 * @param {HTMLElement} canvas - The DOM element where snippets are injected
 * @param {Array} database - The database array (GIT_DATABASE, LINUX_DATABASE, etc.)
 * @param {string} query - The search string input text filter
 * @param {string} category - The active filter category state
 * @param {Function} elementCreator - The card UI factory function from the page scripts
 * @param {string} fallbackMessage - Text to display if zero entries match filters
 */
function processAndRenderCanvas(canvas, database, query, category, elementCreator, fallbackMessage) {
  if (!canvas) return;
  canvas.innerHTML = "";

  const filteredData = database.filter(item => {
    const matchesCategory = (category === "all" || item.category === category);
    const matchesSearch = item.title.toLowerCase().includes(query) ||
      item.command.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  if (filteredData.length === 0) {
    canvas.innerHTML = `<div class="snippet-card" style="text-align:center; opacity:0.5; font-size:0.85rem; border-style:dashed;">${fallbackMessage}</div>`;
    return;
  }

  filteredData.forEach(item => {
    canvas.appendChild(elementCreator(item));
  });
}
