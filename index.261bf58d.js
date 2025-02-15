!function(){function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequire94c2;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequire94c2=o);var r=o.register;r("iE7OH",function(t,n){e(t.exports,"register",function(){return i},function(e){return i=e});var i,o=new Map;i=function(e,t){for(var n=0;n<t.length-1;n+=2)o.set(t[n],{baseUrl:e,path:t[n+1]})}}),r("aNJCr",function(t,n){e(t.exports,"getBundleURL",function(){return i},function(e){return i=e});var i,o={};i=function(e){var t=o[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),o[e]=t),t}}),o("iE7OH").register(o("aNJCr").getBundleURL("36NOL"),JSON.parse('["36NOL","index.261bf58d.js","2upJ9","sw.js"]'));var s={};s=o("aNJCr").getBundleURL("36NOL")+"sw.js",function(){class e{constructor(e){this.container=document.getElementById(e),this.terminal=this.container.querySelector(".terminal"),this.content=this.terminal.querySelector(".terminal-content"),this.history=[],this.historyIndex=-1,this.commands={help:()=>this.showHelp(),about:()=>this.showAbout(),skills:()=>this.showSkills(),projects:()=>this.showProjects(),contact:()=>this.showContact(),clear:()=>this.clearTerminal()},this.activeInput=null,this.init(),this.focusCurrentInput()}init(){this.addEventListeners(),this.showWelcomeMessage()}showWelcomeMessage(){let e=document.getElementById("welcome-template").content.cloneNode(!0);this.content.appendChild(e),this.createNewCommandLine()}addEventListeners(){document.addEventListener("keydown",e=>{let t=this.terminal.querySelector(".command-input:not([disabled]):last-of-type");"Enter"===e.key&&t&&t.value.trim()&&this.executeCommand(t.value)}),this.terminal.addEventListener("click",()=>{this.focusCurrentInput()})}executeCommand(e){let t=e.toLowerCase().trim();this.history.push(t),this.historyIndex=this.history.length;let n=this.terminal.querySelector(".command-input:not([disabled]):last-of-type");n&&(n.disabled=!0,n.value=e),this.commands[t]?this.commands[t]():this.addOutput(`Command not found: ${t}
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
      `;this.addOutput(e)}clearTerminal(){this.terminal.querySelector(".terminal-content").innerHTML=""}}async function t(){if("serviceWorker"in navigator)try{let e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(e=>e.unregister()));let t=await caches.keys();await Promise.all(t.map(e=>caches.delete(e)));let n=await navigator.serviceWorker.register(s,{updateViaCache:"none"});n.waiting&&n.waiting.postMessage({type:"SKIP_WAITING"}),console.log("ServiceWorker registered:",n)}catch(e){console.log("ServiceWorker registration failed:",e)}}async function n(){await t(),new e("terminal-container")}window.onload=async()=>n()}()}();
//# sourceMappingURL=index.261bf58d.js.map
