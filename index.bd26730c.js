window.onload=()=>{let e=document.getElementById("canvas"),t=e.getContext("2d"),n=[],o=document.getElementById("ambience"),i=document.getElementById("select"),r=document.getElementById("audio-switch"),c="true"===r.getAttribute("data-can-play");function d(){c=!c,r.setAttribute("data-can-play",c),c?(r.querySelector("i").classList.remove("iconoir-sound-off"),r.querySelector("i").classList.add("iconoir-sound-high"),o.muted=!1,i.muted=!1,o.play()):(r.querySelector("i").classList.remove("iconoir-sound-high"),r.querySelector("i").classList.add("iconoir-sound-off"),o.muted=!0,r.muted=!0)}function a(){c&&(i.currentTime=0,i.play())}!function(){try{(function(){for(let t=0;t<200;t++)n.push({x:Math.random()*e.width,y:Math.random()*e.height,length:1*Math.random(),speed:1*Math.random()});(function o(){t.clearRect(0,0,e.width,e.height),t.strokeStyle="rgba(0, 131, 12, 1)",t.lineWidth=.25,n.forEach(e=>{t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(e.x,e.y+e.length),t.stroke()}),n.forEach(t=>{t.y+=t.speed,t.y>e.height&&(t.y=-t.length,t.x=Math.random()*e.width)}),requestAnimationFrame(o)})()})(),function(){let e=document.getElementById("typewriter"),t=e.innerHTML;e.innerHTML="";let n=0,o=2e3/t.length;!function i(){n<t.length&&(e.innerHTML+=t.charAt(n),n++,setTimeout(i,o))}()}(),r.addEventListener("click",d),document.querySelectorAll(".social-link").forEach(e=>{e.addEventListener("mouseenter",a)})}catch(e){console.error("An error occurred: ",e)}}()};
//# sourceMappingURL=index.bd26730c.js.map
