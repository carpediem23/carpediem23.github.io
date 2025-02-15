var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequire94c2;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,i.call(o.exports,o,o.exports),o.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequire94c2=i),(0,i.register)("kyEFX",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return n},set:function(e){return n=e},enumerable:!0,configurable:!0});var n,i=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)i.set(t[n],{baseUrl:e,path:t[n+1]})}}),i("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["cSGBT","index.91ae225a.js","2upJ9","sw.js"]'));var o={};o=new URL("sw.js",import.meta.url).toString(),function(){class e{constructor(e){this.container=document.getElementById(e),this.terminal=this.container.querySelector(".terminal"),this.content=this.terminal.querySelector(".terminal-content"),this.history=[],this.historyIndex=-1,this.commands={help:()=>this.showHelp(),about:()=>this.showAbout(),skills:()=>this.showSkills(),projects:()=>this.showProjects(),contact:()=>this.showContact(),clear:()=>this.clearTerminal()},this.activeInput=null,this.init(),this.focusCurrentInput()}init(){this.addEventListeners(),this.showWelcomeMessage()}showWelcomeMessage(){let e=document.getElementById("welcome-template").content.cloneNode(!0);this.content.appendChild(e),this.createNewCommandLine()}addEventListeners(){document.addEventListener("keydown",e=>{let t=this.terminal.querySelector(".command-input:not([disabled]):last-of-type");"Enter"===e.key&&t&&t.value.trim()&&this.executeCommand(t.value)}),this.terminal.addEventListener("click",()=>{this.focusCurrentInput()})}executeCommand(e){let t=e.toLowerCase().trim();this.history.push(t),this.historyIndex=this.history.length;let n=this.terminal.querySelector(".command-input:not([disabled]):last-of-type");n&&(n.disabled=!0,n.value=e),this.commands[t]?this.commands[t]():this.addOutput(`Command not found: ${t}
Type 'help' for available commands.`),this.createNewCommandLine()}addOutput(e){let t=document.createElement("div");t.className="terminal-output",t.innerHTML=e,this.terminal.querySelector(".terminal-content").appendChild(t)}createNewCommandLine(){let e=document.getElementById("command-line-template").content.cloneNode(!0);this.content.appendChild(e),this.content.scrollTop=this.content.scrollHeight,this.focusCurrentInput()}focusCurrentInput(){requestAnimationFrame(()=>{let e=this.terminal.querySelector(".command-input:not([disabled]):last-of-type");if(e){e.focus();let t=e.value.length;e.setSelectionRange(t,t)}})}showHelp(){let e=document.getElementById("help-template").content.cloneNode(!0);this.content.appendChild(e)}showAbout(){let e=`
        Hi, I'm carpediem23! \u{1F44B}
        I'm a Fullstack Developer passionate about creating 
        web and mobile applications using modern technologies.
        I love music \u{1F3B5} and gaming \u{1F3AE} in my free time.
      `;this.addOutput(e)}showSkills(){let e=`
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
      `;this.addOutput(e)}showProjects(){let e=`
        Notable Projects:
        1. Virtual Card Terminal (This website!)
        2. Various Web, Game and Mobile Applications
        
        For more details, visit: https://github.com/carpediem23
      `;this.addOutput(e)}showContact(){let e=`
        Get in touch:
        - GitHub: https://github.com/carpediem23
        - LinkedIn: https://www.linkedin.com/in/alptugturkis
      `;this.addOutput(e)}clearTerminal(){this.terminal.querySelector(".terminal-content").innerHTML=""}}async function t(){if("serviceWorker"in navigator)try{let e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(e=>e.unregister()));let t=await caches.keys();await Promise.all(t.map(e=>caches.delete(e)));let n=await navigator.serviceWorker.register(o,{updateViaCache:"none"});n.waiting&&n.waiting.postMessage({type:"SKIP_WAITING"}),console.log("ServiceWorker registered:",n)}catch(e){console.log("ServiceWorker registration failed:",e)}}async function n(){await t(),new e("terminal-container")}window.onload=async()=>n()}();
//# sourceMappingURL=index.91ae225a.js.map
