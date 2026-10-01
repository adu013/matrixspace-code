// --- Complete matrixSpace Dev Git Command Database Matrix Array ---
const GIT_DATABASE = [
  { category: "setup", title: "Configure Global Author Identity Name", command: "git config --global user.name \"Your Name\"", desc: "Establishes owner name value metadata attached inside file system snapshots globally." },
  { category: "setup", title: "Configure Global Author Identity Email", command: "git config --global user.email \"your.email@example.com\"", desc: "Configures administrative user electronic mail identifier parameters to tracking records." },
  { category: "setup", title: "Initialize Local Repository Node", command: "git init", desc: "Builds a hidden baseline tracker environment framework folder structure root directory inside current operating path." },
  { category: "snapshot", title: "Stage All Workspace Modification Buffers", command: "git add .", desc: "Spreads comprehensive file tracking indexes to intercept every local change point directory structure block instantly." },
  { category: "snapshot", title: "Commit Staged Changes Snapshot", command: "git commit -m \"Your descriptive message\"", desc: "Permanently writes changes to local ledger database with an encrypted historical comment label." },
  { category: "snapshot", title: "Amend Previous Branch Commit Node", command: "git commit --amend --no-edit", desc: "Appends recent staging buffers cleanly into existing commit record block without re-writing labels." },
  { category: "branch", title: "Instantiate New Isolation Branch Path", command: "git checkout -b <branch-name>", desc: "Spawns customized processing route thread and migrates filesystem engine workspace directly inside it." },
  { category: "branch", title: "Safely Terminate Local Merged Branch", command: "git branch -d <branch-name>", desc: "Purges targeted branch routing metadata directly from memory layers if change tree data exists downstream." },
  { category: "branch", title: "Consolidate Processing Tree Lineages", command: "git merge <branch-name>", desc: "Unifies isolated target development thread streams immediately into currently operational active branch environment." },
  { category: "undo", title: "Unstage File Context Preservation Buffer", command: "git reset HEAD <file-path>", desc: "Extracts target file modifications directly from deployment staging registry while leaving local project raw files intact." },
  { category: "undo", title: "Hard Destructive Workspace Sync Cleanse", command: "git reset --hard origin/<branch-name>", desc: "Overwrites entire project history snapshot tracking architecture immediately to mirror remote repository status perfectly." },
  { category: "undo", title: "Soft Commit Point History Realignment", command: "git reset --soft HEAD~1", desc: "Removes topmost commit node layer execution from history register while returning modified files securely inside staging index tabs." },
  { category: "stash", title: "Cache Temporary Clean State Stash", command: "git stash -m \"Context Message\"", desc: "Intercepts track records, packaging dirty tracking directory state into runtime swap block arrays safely." },
  { category: "stash", title: "Extract Top Cache Allocation Frame", command: "git stash pop", desc: "Applies top indexed array workspace swap stack back to operational tracking code layer state and drops entry." }
];

/**
 * Creates and returns a structured DOM card element for a command snippet
 * @param {Object} item - Database entry containing title, command, and desc keys
 * @returns {HTMLElement} - The fully compiled snippet card element
 */
function createSnippetCardElement(item) {
  const card = document.createElement("div");
  card.className = "snippet-card";
  card.innerHTML = `
        <div class="snippet-title">${item.title}</div>
        <div class="code-container">
            <code class="code-text">${item.command}</code>
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
