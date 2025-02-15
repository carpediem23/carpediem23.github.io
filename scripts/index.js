(function () {
  class Terminal {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
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
      this.createTerminal();
      this.addEventListeners();
      this.showWelcomeMessage();
    }

    createTerminal() {
      this.terminal = document.createElement("div");
      this.terminal.className = "terminal";

      const header = `
        <header class="terminal-header">
          <section class="terminal-buttons">
            <div class="terminal-button close"></div>
            <div class="terminal-button minimize"></div>
            <div class="terminal-button maximize"></div>
          </section>
          <h1 class="terminal-title">carpediem23@portfolio ~ </h1>
        </header>
        <section class="terminal-content"></section>
      `;

      this.terminal.innerHTML = header;
      this.container.appendChild(this.terminal);
    }

    showWelcomeMessage() {
      const welcome = `
        <p>Welcome to my terminal vCard!</p>
        <p>Type '<strong>help</strong>' to see available commands.</p>
        <p>--------------------------------</p>
      `;
      this.addOutput(welcome);
      this.createNewCommandLine();
    }

    addEventListeners() {
      document.addEventListener("keydown", (e) => {
        const activeInput = document.activeElement;
        if (
          activeInput &&
          activeInput.classList.contains("command-input") &&
          e.key === "Enter" &&
          activeInput.value.trim()
        ) {
          this.executeCommand(activeInput.value);
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

      const activeInput = document.activeElement;
      if (activeInput && activeInput.classList.contains("command-input")) {
        activeInput.disabled = true;
        activeInput.value = command;
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
      const commandLine = document.createElement("div");
      commandLine.className = "command-line";
      commandLine.innerHTML = `
        <span class="prompt">carpediem23@portfolio:~$</span>
        <input type="text" class="command-input" autocomplete="off" />
      `;
      const content = this.terminal.querySelector(".terminal-content");
      content.appendChild(commandLine);
      const newInput = commandLine.querySelector(".command-input");
      if (newInput) {
        newInput.focus();
        this.activeInput = newInput;
      }
    }

    focusCurrentInput() {
      setTimeout(() => {
        const input = this.terminal.querySelector(
          ".command-input:last-of-type",
        );
        if (input) {
          input.focus();
        }
      }, 0);
    }

    showHelp() {
      const helpText = `
        <strong>Available Commands:</strong>
        <p>
          - <strong>help:</strong> Show this help message
        </p>
        <p>
          - <strong>about:</strong> Learn about me
        </p>
        <p>
          - <strong>skills:</strong> View my technical skills
        </p>
        <p>
          - <strong>projects:</strong> See my projects
        </p>
        <p>
          - <strong>contact:</strong> Get my contact information
        </p>
        <p>
          - <strong>clear:</strong> Clear the terminal
        </p>
      `;
      this.addOutput(helpText);
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
