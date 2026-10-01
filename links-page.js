/**
 * Renders the structural columns inside a target grid row container
 * @param {HTMLElement} rowContainer - The target grid row element
 * @param {Array} columnsData - The array containing the column names and links arrays
 * @param {Function} saveCallback - Function to invoke whenever data structures update
 */
function renderLinkGridSystem(rowContainer, columnsData, saveCallback) {
  rowContainer.innerHTML = "";

  columnsData.forEach((col, colIndex) => {
    const columnWidget = document.createElement("div");
    columnWidget.className = "widget link-group-widget";

    // Header Input Box for Editable Category Title Line
    columnWidget.innerHTML = `
            <input type="text" class="col-title-input" value="${col.title || 'NEW_NODE'}" placeholder="CATEGORY TITLE...">
            <ul class="task-list" style="list-style: none; padding: 0; margin: 10px 0; display: flex; flex-direction: column; gap: 8px;"></ul>
            <div style="display: flex; gap: 6px; margin-top: 12px;">
                <input type="text" class="add-link-name" placeholder="Name..." style="width: 45%;">
                <input type="text" class="add-link-url" placeholder="URL..." style="width: 45%;">
                <button class="add-link-btn">+</button>
            </div>
        `;

    // Watch for Category Title Updates
    const titleInput = columnWidget.querySelector(".col-title-input");
    titleInput.addEventListener("change", () => {
      col.title = titleInput.value.trim();
      saveCallback();
    });

    // Inject Bookmark Row Iteration List Links
    const listContainer = columnWidget.querySelector(".task-list");
    (col.links || []).forEach((link, linkIndex) => {
      const li = document.createElement("li");
      li.style.display = "flex";
      li.style.justify = "space-between";
      li.style.alignItems = "center";
      li.style.fontSize = "0.85rem";

      li.innerHTML = `
                <a href="${link.url}" target="_blank" style="color: inherit; text-decoration: none; border-bottom: 1px dashed transparent; transition: all 0.2s;" onmouseover="this.style.borderBottomColor='currentColor'" onmouseout="this.style.borderBottomColor='transparent'">
                    &gt; ${link.name}
                </a>
                <button class="del-link" style="background: transparent; border: none; color: inherit; cursor: pointer; opacity: 0.4; font-size: 0.75rem;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.4">✕</button>
            `;

      // Wire Delete Trigger
      li.querySelector(".del-link").addEventListener("click", () => {
        col.links.splice(linkIndex, 1);
        saveCallback();
      });

      listContainer.appendChild(li);
    });

    // Wire Add Link Button Form Input Operation
    const nameInp = columnWidget.querySelector(".add-link-name");
    const urlInp = columnWidget.querySelector(".add-link-url");
    const addBtn = columnWidget.querySelector(".add-link-btn");

    addBtn.addEventListener("click", () => {
      const name = nameInp.value.trim();
      let url = urlInp.value.trim();

      if (name && url) {
        if (!/^https?:\/\//i.test(url)) {
          url = "https://" + url; // Basic URL protocol protection guard check
        }
        col.links.push({ name, url });
        saveCallback();
      }
    });

    rowContainer.appendChild(columnWidget);
  });
}
