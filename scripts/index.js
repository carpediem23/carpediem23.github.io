(function () {
  class Terminal {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
      this.terminal = this.container.querySelector(".terminal");
      this.content = this.terminal.querySelector(".terminal-content");
      this.history = [];
      this.historyIndex = -1;
      this.commands = {
        help: () => this.showHelp(),
        about: () => this.showAbout(),
        skills: () => this.showSkills(),
        projects: () => this.showProjects(),
        contact: () => this.showContact(),
        clear: () => this.clearTerminal(),
      };
      this.activeInput = null;

      this.init();
      this.focusCurrentInput();
    }

    init() {
      this.addEventListeners();
      this.showWelcomeMessage();
    }

    showWelcomeMessage() {
      const template = document.getElementById("welcome-template");
      const clone = template.content.cloneNode(true);
      this.content.appendChild(clone);
      this.createNewCommandLine();
    }

    addEventListeners() {
      document.addEventListener("keydown", (e) => {
        // Her zaman son input'u hedefle
        const lastInput = this.terminal.querySelector(
          ".command-input:not([disabled]):last-of-type",
        );

        if (e.key === "Enter" && lastInput && lastInput.value.trim()) {
          this.executeCommand(lastInput.value);
        }
      });

      this.terminal.addEventListener("click", () => {
        this.focusCurrentInput();
      });
    }

    executeCommand(command) {
      const cmd = command.toLowerCase().trim();
      this.history.push(cmd);
      this.historyIndex = this.history.length;
    
      const currentInput = this.terminal.querySelector(
        ".command-input:not([disabled]):last-of-type"
      );
      if (currentInput) {
        currentInput.disabled = true;
        currentInput.value = command;
      }
    
      // Google Tag Manager
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "terminalCommand",
        command: cmd
      });
    
      if (this.commands[cmd]) {
        this.commands[cmd]();
      } else {
        this.addOutput(
          `Command not found: ${cmd}\nType 'help' for available commands.`
        );
      }
    
      this.createNewCommandLine();
    }
    

    addOutput(content) {
      const output = document.createElement("div");
      output.className = "terminal-output";
      output.innerHTML = content;
      this.terminal.querySelector(".terminal-content").appendChild(output);
    }

    createNewCommandLine() {
      const template = document.getElementById("command-line-template");
      const clone = template.content.cloneNode(true);

      this.content.appendChild(clone);
      this.content.scrollTop = this.content.scrollHeight;
      this.focusCurrentInput();
    }

    focusCurrentInput() {
      requestAnimationFrame(() => {
        const lastInput = this.terminal.querySelector(
          ".command-input:not([disabled]):last-of-type",
        );
        if (lastInput) {
          lastInput.focus();

          const len = lastInput.value.length;

          lastInput.setSelectionRange(len, len);
        }
      });
    }

    showHelp() {
      const template = document.getElementById("help-template");
      const clone = template.content.cloneNode(true);
      this.content.appendChild(clone);
    }

    showAbout() {
      const template = document.getElementById("about-template");
      const clone = template.content.cloneNode(true);
      this.content.appendChild(clone);
    }

    showSkills() {
      const template = document.getElementById("skills-template");
      const clone = template.content.cloneNode(true);
      this.content.appendChild(clone);
    }

    showProjects() {
      const template = document.getElementById("projects-template");
      const clone = template.content.cloneNode(true);
      this.content.appendChild(clone);
    }

    showContact() {
      const template = document.getElementById("contact-template");
      const clone = template.content.cloneNode(true);
      this.content.appendChild(clone);
    }

    clearTerminal() {
      const content = this.terminal.querySelector(".terminal-content");
      content.innerHTML = "";
    }
  }

  async function createOrUpdateWebService() {
    if ("serviceWorker" in navigator) {
      try {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(
          registrations.map((registration) => registration.unregister()),
        );
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName)),
        );
        const registration = await navigator.serviceWorker.register(
          new URL("../sw.js", import.meta.url),
          {
            type: "module",
            updateViaCache: "none",
          },
        );

        if (registration.waiting) {
          registration.waiting.postMessage({ type: "SKIP_WAITING" });
        }

        console.log("ServiceWorker registered:", registration);
      } catch (error) {
        console.log("ServiceWorker registration failed:", error);
      }
    }
  }

  async function init() {
    await createOrUpdateWebService();
    new Terminal("terminal-container");
  }

  window.onload = async () => init();
})();
