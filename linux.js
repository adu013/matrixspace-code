// --- Complete matrixSpace Dev Linux Command Database Matrix Array ---
const LINUX_DATABASE = [
  { category: "file", title: "List Directory Contents with Details", command: "ls -la", desc: "Displays exhaustive file listing vectors, revealing hidden system nodes, permission strings, and byte sizing." },
  { category: "file", title: "Create Multi-Level Directory Path", command: "mkdir -p /path/to/folder", desc: "Builds complete target folder trees seamlessly, automatically spawning missing parent node structures." },
  { category: "file", title: "Force Destructive Directory Purge", command: "rm -rf /target/path", desc: "Recursively deletes specified target path nodes instantly from storage blocks without safety prompt check holds." },
  { category: "network", title: "Analyze Live TCP/UDP Port Status", command: "ss -tunlp", desc: "Exposes active network sockets, tracking active pipeline ports, listener nodes, and corresponding process IDs." },
  { category: "network", title: "Fetch Remote Resource Header Payload", command: "curl -I https://example.com", desc: "Queries network endpoints, retrieving exclusively HTTP status responses and configuration parameter payloads." },
  { category: "system", title: "Inspect Live Process Asset Densities", command: "htop", desc: "Launches an interactive console layout tracker graphing runtime core threads, memory swap allocations, and execution nodes." },
  { category: "system", title: "Monitor Real-time Storage Block Space", command: "df -h", desc: "Exposes mounting path statistics, translating raw disk blocks into human-readable data metrics." },
  { category: "system", title: "View Continuous Log Update Stream", command: "tail -f /var/log/syslog", desc: "Locks terminal display output frame onto system log buffers, printing additions instantly as they execute." },
  { category: "perm", title: "Apply Full Read/Write/Execute Access", command: "chmod 755 <file-path>", desc: "Overwrites access bit parameters to clear owner rights while establishing controlled execution constraints for groups." },
  { category: "perm", title: "Transfer Administrative File Ownership", command: "chown user:group <file-path>", desc: "Re-assigns specific account and team identities directly to selected workspace resources." }
];

/**
 * Creates and returns a structured DOM card element for a Linux command snippet
 * @param {Object} item - Database entry containing title, command, and desc keys
 * @returns {HTMLElement} - The fully compiled snippet card element
 */
function createLinuxCardElement(item) {
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
