document.addEventListener("DOMContentLoaded", () => {
  // --- DOM Component Mappings ---
  const primaryRow = document.getElementById("w2-row-primary-links");
  const secondaryRow = document.getElementById("w2-row-secondary-links");
  const densityRow = document.getElementById("w2-row-density-links");

  // --- Custom Snippet Element Targets ---
  const customCanvas = document.getElementById("customSnippetsCanvas");
  const customTitleInp = document.getElementById("customTitleInput");
  const customDescInp = document.getElementById("customDescInput");
  const customCodeInp = document.getElementById("customCodeInput");
  const addCustomBtn = document.getElementById("addCustomSnippetBtn");

  const gitCanvas = document.getElementById("gitSnippetCanvas");
  const gitSearchInput = document.getElementById("gitSearchInput");
  const gitSidebar = document.getElementById("gitSidebar");

  const linuxCanvas = document.getElementById("linuxSnippetCanvas");
  const linuxSearchInput = document.getElementById("linuxSearchInput");
  const linuxSidebar = document.getElementById("linuxSidebar");

  const vscodeCanvas = document.getElementById("vscodeSnippetCanvas");
  const vscodeSearchInput = document.getElementById("vscodeSearchInput");
  const vscodeSidebar = document.getElementById("vscodeSidebar");

  const settingsBtn = document.getElementById("settingsBtn");
  const settingsPanel = document.getElementById("settingsPanel");
  const paginationDots = document.querySelectorAll(".page-dot");
  const pageViews = document.querySelectorAll(".page-view");

  // --- State Management Registers ---
  let activeGitCategory = "all";
  let activeLinuxCategory = "all";
  let activeVSCodeCategory = "all";

  // --- Workspace 01 Default Link Arrays Structures Schema ---
  const defaultWorkspaceLinks = {
    primary: [
      { title: "GROUP_A", links: [{ name: "GitHub", url: "https://github.com" }, { name: "StackOverflow", url: "https://stackoverflow.com" }] },
      { title: "GROUP_B", links: [{ name: "AWS Console", url: "https://amazon.com" }, { name: "Vercel", url: "https://vercel.com" }] },
      { title: "GROUP_C", links: [{ name: "Localhost:3000", url: "http://localhost:3000" }, { name: "Localhost:8080", url: "http://localhost:8080" }] }
    ],
    secondary: [
      { title: "GROUP_D", links: [{ name: "MDN Web Docs", url: "https://mozilla.org" }, { name: "Go Lang Packages", url: "https://go.dev" }] },
      { title: "GROUP_E", links: [{ name: "Tailwind CSS", url: "https://tailwindcss.com" }, { name: "Figma", url: "https://figma.com" }] },
      { title: "GROUP_F", links: [{ name: "Postman Web", url: "https://postman.co" }, { name: "JSON Placeholder", url: "https://typicode.com" }] }
    ],
    density: [
      { title: "GROUP_G", links: [{ name: "Notion", url: "https://notion.so" }, { name: "Jira Board", url: "https://atlassian.com" }] },
      { title: "GROUP_H", links: [{ name: "Google Analytics", url: "https://google.com" }] },
      { title: "GROUP_I", links: [{ name: "TinyPNG", url: "https://tinypng.com" }, { name: "JWT.io", url: "https://jwt.io" }] }
    ]
  };

  let activeLinksData = JSON.parse(localStorage.getItem("matrixSpace-dev-links")) || defaultWorkspaceLinks;

  // --- Custom Snippet Database Logic Sync Footprint ---
  let customSnippetsData = JSON.parse(localStorage.getItem("matrixSpace-dev-custom")) || [];

  function syncCustomSnippetsSystem() {
    localStorage.setItem("matrixSpace-dev-custom", JSON.stringify(customSnippetsData));
    renderCustomSnippetsGrid(customCanvas, customSnippetsData, syncCustomSnippetsSystem);
  }

  // --- High-Level Routing Relays ---
  function syncWorkspaceLinks() {
    localStorage.setItem("matrixSpace-dev-links", JSON.stringify(activeLinksData));
    if (primaryRow) renderLinkGridSystem(primaryRow, activeLinksData.primary, syncWorkspaceLinks);
    if (secondaryRow) renderLinkGridSystem(secondaryRow, activeLinksData.secondary, syncWorkspaceLinks);
    if (densityRow) renderLinkGridSystem(densityRow, activeLinksData.density, syncWorkspaceLinks);
  }

  const runGitRender = () => processAndRenderCanvas(
    gitCanvas, GIT_DATABASE, (gitSearchInput?.value || "").toLowerCase().trim(),
    activeGitCategory, createSnippetCardElement, "NO GIT REFERENCE DATA FOUND"
  );

  const runLinuxRender = () => processAndRenderCanvas(
    linuxCanvas, LINUX_DATABASE, (linuxSearchInput?.value || "").toLowerCase().trim(),
    activeLinuxCategory, createLinuxCardElement, "NO LINUX CORE COMMANDS FOUND"
  );

  const runVSCodeRender = () => processAndRenderCanvas(
    vscodeCanvas, VSCODE_DATABASE, (vscodeSearchInput?.value || "").toLowerCase().trim(),
    activeVSCodeCategory, createVSCodeCardElement, "NO VS CODE KEY SHORTCUTS MATCHED"
  );

  // --- Event Subsystem Connectors ---
  if (gitSearchInput) gitSearchInput.addEventListener("input", runGitRender);
  if (linuxSearchInput) linuxSearchInput.addEventListener("input", runLinuxRender);
  if (vscodeSearchInput) vscodeSearchInput.addEventListener("input", runVSCodeRender);

  const wireSidebarEvents = (sidebarEl, categorySetter, renderCall) => {
    if (!sidebarEl) return;
    sidebarEl.querySelectorAll(".sidebar-item").forEach(button => {
      button.addEventListener("click", () => {
        sidebarEl.querySelector(".sidebar-item.active").classList.remove("active");
        button.classList.add("active");
        categorySetter(button.getAttribute("data-category"));
        renderCall();
      });
    });
  };
  wireSidebarEvents(gitSidebar, (cat) => activeGitCategory = cat, runGitRender);
  wireSidebarEvents(linuxSidebar, (cat) => activeLinuxCategory = cat, runLinuxRender);
  wireSidebarEvents(vscodeSidebar, (cat) => activeVSCodeCategory = cat, runVSCodeRender);

  // --- Pagination View Pipeline Engine Routing ---
  paginationDots.forEach(dot => {
    // --- Custom Code Snippet Creation Interceptor Trigger ---
    if (addCustomBtn) {
      addCustomBtn.addEventListener("click", () => {
        const title = customTitleInp.value.trim();
        const desc = customDescInp.value.trim();
        const command = customCodeInp.value.trim();

        if (title && command) {
          customSnippetsData.push({
            title: title,
            desc: desc || "User defined custom script node deployment snippet command configuration.",
            command: command
          });

          // Clear Form Input Buffers
          customTitleInp.value = "";
          customDescInp.value = "";
          customCodeInp.value = "";

          syncCustomSnippetsSystem();
        }
      });
    }
    dot.addEventListener("click", () => {
      const pageTarget = dot.getAttribute("data-page");
      paginationDots.forEach(d => { d.classList.remove("active"); d.textContent = "○"; });
      dot.classList.add("active");
      dot.textContent = "●";

      pageViews.forEach(view => view.classList.add("hidden"));
      const targetPage = document.getElementById(`page-view-${pageTarget}`);
      if (targetPage) {
        targetPage.classList.remove("hidden");
        // Focus shifting mapping inputs arrays
        if (pageTarget === "2" && gitSearchInput) gitSearchInput.focus();
        if (pageTarget === "3" && linuxSearchInput) linuxSearchInput.focus();
        if (pageTarget === "4" && vscodeSearchInput) vscodeSearchInput.focus();
      }
    });
  });

  if (settingsBtn && settingsPanel) {
    settingsBtn.addEventListener("click", () => settingsPanel.classList.toggle("hidden"));
  }

  // --- Core System Boot Sequence ---
  syncWorkspaceLinks();
  syncCustomSnippetsSystem();
  runGitRender();
  runLinuxRender();
  runVSCodeRender();
});
