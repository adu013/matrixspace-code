// --- Complete matrixSpace Dev VS Code Keyboard Shortcut & Settings JSON Database Array ---
const VSCODE_DATABASE = [
  // --- Keyboard Maps Category ---
  { category: "nav", type: "keymap", title: "Global File Navigation Quick Open", command: "Ctrl + P", desc: "Launches the prompt interface search grid to match and teleport inside workspace project nodes instantly." },
  { category: "nav", type: "keymap", title: "Open Comprehensive Command Palette", command: "Ctrl + Shift + P", desc: "Brings up the operational management dashboard console, granting quick access to editor plugins and actions." },
  { category: "edit", type: "keymap", title: "Simultaneous Multi-Cursor Instantiation", command: "Ctrl + Alt + Down / Up", desc: "Spawns mirrored typing cursors vertically along line blocks to execute high-density clean edits instantly." },
  { category: "edit", type: "keymap", title: "Delete Active Text Line Track", command: "Ctrl + Shift + K", desc: "Purges the line element at the current cursor point, shifting underlying content upwards seamlessly." },
  { category: "edit", type: "keymap", title: "Toggle Segment Line Comment State", command: "Ctrl + /", desc: "Appends or strips workspace code block comment wrappers matching the active language syntax specification." },
  { category: "view", type: "keymap", title: "Toggle Sidebar Activity Bar Visibility", command: "Ctrl + B", desc: "Collapses or expands the primary navigation workspace file manager panel block to maximize display room." },
  { category: "view", type: "keymap", title: "Instantiate Integrated Bash Terminal Panel", command: "Ctrl + `", desc: "Drops open the system shell console panel right below your active editor file pane space." },
  { category: "search", type: "keymap", title: "Global Cross-Project Text Search Module", command: "Ctrl + Shift + F", desc: "Scans the entire local repository path to return matching string files and target occurrences." },
  { category: "search", type: "keymap", title: "Trigger Local File Query Highlight Search", command: "Ctrl + F", desc: "Highlights all instances of a string parameter within the active open editor script text container." },

  // --- JSON Settings Category (New Additions) ---
  { category: "edit", type: "json", title: "Enable Format On Save execution", command: '"editor.formatOnSave": true', desc: "Instructs the system language servers to automatically beautify and reconstruct code files during file saves." },
  { category: "view", type: "json", title: "Enable Smooth Cursor Animation Tracking", command: '"editor.cursorBlinking": "smooth",\n"editor.cursorSmoothCaretAnimation": "on"', desc: "Applies fluid, highly responsive hardware-accelerated movement to the active editor cursor caret line tracker." },
  { category: "view", type: "json", title: "Enable Code Block Minimap Render Layout", command: '"editor.minimap.enabled": true,\n"editor.minimap.renderCharacters": false', desc: "Displays a structural high-altitude code overview column on the right side while stripping heavy characters for optimal speed." },
  { category: "search", type: "json", title: "Exhaustive Global File Tracking Exclusions", command: '"files.exclude": {\n  "**/.git": true,\n  "**/node_modules": true\n}', desc: "Instructs search indexes and exploration sidebars to ignore heavy internal node modules or operational file folders." },
  { category: "system", type: "json", title: "Disable Telemetry Crash Logs and Diagnostics", command: '"telemetry.telemetryLevel": "off"', desc: "Completely terminates anonymous data reporting tracking streams going out to corporate external diagnostics engines." }
];

/**
 * Creates and returns a structured DOM card element for a VS Code shortcut or setting snippet
 * @param {Object} item - Database entry containing title, command, desc, and type keys
 * @returns {HTMLElement} - The fully compiled snippet card element
 */
function createVSCodeCardElement(item) {
  const card = document.createElement("div");
  card.className = "snippet-card";

  // Format the command block presentation layer layout based on metadata type flags
  const isJson = item.type === "json";
  const codeStyle = isJson
    ? "font-family: 'JetBrains Mono', monospace; white-space: pre-wrap; display: block; width: 100%; text-align: left;"
    : "font-family: 'Orbitron', sans-serif; letter-spacing: 1px;";

  const containerLayout = isJson
    ? "display: flex; flex-direction: column; align-items: flex-end; gap: 8px; padding: 12px 14px;"
    : "display: flex; align-items: center; justify-content: space-between; padding: 10px 14px;";

  card.innerHTML = `
        <div class="snippet-title">
            ${item.title} <span style="font-size: 0.7rem; opacity: 0.5; padding-left: 6px;">[${item.type.toUpperCase()}]</span>
        </div>
        <div class="code-container" style="${containerLayout}">
            <code class="code-text" style="${codeStyle}">${item.command}</code>
            <button class="copy-btn">COPY</button>
        </div>
        <div class="snippet-desc">${item.desc}</div>
    `;

  // Wire Clipboard Copy Event Listener Routine Function Block
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

  return card;
}
