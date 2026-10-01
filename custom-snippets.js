/**
 * Renders user-defined code snippets into a designated target canvas element
 * @param {HTMLElement} canvas - The code card injection container div
 * @param {Array} database - The custom snippets array state data reference
 * @param {Function} updateCallback - Action to invoke to trigger a structural state save
 */
function renderCustomSnippetsGrid(canvas, database, updateCallback) {
  if (!canvas) return;
  canvas.innerHTML = "";

  if (database.length === 0) {
    canvas.innerHTML = `<div class="snippet-card" style="text-align:center; opacity:0.4; font-size:0.85rem; border-style:dashed;">NO CUSTOM COMPLIANCE SNIPPETS DEPLOYED INSIDE ACTIVE DATA MATRIX</div>`;
    return;
  }

  database.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "snippet-card";
    card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div class="snippet-title">${item.title}</div>
                <button class="del-snippet" style="background: transparent; border: none; color: inherit; cursor: pointer; opacity: 0.4; font-size: 0.8rem;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.4">✕ PURGE NODE</button>
            </div>
            <div class="code-container">
                <code class="code-text">${item.command}</code>
                <button class="copy-btn">COPY</button>
            </div>
            <div class="snippet-desc">${item.desc}</div>
        `;

    // Wire Copy Operations Hook Function Loop
    const copyBtn = card.querySelector(".copy-btn");
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(item.command).then(() => {
        copyBtn.textContent = "COPIED";
        copyBtn.style.opacity = "0.6";
        setTimeout(() => {
          copyBtn.textContent = "COPY";
          copyBtn.style.opacity = "1";
        }, 1200);
      });
    });

    // Wire Custom Card Delete Pipeline Trigger Action
    card.querySelector(".del-snippet").addEventListener("click", () => {
      database.splice(index, 1);
      updateCallback();
    });

    canvas.appendChild(card);
  });
}
