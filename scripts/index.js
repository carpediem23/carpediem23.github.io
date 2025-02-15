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

      // Aktif input'u bul ve devre dışı bırak
      const currentInput = this.terminal.querySelector(
        ".command-input:not([disabled]):last-of-type",
      );
      if (currentInput) {
        currentInput.disabled = true;
        currentInput.value = command;
      }

      if (this.commands[cmd]) {
        this.commands[cmd]();
      } else {
        this.addOutput(
          `Command not found: ${cmd}\nType 'help' for available commands.`,
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

      // Sayfayı en alta kaydır
      this.content.scrollTop = this.content.scrollHeight;

      // Son input'a odaklan
      this.focusCurrentInput();
    }

    focusCurrentInput() {
      requestAnimationFrame(() => {
        const lastInput = this.terminal.querySelector(
          ".command-input:not([disabled]):last-of-type",
        );
        if (lastInput) {
          lastInput.focus();
          // Cursor'ı input'un sonuna taşı
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
      const aboutText = `
        Hi, I'm carpediem23! 👋
        I'm a Fullstack Developer passionate about creating 
        web and mobile applications using modern technologies.
        I love music 🎵 and gaming 🎮 in my free time.
      `;
      this.addOutput(aboutText);
    }

    showSkills() {
      const skillsText = `
        Technical Skills:
        <p>
          - <strong>Frontend:</srong> React.js, React Native, Next.js, JavaScript, TypeScript
        </p>
        <p>
          - <strong>Backend:</srong> Node.js, Express.js, ASP.NET
        </p>
        <p>
          - <strong>Database:</srong> MongoDB, PostgreSQL, MySQL
        </p>
        <p>
          - <strong>Other:</srong> Git, Docker, Google Cloud, Azure
        </p>
      `;
      this.addOutput(skillsText);
    }

    showProjects() {
      const projectsText = `
        Notable Projects:
        1. Virtual Card Terminal (This website!)
        2. Various Web, Game and Mobile Applications
        
        For more details, visit: https://github.com/carpediem23
      `;
      this.addOutput(projectsText);
    }

    showContact() {
      const contactText = `
        Get in touch:
        - GitHub: https://github.com/carpediem23
        - LinkedIn: https://www.linkedin.com/in/alptugturkis
      `;
      this.addOutput(contactText);
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
