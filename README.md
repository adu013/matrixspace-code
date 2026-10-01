# >_ MatrixSpace Code — Developer's Cheat Sheet Extension

**MatrixSpace Code** is a high-performance, cyberpunk-themed, privacy-focused browser extension for Firefox designed specifically for software engineers. It serves as an advanced new tab dashboard featuring an editable high-density link directory matrix along with searchable, instant-copy reference sheets for **Git workflows**, **Linux core commands**, and **VS Code keyboard maps / JSON configurations**.

---

## 🚀 Key Features

*   **Workspace 01: High-Density Node Matrix** — A fully customisable, editable bookmark directory grid that allows developers to manage project directories local paths. Persisted securely via browser storage sync.
*   **Workspace 02: Git Reference Ledger** — Categorized, single-click copy snippet blocks covering the full Git lifecycle (Identity configurations, staging trees, branching matrices, and terminal recovery tools).
*   **Workspace 03: Linux Terminal Recovery** — Critical Bash reference nodes mapped out for high-speed lookup, including file systems management, network routing, and process monitoring.
*   **Workspace 04: VS Code Matrix** — Dual-mode developer cheat sheet listing essential productivity keyboard shortcuts alongside pre-formatted JSON configurations for rapid environment tuning.

---

## 🗂️ File Directory Architecture

Ensure your local extension codebase matches this clean, modular structure before packing or side-loading:

```text
matrixspace-dev/
├── manifest.json       # Extension registry footprint and permission configurations
├── newtab.html         # High-tech dashboard interface shell container
├── base.css            # Structural framework, page states, global settings controls
├── themes.css          # Design token definitions for color palettes
├── links.css           # Layout parameters for Workspace 01 grid widgets
├── sheets.css          # Split-pane configurations and scrollable code containers
├── theme.js            # Instant blocking root theme initialization script
├── links-page.js       # Dynamic editable column template loop modules
├── git-page.js         # Git command datasets and visual badge elements
├── linux.js            # Linux command reference schema matrices
├── vscode.js           # VS Code shortcut datasets and configuration handlers
├── render-engine.js    # Generalized code card filtering & rendering engine
└── app.js              # Central application event signal router
```

---

## 🛠️ Local Installation & Development Testing

Because this codebase is separated into clean, CSP-compliant modules, you can load and debug it locally inside Firefox in seconds:

1. Clone or copy this directory structure onto your local machine.
2. Launch your Firefox browser.
3. In the navigation URL bar, type `about:debugging` and press **Enter**.
4. Click on **"This Firefox"** (or *This Nightly* / *This Developer Edition*) in the left sidebar menu.
5. Click the **"Load Temporary Add-on..."** button.
6. Open your local `matrixspace-code/` directory and select your **`manifest.json`** file.
7. Open a new tab (`Ctrl + T` or `Cmd + T`) to access your fully operational developer workspace workspace.

---

## 📄 License

Distributed under the **Apache License, Version 2.0**. See the standard `LICENSE` file text for complete coverage constraints, warranty limits, and code reuse guidelines.
